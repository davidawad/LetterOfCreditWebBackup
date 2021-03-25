import { Component, OnInit } from '@angular/core';
import { LocService } from './../loc.service';
import { IShepherdTourOptions, IShepherdTourStep } from '../interfaces';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  me: string;
  port: number;
  options: IShepherdTourOptions;
  step: IShepherdTourStep;

  constructor(private locService: LocService, private titleService: Title) {}

  getMe(): void {
    this.locService.getMe().then(me => this.setup(me.name));
  }

  setup(me: string) {
    this.me = me;
    this.titleService.setTitle(me);
  }

  ngOnInit() {
    this.getMe();
  }
}
