import { Component } from '@angular/core';
import { trigger, transition, state, animate, style, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('dalle1Todalle18', [
      state('dalle1', style({
        top: '5%',
        left: '5%'
      })),
      state('dalle18', style({
        top: '25%',
      })),
      transition('dalle1 => dalle18', [
        animate('1s')
      ]),
    ]),
  ]
})
export class AppComponent {
  title = 'picplumtables';

  isDalle18Trouve: boolean = false;

  table = 5;

  dalle1Visible: boolean = true;
  dalle2Visible: boolean = true;
  dalle3Visible: boolean = true;
  dalle4Visible: boolean = true;
  dalle5Visible: boolean = true;
  dalle6Visible: boolean = true;
  dalle7Visible: boolean = true;
  dalle8Visible: boolean = true;
  dalle9Visible: boolean = true;

  Resultat1: string = "9 x 1";
  Resultat2: string = "9 x 2";
  Resultat3: string = "9 x 3";
  Resultat4: string = "9 x 4";
  Resultat5: string = "9 x 5";
  Resultat6: string = "9 x 6";
  Resultat7: string = "9 x 7";
  Resultat8: string = "9 x 8";
  Resultat9: string = "9 x 9";
  
  Multiplication1: string = "9";
  Multiplication2: string = "18";
  Multiplication3: string = "27";
  Multiplication4: string = "36";
  Multiplication5: string = "45";
  Multiplication6: string = "54";
  Multiplication7: string = "63";
  Multiplication8: string = "72";
  Multiplication9: string = "81";

  classePionEleve: string = "20%";

  /**
   * clicDalle1
   */
  public clicDalle1() {
    console.log("clicDalle1");
    this.classePionEleve = "10%";
    this.dalle1Visible = false;
    setTimeout(() => {
      console.log('sleep');
      this.dalle1Visible = true;
    }, 1000);
  }

  /**
   * clicDalle2
   */
   public clicDalle2() {
    console.log("clicDalle2");
    this.dalle2Visible = false;
    setTimeout(() => {
      console.log('sleep');
      this.dalle2Visible = true;
    }, 1000);
  }

  /**
   * clicDalle3
   */
   public clicDalle3() {
    console.log("clicDalle3");
    this.dalle3Visible = false;
    setTimeout(() => {
      console.log('sleep');
      this.dalle3Visible = true;
    }, 1000);
  }

  /**
   * clicDalle4
   */
   public clicDalle4() {
    console.log("clicDalle4");
    this.dalle4Visible = false;
    setTimeout(() => {
      console.log('sleep');
      this.dalle4Visible = true;
    }, 1000);
  }

  /**
   * clicDalle5
   */
   public clicDalle5() {
    console.log("clicDalle5");
    this.dalle5Visible = false;
    setTimeout(() => {
      console.log('sleep');
      this.dalle5Visible = true;
    }, 1000);
  }

  /**
   * clicDalle6
   */
   public clicDalle6() {
    console.log("clicDalle6");
    this.dalle6Visible = false;
    setTimeout(() => {
      console.log('sleep');
      this.dalle6Visible = true;
    }, 1000);
  }

  /**
   * clicDalle7
   */
   public clicDalle7() {
    console.log("clicDalle7");
    this.dalle7Visible = false;
    setTimeout(() => {
      this.isDalle18Trouve = true;
      console.log('sleep');
      this.dalle7Visible = true;
    }, 1000);
  }

  /**
   * clicDalle8
   */
   public clicDalle8() {
    console.log("clicDalle8");
    this.dalle8Visible = false;
    setTimeout(() => {
      console.log('sleep');
      this.dalle8Visible = true;
    }, 1000);
  }  

  /**
   * clicDalle9
   */
   public clicDalle9() {
    console.log("clicDalle9");
    this.dalle9Visible = false;
    setTimeout(() => {
      console.log('sleep');
      this.dalle9Visible = true;
    }, 1000);
  }
}
