import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../services/manager.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent implements OnInit {

  constructor(private manager: ManagerService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

  }
}
