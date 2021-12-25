import { Component } from '@angular/core';
import { trigger, transition, state, animate, style, AnimationEvent } from '@angular/animations';
import { Resultat } from './models/resultat.model';
import { Multiplication } from './models/multiplication.model';
import { ThrowStmt } from '@angular/compiler';

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

  numeroJoueur: number = 1;
  nombreDeJoueur: number = 2;

  table = 9;

  ResultatValue = [9, 18, 27, 36, 45, 54, 63, 72, 81];

  Resultats: Resultat[] = [];
  Multiplications: Multiplication[] = [];
  LigneMultiplicationHaut: Multiplication[] = [];
  LigneMultiplicationBas: Multiplication[] = [];
  LigneMultiplicationGauche: Multiplication[] = [];
  LigneMultiplicationDroite: Multiplication[] = [];  

  classePionEleve: string = "20%";
  dallesCliquable: boolean = true;

  constructor() {
  
    this.shuffle(this.ResultatValue);
    console.log("this.ResultatValue", this.ResultatValue);

    this.ResultatValue.forEach(valeur => {
      this.Resultats.push(new Resultat(valeur, true))
    });
    // La postiion initiale du pion du joueur 1 est sur la dalle 1
    this.dalleTrouveJoueur1 = "dalle1";
    this.dalleTrouveJoueur2 = "dalle10";

    for (let index = 0; index < 9; index++) {
      let facteur = index + 1;
      this.Multiplications.push(new Multiplication(facteur, this.table.toString() + " x " + facteur.toString()))
    }

    let index = 0;
    
    console.log("this.Multiplications", this.Multiplications);
    
    this.shuffle(this.Multiplications);
    console.log("this.Multiplications shuffle", this.Multiplications);

    this.Multiplications.forEach(Multiplication => {
      if (index<6) this.LigneMultiplicationHaut.push(Multiplication);
      index++;
    });
    this.shuffle(this.LigneMultiplicationHaut);
    console.log("this.LigneMultiplicationHaut", this.LigneMultiplicationHaut);
    
    for (let index = 5; index > -1; index--) {
      this.LigneMultiplicationBas.push(this.Multiplications[index])
    }
    this.shuffle(this.LigneMultiplicationBas);
    console.log("this.LigneMultiplicationBas", this.LigneMultiplicationBas);
    
    for (let index = 8; index > 5; index--) {
      this.LigneMultiplicationDroite.push(this.Multiplications[index])
    }
    this.shuffle(this.LigneMultiplicationDroite);
    console.log("this.LigneMultiplicationDroite", this.LigneMultiplicationDroite);
    
    for (let index = 6; index < 9; index++) {
      this.LigneMultiplicationGauche.push(this.Multiplications[index])
    }
    this.shuffle(this.LigneMultiplicationGauche);
    console.log("this.LigneMultiplicationGauche", this.LigneMultiplicationGauche);
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
        let dalleTrouveJoueurCourant: string = this.numeroJoueur === 1 ?  this.dalleTrouveJoueur1 : this.dalleTrouveJoueur2;
        switch (dalleTrouveJoueurCourant) {
          case "dalle1":
            this.testBonneDalle(resultat, this.LigneMultiplicationGauche[0].facteur * 9, "dalle18");
            break;
          case "dalle18":
            this.testBonneDalle(resultat, this.LigneMultiplicationGauche[1].facteur * 9, "dalle17");
            break;
          case "dalle17":
            this.testBonneDalle(resultat, this.LigneMultiplicationGauche[2].facteur * 9, "dalle16");
            break;
          case "dalle16":
            this.testBonneDalle(resultat, this.LigneMultiplicationBas[0].facteur * 9, "dalle15");
            break;
          case "dalle15":
            this.testBonneDalle(resultat, this.LigneMultiplicationBas[1].facteur * 9, "dalle14");
            break;
          case "dalle14":
            this.testBonneDalle(resultat, this.LigneMultiplicationBas[2].facteur * 9, "dalle13");
            break;
          case "dalle13":
            this.testBonneDalle(resultat, this.LigneMultiplicationBas[3].facteur * 9, "dalle12");
            break;
          case "dalle12":
            this.testBonneDalle(resultat, this.LigneMultiplicationBas[4].facteur * 9, "dalle11");
            break;
          case "dalle11":
            this.testBonneDalle(resultat, this.LigneMultiplicationBas[5].facteur * 9, "dalle10");
            break;
          case "dalle10":
            this.testBonneDalle(resultat, this.LigneMultiplicationDroite[2].facteur * 9, "dalle9");
            break;
          case "dalle9":
            this.testBonneDalle(resultat, this.LigneMultiplicationDroite[1].facteur * 9, "dalle8");
            break;
          case "dalle8":
            this.testBonneDalle(resultat, this.LigneMultiplicationDroite[0].facteur * 9, "dalle7");
            break;
          case "dalle7":
            this.testBonneDalle(resultat, this.LigneMultiplicationHaut[5].facteur * 9, "dalle6");
            break;
          case "dalle6":
            this.testBonneDalle(resultat, this.LigneMultiplicationHaut[4].facteur * 9, "dalle5");
            break;
          case "dalle5":
            this.testBonneDalle(resultat, this.LigneMultiplicationHaut[3].facteur * 9, "dalle4");
            break;
          case "dalle4":
            this.testBonneDalle(resultat, this.LigneMultiplicationHaut[2].facteur * 9, "dalle3");
            break;
          case "dalle3":
            this.testBonneDalle(resultat, this.LigneMultiplicationHaut[1].facteur * 9, "dalle2");
            break;
          case "dalle2":
            this.testBonneDalle(resultat, this.LigneMultiplicationHaut[0].facteur * 9, "dalle1");
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

  shuffle(array: any[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  private testBonneDalle(resultat: Resultat, valeur: number, dalleSuivante: string) {
    console.log("Valeur et resultat.value ", valeur, resultat.value);    
    if (resultat.value === valeur) {
      if (this.numeroJoueur == 1) this.dalleTrouveJoueur1 = dalleSuivante;
      else this.dalleTrouveJoueur2 = dalleSuivante;
      console.log("this.dalleTrouve ",this.dalleTrouveJoueur1);      
    }
    else {
      // C'est à l'autre joueur de jouer
      if (this.numeroJoueur == this.nombreDeJoueur) this.numeroJoueur = 1;
      else this.numeroJoueur++;
      console.log("Changement de joueur ", this.numeroJoueur);
    }
  }
}