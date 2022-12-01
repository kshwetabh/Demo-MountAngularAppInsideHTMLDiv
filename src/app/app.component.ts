import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  // selector: 'app-root',
  selector: '#angular-root', //Ext component ID as the mount point.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  @ViewChild('selection') input: ElementRef;

}
