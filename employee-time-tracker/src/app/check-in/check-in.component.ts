import { Component, OnInit, Inject } from "@angular/core";
import { EmployeeInfoService } from "../services/employee-info.service";
import { ToastrService } from "ngx-toastr";
import { TimeTrackService } from "../services/time-track.service";
import { NgForm, FormControl } from "@angular/forms";
import { formatDate, DOCUMENT } from "@angular/common";
import { AuthenticationService } from "../services/authentication.service";
import { TimeTrack } from "../models/time-track.model";

@Component({
  selector: "app-check-in",
  templateUrl: "./check-in.component.html",
  styleUrls: ["./check-in.component.css"],
})
export class CheckInComponent implements OnInit {
  today = new Date();
  date = new FormControl(new Date());
  currUser: number = this.authService.currentUserValue.id_num;
  currManager: number = this.authService.currentUserValue.manager_id;
  user = document.getElementById("employee_init_id") as HTMLInputElement;
  clockedIn: boolean = false;
  lastTimeTrackInput: TimeTrack; //holds last input timetrack value from current user which time-out is default and waiting for updating

  constructor(public timeService: TimeTrackService, private toastr: ToastrService, public service: EmployeeInfoService, public authService: AuthenticationService, @Inject(DOCUMENT) private element: Document) { }

  /**
  * when form is rendering display default data into the form.
  */
  ngOnInit(): void {
    this.resetForm();
    
    this.timeService.timeFormData.employee_init_id = this.currUser;

    this.isLastEntryTimeOutEntered();
  }

  /**
   * When clocking-in save the new record and notify app that clocked in has been clicked and cannot be pressed until clocked-out is pressed until midnight.
   * @param timeForm form data from timer form
   */
  onSubmit(timeForm: NgForm) {
    this.clockedIn = true;//remembering that we have clocked-in
    if (this.timeService.timeFormData.timer_id == 0) {
      this.insertRecord(timeForm);
      this.resetForm();
      //this.element.location.reload()
    } else {
      this.updateRecord(timeForm);
      this.resetForm();
      //this.element.location.reload()
    }
  }
  /**
   * here we update form with data in clocked-out form.
   * It needs to hold trhe same data from last clocked in plus current time for time-out.
   */
  updateFormWithDataFromLastOutput() {
    if (this.clockedIn) {
      let newTime_outRecord = formatDate(this.today, 'HH:mm:ss', 'en-US');//new time_out data to update the default one.
      //creating a new from with the data from the last timetrack array value.
      this.timeService.timeFormData = {
        timer_id: this.lastTimeTrackInput.timer_id,
        employee_init_id: this.lastTimeTrackInput.employee_init_id,
        date_of_work: this.lastTimeTrackInput.date_of_work,
        time_in: this.lastTimeTrackInput.time_in,
        time_out: newTime_outRecord,
      };
    }
  }
  /**
   * This will update data from last clock in and restart the cycle for the next clock -in 
   * @param form data from timer form
   */
  clockOut(form: NgForm) {
    this.updateFormWithDataFromLastOutput();//we insert data into timer form last time-in will be updated from the table when last clocked in and current time when clocked out is pressed.
    this.clockedIn = false;//enable clock in button.
    this.lastTimeTrackInput = undefined;//erasing last input timetrack value from current user because its upadetd and we have no use for it.
    this.updateRecord(form);//Update last clock-in record with clock-out record.
    this.resetForm();//reset form
    window.location.reload();//refresh page
  }
  /**
   * Updates data in server
   * @param timeForm data from timer form
   */
  updateRecord(timeForm: NgForm) {
    this.timeService.putTimeTracking().subscribe(
      (res) => {
        this.resetForm(timeForm);
        this.toastr.info("Updated successfully", "Time Tracking Register");
        this.element.location.reload()
      },
      (err) => {
        this.toastr.error(err.message, "Error!");
      }
    );
  }
  /**
   * insert new time record in server
   * @param timeForm 
   */
  insertRecord(timeForm: NgForm) {
    this.timeService.postTimeTracking().subscribe(
      (res) => {
        this.resetForm(timeForm);
        this.element.location.reload()
      },
      (err) => {
        this.toastr.error(err.message, "Error!");
      }
    );
  }
  /**
   * We are resetting time form to current date/time so to keep it up to date.
   * @param timeForm data from timeform 
   */
  resetForm(timeForm?: NgForm) {
    if (timeForm != null)
      timeForm.form.reset();//we delete all input fields data in timer form
    this.timeService.timeFormData = {// we create new data to insert it in time form to keep it up to date and ready for the next input.
      timer_id: 0,
      employee_init_id: 0,
      date_of_work: formatDate(this.today, 'yyyy-MM-dd', 'en'),//current date
      time_in: formatDate(this.today, 'HH:mm:ss', 'en-US'),//current time
      time_out: formatDate(this.today, 'HH:mm:ss', 'en-US'),//current time
    }
  }

  /**
   * Method checks to see if last record entered time-out value has been entered aka. clocked-out
   * The indicator that checks if clock-out has been entered is if the clock-in and clock-out are equal.
   * Because if not, then the result when calculating total time of that day will be 0.
   */
  isLastEntryTimeOutEntered() {
    this.timeService.getAll().subscribe((res) => {
      //get list of timestamps of current user
      let allCurrentUserTimeTrackData = this.getTimeTracksOfCurrentUser(res); //get timetracks of current user
      if (allCurrentUserTimeTrackData.length === 0) {
        //if no entries exists stop.
        this.clockedIn = false; //enable the clock in button since there are no records so there is no need to clock out.
      } else {
        let lastEntry =
          allCurrentUserTimeTrackData[allCurrentUserTimeTrackData.length - 1]; //get last timetrack record of current user
        if (
          lastEntry.date_of_work.substring(0, 10) ===
          "" + formatDate(new Date(), "yyyy-MM-dd", "en")
        ) {
          //compare last time record date with todays date
          //Dates are the same with last record and todays date are equal.
          if (lastEntry.time_in === lastEntry.time_out) {
            //if time-out has not been entered.
            this.clockedIn = true; //disable clock-in button, clock-out button is enabled.
            this.lastTimeTrackInput = lastEntry;
            //times are the same must update record!!!
            this.timeService.timeFormData.time_in = lastEntry.time_in; //Clocked-out is enabeled dislay time-in data from last clocked-in data input!
          }
        }
      }
    });
  }
  /**
   * This method seperates the current users TimeTracks from the others.
   * @param data holds an array of all TimeTracks in storage
   * @returns All array Timestack data of current user.
   */
  getTimeTracksOfCurrentUser(data: TimeTrack[]) {
    let currentUserTimeTracks = []; //new array to hold current users data
    data.forEach((element) => {
      //loop each TimeTrack
      if (
        element.employee_init_id ==
        this.timeService.timeFormData.employee_init_id
      ) {
        //If both id's match then push this record
        currentUserTimeTracks.push(element); //add record to array
      }
    });
    return currentUserTimeTracks; //return new array with only current users timetracks
  }
}
