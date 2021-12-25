import { Component } from '@angular/core';
import { trigger, transition, state, animate, style, AnimationEvent } from '@angular/animations';
import { Resultat } from './models/resultat.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('dalleTodalle', [
      state('dalle1', style({
        top: '5%',
        left: '5%',
      })),
      state('dalle18', style({
        top: '25%',
        left: '5%',
      })),
      state('dalle17', style({
        top: '45%',
        left: '5%',
      })),
      state('dalle16', style({
        top: '65%',
        left: '5%',
      })),
      state('dalle15', style({
        top: '85%',
        left: '5%',
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
export class AppComponent {
  title = 'picplumtables';

  dalleTrouveJoueur1: string = '';
  dalleTrouveJoueur2: string = '';

  // table = 5;

  Multiplication1: string = "9 x 1";
  Multiplication2: string = "9 x 2";
  Multiplication3: string = "9 x 3";
  Multiplication4: string = "9 x 4";
  Multiplication5: string = "9 x 5";
  Multiplication6: string = "9 x 6";
  Multiplication7: string = "9 x 7";
  Multiplication8: string = "9 x 8";
  Multiplication9: string = "9 x 9";

  ResultatValue = [9, 18, 27, 36, 45, 54, 63, 72, 81];

  Resultats: Resultat[] = [];

  classePionEleve: string = "20%";
  dallesCliquable: boolean = true;

  constructor() {
    this.ResultatValue.forEach(valeur => {
      this.Resultats.push(new Resultat(valeur, true))
    });
    // La postiion initiale du pion du joueur 1 est sur la dalle 1
    this.dalleTrouveJoueur1 = "dalle1";
    this.dalleTrouveJoueur2 = "dalle10";
  }

  /**
   * clicDalle
   */
  public clicDalle(resultat: Resultat) {
    console.log("Clic");

    if (this.dallesCliquable) {
      console.log("Clic dallesCliquable", this.dalleTrouveJoueur1);
      this.dallesCliquable = false;
      resultat.visible = false;
      setTimeout(() => {
        this.dallesCliquable = true;
        switch (this.dalleTrouveJoueur1) {
          case "dalle1":
            this.testBonneDalle(resultat, 63, "dalle18");
            break;
          case "dalle18":
            this.testBonneDalle(resultat, 72, "dalle17");
            break;
          case "dalle17":
            this.testBonneDalle(resultat, 81, "dalle16");
            break;
          case "dalle16":
            this.testBonneDalle(resultat, 54, "dalle15");
            break;
          case "dalle15":
            this.testBonneDalle(resultat, 45, "dalle14");
            break;
          case "dalle14":
            this.testBonneDalle(resultat, 36, "dalle13");
            break;
          case "dalle13":
            this.testBonneDalle(resultat, 27, "dalle12");
            break;
          case "dalle12":
            this.testBonneDalle(resultat, 18, "dalle11");
            break;
          case "dalle11":
            this.testBonneDalle(resultat, 9, "dalle10");
            break;
          case "dalle10":
            this.testBonneDalle(resultat, 63, "dalle9");
            break;
          case "dalle9":
            this.testBonneDalle(resultat, 72, "dalle8");
            break;
          case "dalle8":
            this.testBonneDalle(resultat, 81, "dalle7");
            break;
          case "dalle7":
            this.testBonneDalle(resultat, 54, "dalle6");
            break;
          case "dalle6":
            this.testBonneDalle(resultat, 45, "dalle5");
            break;
          case "dalle5":
            this.testBonneDalle(resultat, 36, "dalle4");
            break;
          case "dalle4":
            this.testBonneDalle(resultat, 27, "dalle3");
            break;
          case "dalle3":
            this.testBonneDalle(resultat, 18, "dalle2");
            break;
          case "dalle2":
            this.testBonneDalle(resultat, 9, "dalle1");
            break;
          case "dalle1":
            this.testBonneDalle(resultat, 63, "dalle18");
            break;
          default:
            break;
        }

        console.log('sleep');
        resultat.visible = true;
      }, 1000);
    }
  }

  private testBonneDalle(resultat: Resultat, valeur: number, dalleSuivante: string) {
    console.log("Valeur et resultat.value ", valeur, resultat.value);    
    if (resultat.value === valeur) {
      this.dalleTrouveJoueur1 = dalleSuivante;
      console.log("this.dalleTrouve ",this.dalleTrouveJoueur1);      
    }
    else {
      // C'est à l'autre joueur de jouer
    }
  }
}
