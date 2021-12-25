import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {

  @Input() Resultat: string = "";
  
  dalleVisible: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * clicDalle
   */
   public clicDalle() {
    console.log("clicDalle");
    this.dalleVisible = false;
    setTimeout(() => {
      // this.isDalle18Trouve = true;
      console.log('sleep');
      this.dalleVisible = true;
    }, 1000);
  }

}
