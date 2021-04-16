import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit {

  stats = [
    {label: 'Favorites', value: 234},
    {label: 'Likes', value: 3234},
    {label: 'Users', value: 1234},
  ];

  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'this is a fantastic couch to sit on...'
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'this is a fantastic dresser to sit on...'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
