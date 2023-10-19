import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'nx-aio-nx-welcome',
  templateUrl:'nx-welcome.component.html',
  styleUrls: ['nx-welcome.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  host = ''
  imgWidth = 100
  imgHeight = 100

  constructor() {
    this.host = 'Jurgen'
  }
}
