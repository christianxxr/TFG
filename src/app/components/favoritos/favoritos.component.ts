import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
})
export class FavoritosComponent implements OnInit {
  numeros: any;
  constructor() {
    this.numeros = Array(50);
  }

  ngOnInit(): void {}
}
