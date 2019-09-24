import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent {

  constructor( ) { }

  ngOnInit() {
  }

  alertNnavigate() {
    alert('You are now logged in as patient b1aab4d3-3680-36e3-97ed-a44071176a15. Make sure not to delete this patient entry during test.');
  }

}
