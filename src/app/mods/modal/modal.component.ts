import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() close = new EventEmitter();

  constructor(
    private el: ElementRef
  ) {

    console.log(this.el.nativeElement);
  }

  ngOnInit() {

    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.el.nativeElement.remove();
  }

  onCloseClick() {
    this.close.emit();
  }

}
