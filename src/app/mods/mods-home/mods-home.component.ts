import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  openModal = false;

  items = [
    {title: 'Why the sky is blue', content: 'because the the sky it is...'},
    {title: 'What does an orange taste like ', content: 'an orange is taste like an orange'},
    {title: 'Why the sky is blue', content: 'because the the sky it is...'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onClickModal() {
    this.openModal = !this.openModal;
  }

}
