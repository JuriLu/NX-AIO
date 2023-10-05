import { Component } from '@angular/core';

@Component({
  selector: 'nx-aio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // HOST MAIN APPLICATION, everything is run through here
  // Practically this is SHell Component
  title = 'host';
  imgWidth = 60
  imgHeight = 60
}
