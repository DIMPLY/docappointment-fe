import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'booking-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less']
})
export class CalendarComponent implements OnInit {
  objectKeys = Object.keys;
  num_checked = 0;
  @Input() days;
  @Input() slots;
  @Output() public checkboxChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public checkboxChanged(e, i, day) {
/*    var afterchange = this.slots[i].occupation[day];
    if(i < this.slots.length - 1) {
      this.slots[i + 1].occupation[day] = 1;
    }
    if(i > 0) {
      this.slots[i - 1].occupation[day] = 1;
    }*/
    console.log(e.target);
    var target = e.target;
    var wrapper = target.parentElement;
    var row = wrapper.parentElement;
    var previousRow = row.previousElementSibling;
    var nextRow = row.nextElementSibling;
    this.checkboxChange.emit({
      pre_checked: previousRow && previousRow.previousElementSibling && previousRow.children[wrapper.cellIndex].children[0].checked,
      nxt_checked: nextRow && nextRow.children[wrapper.cellIndex].children[0].checked,
      prepre_checked: previousRow && previousRow.previousElementSibling && previousRow.previousElementSibling.previousElementSibling && previousRow.previousElementSibling.children[wrapper.cellIndex].children[0].checked,
      nxtnxt_checked: nextRow && nextRow.nextElementSibling && nextRow.nextElementSibling.children[wrapper.cellIndex].children[0].checked,
      none_checked: (target.checked?++this.num_checked:--this.num_checked) == 0,
      checked: target.checked,
      slotidx: i,
      date: day
    });
  }

}
