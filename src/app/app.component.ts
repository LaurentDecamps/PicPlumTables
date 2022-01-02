import { Component, Inject } from '@angular/core';
import { trigger, transition, state, animate, style } from '@angular/animations';
import { Resultat } from './models/resultat.model';
import { Multiplication } from './models/multiplication.model';
import { UtilsService } from './services/utils.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
export class AppComponent {
  title = 'picplumtables';

  dalleJoueur1: string = '';
  dalleJoueur2: string = '';

  numeroJoueur: number = 1;
  nombreDeJoueur: number = 2;

  tableSelected = 9;

  tables = ["3", "4", "5", "6", "7", "8", "9"]

  table = 3;

  nombreDalles = 18;
  prefixDalle = "dalle";

  ResultatValue = [
    this.table * 1,
    this.table * 2,
    this.table * 3,
    this.table * 4,
    this.table * 5,
    this.table * 6,
    this.table * 7,
    this.table * 8,
    this.table * 9];

  Resultats: Resultat[] = [];
  Multiplications: Multiplication[] = [];
  LigneMultiplicationHaut: Multiplication[] = [];
  LigneMultiplicationBas: Multiplication[] = [];
  LigneMultiplicationGauche: Multiplication[] = [];
  LigneMultiplicationDroite: Multiplication[] = [];

  classePionEleve: string = "20%";
  dallesCliquable: boolean = true;
  chanceVictoire: number = 0;

  plateauVisible = false;

  constructor(private utilsService: UtilsService,
    private dialog: MatDialog) {

    utilsService.shuffle(this.ResultatValue);

    this.ResultatValue.forEach(valeur => {
      this.Resultats.push(new Resultat(valeur, true))
    });
    // La postiion initiale du pion du joueur 1 est sur la dalle 1
    this.dalleJoueur1 = "dalle9";
    // Celle du joueur 2 est sur la dalle 10 à l'opposé
    this.dalleJoueur2 = "dalle10";

    for (let index = 0; index < 9; index++) {
      let facteur = index + 1;
      this.Multiplications.push(new Multiplication(facteur, this.table.toString() + " x " + facteur.toString()))
    }

    let index = 0;

    utilsService.shuffle(this.Multiplications);

    this.Multiplications.forEach(Multiplication => {
      if (index < 6) this.LigneMultiplicationHaut.push(Multiplication);
      index++;
    });
    utilsService.shuffle(this.LigneMultiplicationHaut);

    for (let index = 5; index > -1; index--) {
      this.LigneMultiplicationBas.push(this.Multiplications[index])
    }

    utilsService.shuffle(this.LigneMultiplicationBas);

    for (let index = 8; index > 5; index--) {
      this.LigneMultiplicationDroite.push(this.Multiplications[index])
    }
    utilsService.shuffle(this.LigneMultiplicationDroite);

    for (let index = 6; index < 9; index++) {
      this.LigneMultiplicationGauche.push(this.Multiplications[index])
    }
    utilsService.shuffle(this.LigneMultiplicationGauche);
  }

  LancerLaPartie() {
    this.plateauVisible = true;
  }

  /**
   * le nom de dalle de départ est sous la forme "dalle" + "un numéro de 1 à 18"
   * la dalle d'arrivée est "dalle" + le numéro de la dalle de départ - 1 sauf pour la dalle 1 
   * @param dalleDepart 
   * @returns le dalle suivante
   */
  private getNextDalle(dalleDepart: string, dalleDepartJoueurAdverse: string) {
    // on va découper la chaîne de caractère de la dalle de départ
    //  pour récupérer le numéro    
    let numeroDalleDepart = parseInt(dalleDepart.split(this.prefixDalle)[1]);
    let numeroDalleDepartJoueurAdverse = parseInt(dalleDepartJoueurAdverse.split(this.prefixDalle)[1]);
    let dalleASauter = 0;
    if ((numeroDalleDepart == numeroDalleDepartJoueurAdverse + 1) || (numeroDalleDepart == 1 && numeroDalleDepartJoueurAdverse == 18)) dalleASauter++;

    return this.prefixDalle + (numeroDalleDepart === 1 ? 18 - dalleASauter: numeroDalleDepart - 1 - dalleASauter);
  }

