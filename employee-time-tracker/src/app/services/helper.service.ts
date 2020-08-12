export class HelperMethods {
  filterTable(inputField: string, tableToFilter: string) {
    // Declare variables
    var input, filter, table, tr, td, i, j;
    var match = false;
    input = document.getElementById(inputField);
    filter = input.value.toUpperCase();
    table = document.getElementById(tableToFilter);
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      if (!tr[i].classList.contains('header')) {
        td = tr[i].getElementsByTagName("td"),
          match = false;
        for (j = 0; j < td.length; j++) {
          if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
            match = true;
            break;
          }
        }
        if (!match) {
          tr[i].style.display = "none";
        } else {
          tr[i].style.display = "";
        }
      }
    }
  }

  sortTable(tableName: string, n: number) {
    var table, rows, sorting, i, x, y, shouldSort, dir, sortCount = 0;
    table = document.getElementById(tableName);
    sorting = true;

    // Sorting to ascending
    dir = "asc";

    /**
    * Loop until there is no switchin
    */
    while (sorting) {

      // Set sorting to false
      sorting = false;
      rows = table.rows;

      /**
      * Loop through <tr> except header rows
      */
      for (i = 1; i < (rows.length - 1); i++) {

        // Set shouldSort to false
        shouldSort = false;
        /*
        * Compare two elements from current and next row
        */
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /*
        * Check if rows are in order and if they need sorting
        */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If they do, set shouldSort to true
            shouldSort = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If they do, set shouldSort to true
            shouldSort = true;
            break;
          }
        }
      }

      if (shouldSort) {
        /*
         * If shouldSort is true, make the switch to sort and set sorting to true 
        */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        sorting = true;
        // When sorting is done, add 1 to count
        sortCount++;
      } else {
        /*
        * If there hasn't been any sorting, sort in other way
        */
        if (sortCount == 0 && dir == "asc") {
          dir = "desc";
          sorting = true;
        }
      }
    }
  }

  
  /**
   * Get hours worked in a day
   * @param date 
   * @param _start 
   * @param _end 
   */
  calculateTimeWorkedOfTheDay(date: String, _start: String, _end: String) {
    let d1 = new Date(date.substring(0, 10) + "T" + _start + "Z");
    let d2 = new Date(date.substring(0, 10) + "T" + _end + "Z");
    let _24hinMiliseconds = 86400000;
    if (d1.getTime() > d2.getTime()) {
      let total = (_24hinMiliseconds - d1.getTime()) + d2.getTime();
      return parseFloat(this.convertMilisecondsToHours(total).toFixed(3));
    } else {
      let total = d2.getTime() - d1.getTime();
      return parseFloat(this.convertMilisecondsToHours(total).toFixed(3));
    }
  }

  /**
   * Formating total hours worked to whole hours and minutes.
   * @param totalTimeInHours total hours worked by employee in total
   */
  formatTotalTimeWorked(totalTimeInHours: number): string {
    let hours = Math.floor(totalTimeInHours);
    let minutes = this.roundHourRemainderToMinutes(totalTimeInHours);
    return hours + "h " + minutes + "m";
  }
  
  /**
   * converts miliseconds to hours
   * @param ms when subtracting time it return in miliseconds.
   */
  convertMilisecondsToHours(ms: number): number {
    let hours = ((ms / 1000) / 60) / 60;
    return hours;
  }

  /**
   * Turns hours remainder to minutes
   * @param hours total hours workde in decimals
   * @return minutes that was converted from hours remainder.
   */
  roundHourRemainderToMinutes(hours: number) {
    let wholeHours = Math.floor(hours);
    let remainder = hours - wholeHours;
    let minutes = remainder * 60;
    return Math.floor(minutes);
  }

}//eoc
