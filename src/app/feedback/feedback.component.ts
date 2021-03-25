import { Component, OnInit } from '@angular/core';
import { StatusService } from '../services/status.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  constructor(public statusService: StatusService) { }

  ngOnInit() {
  }

}