  private getFacteur(dalleArrivee: string, dalleDepartJoueurAdverse: string) {
    let numeroDalleArrivee = parseInt(dalleArrivee.split(this.prefixDalle)[1]);

    let LigneMultiplication = (numeroDalleArrivee < 7) ? this.LigneMultiplicationHaut
      : (numeroDalleArrivee < 10) ? this.LigneMultiplicationDroite
        : (numeroDalleArrivee < 16) ? this.LigneMultiplicationBas
          : this.LigneMultiplicationGauche;

    if (dalleDepartJoueurAdverse == dalleArrivee) {
      numeroDalleArrivee = numeroDalleArrivee === 1 ? this.nombreDalles : numeroDalleArrivee - 1;
      this.chanceVictoire = this.numeroJoueur;
    }

    let index = 0;
    if (numeroDalleArrivee < 7) index = numeroDalleArrivee - 1;
    else if ((numeroDalleArrivee > 6) && (numeroDalleArrivee < 10)) index = numeroDalleArrivee - 7;
    else if ((numeroDalleArrivee > 9) && (numeroDalleArrivee < 16)) index = 15 - numeroDalleArrivee;
    else if ((numeroDalleArrivee > 15) && (numeroDalleArrivee < 19)) index = 18 - numeroDalleArrivee;

    return LigneMultiplication[index].facteur;
  }

  /**
   * clicDalle
   */
  public clicDalle(resultat: Resultat) {
    if (this.dallesCliquable) {
      this.dallesCliquable = false;
      resultat.visible = false;
      setTimeout(() => {
        this.dallesCliquable = true;
        // TODO détecter la dalle sur laquelle se trouve l'adversaire        
        let dalleJoueurCourant: string = this.numeroJoueur === 1 ? this.dalleJoueur1 : this.dalleJoueur2;
        let dalleJoueurAdverseCourante: string = this.numeroJoueur === 1 ? this.dalleJoueur2 : this.dalleJoueur1;
        let nextDalle = this.getNextDalle(dalleJoueurCourant, dalleJoueurAdverseCourante);
        console.log("dalleJoueurCourant", dalleJoueurCourant);        
        console.log("dalleJoueurAdverseCourante", dalleJoueurAdverseCourante);
        console.log("nextDalle",nextDalle);
        let facteurNextDalle = this.getFacteur(nextDalle, dalleJoueurAdverseCourante);
        this.testBonneDalle(resultat, facteurNextDalle * this.table, nextDalle);
        resultat.visible = true;
      }, 1000);
    }
  }

  private testBonneDalle(resultat: Resultat, valeur: number, dalleSuivante: string) {
    if (resultat.value === valeur) {
      if (this.numeroJoueur == 1) {
        this.dalleJoueur1 = dalleSuivante;
        if (this.chanceVictoire == 1) {
          this.dialog.open(DialogWin),
          {
            winner: "Victoire Joueur 1"
          }
        }
      }
      else {
        this.dalleJoueur2 = dalleSuivante;
        if (this.chanceVictoire == 2) console.log("Victoire du joueur 2");
      }
    }
    else {
      // C'est à l'autre joueur de jouer
      if (this.numeroJoueur == this.nombreDeJoueur) this.numeroJoueur = 1;
      else this.numeroJoueur++;
      console.log("Changement de joueur ", this.numeroJoueur);
    }
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  // templateUrl: 'dialog-data-example-dialog.html',
  template: '{{winner}}'
})
export class DialogWin {
  constructor(@Inject(MAT_DIALOG_DATA) public winner: string) { }
}
