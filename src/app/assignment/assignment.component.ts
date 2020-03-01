import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  Task:string[]= ["FCA/250","FCA/256","FCA/258","FCA/260","FCA/265"];
  constructor() { }

  ngOnInit() {
  }

}
