import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {

  tables = ["3","4","5","6","7","8","9"]

  constructor() { }

  ngOnInit(): void {
  }

  creerPartie(){
    
  }

}
