import { state, trigger,style,transition,animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger('openclose',[
      state('open',style({
        height:'500px',
        backgroundColor:'aqua'
      })),
      state('close',style({
        height:'250px',
        backgroundColor:'coral'
      })),
      transition('open=>close',[animate('2s')]),
      transition('close=>open',[animate('1s')]),



    ])
  ]
})
export class AnimationComponent implements OnInit {
  isOpen=true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isOpen=!this.isOpen

  }

}
