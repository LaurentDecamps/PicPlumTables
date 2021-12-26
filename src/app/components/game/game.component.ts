import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, animate, style, AnimationEvent } from '@angular/animations';
import { Resultat } from './../../models/resultat.model';
import { Multiplication } from './../../models/multiplication.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  animations: [
    trigger('dalleTodalle', [
      state('dalle1', style({
        top: '5%',
        left: '4%',
      })),
      state('dalle18', style({
        top: '25%',
        left: '4%',
      })),
      state('dalle17', style({
        top: '45%',
        left: '4%',
      })),
      state('dalle16', style({
        top: '65%',
        left: '4%',
      })),
      state('dalle15', style({
        top: '85%',
        left: '4%',
      })),
      state('dalle14', style({
        top: '85%',
        left: '21%',
      })),
      state('dalle13', style({        
        top: '85%',
        left: '38%',
      })),
      state('dalle12', style({        
        top: '85%',
        left: '54%',
      })),
      state('dalle11', style({        
        top: '85%',
        left: '71%',
      })),
      state('dalle10', style({        
        top: '85%',
        left: '88%',
      })),
      state('dalle9', style({        
        top: '65%',
        left: '88%',
      })),
      state('dalle8', style({        
        top: '45%',
        left: '88%',
      })),
      state('dalle7', style({        
        top: '25%',
        left: '88%',
      })),
      state('dalle6', style({        
        top: '5%',
        left: '88%',
      })),
      state('dalle5', style({        
        top: '5%',
        left: '71%',
      })),
      state('dalle4', style({        
        top: '5%',
        left: '54%',
      })),
      state('dalle3', style({        
        top: '5%',
        left: '38%',
      })),
      state('dalle2', style({        
        top: '5%',
        left: '21%',
      })),
      transition('* => *', [
        animate('1s ease-out')
      ]),
    ])
  ]
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
