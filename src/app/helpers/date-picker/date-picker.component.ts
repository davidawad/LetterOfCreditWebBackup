import { Component, OnInit } from '@angular/core';
import { DatepickerModule } from 'ngx-bootstrap';

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})

export class DatePickerComponent {
 public bsValue: any ;
 public bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];
}
