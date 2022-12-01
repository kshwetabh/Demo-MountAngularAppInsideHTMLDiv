import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  // selector: 'app-root',
  selector: '#angular-root', //Ext component ID as the mount point.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  public selection: string = '';

  public updateSelection(value: string) {
    this.selection = value;
    
    // Access DOM outside angular app/component
    const outsideEl = document.querySelector('#data-from-angular-app');
    if (outsideEl) {
      console.log(`Value writted to outside dom from Angular component: ${value}`);
      outsideEl.innerHTML = `<pre><b>${value}</b></pre>`;
    }
  }
}
