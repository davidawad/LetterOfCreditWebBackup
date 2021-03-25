/*import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as TweenMax from './../../../node_modules/gsap/TweenLite.js';
import * as Sine from './../../../node_modules/gsap/TweenLite.js';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {
  path: string;

  ngAfterViewInit(): void {

$('#login-button').click(function(){
  $('#login-button').fadeOut('slow', function(){
    $('#container').fadeIn();
    TweenMax.from('#container', .4, { scale: 0, ease:Sine.easeInOut});
    TweenMax.to('#container', .4, { scale: 1, ease:Sine.easeInOut});
  });
  $('#logo').animate({'width': '40%', 'height': '40%'}, 1000);
});

$('.close-btn').click(function(){
  TweenMax.from('#container', .4, { scale: 1, ease:Sine.easeInOut});
  TweenMax.to('#container', .4, { left:'0px', scale: 0, ease:Sine.easeInOut});
  $('#container, #forgotten-container').fadeOut(800, function(){
    $('#login-button').fadeIn(800);
  });
  $('#logo').animate({'width': '100%', 'height': '100%'}, 1000);
});

/* Forgotten Password */
/*$('#forgotten').click(function(){
  $('#container').fadeOut(function(){
    $('#forgotten-container').fadeIn();
  });
});
  }

  constructor() { }

  ngOnInit() {
  }

}
*/
