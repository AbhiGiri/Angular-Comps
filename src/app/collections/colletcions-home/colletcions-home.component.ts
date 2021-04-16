import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colletcions-home',
  templateUrl: './colletcions-home.component.html',
  styleUrls: ['./colletcions-home.component.css']
})
export class ColletcionsHomeComponent implements OnInit {

  data = [
    {name: 'Abhishek', age: '29', job: 'Developer', employee: true},
    {name: 'Adiyogi', age: '29', job: 'Sr. Developer', employee: false},
    {name: 'Aditya', age: '29', job: 'Front-end Developer', employee: true}
  ];

  headers = [
    {key: 'employee', label: 'Has a job?'},
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
