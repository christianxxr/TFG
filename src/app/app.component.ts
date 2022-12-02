import { Component, OnInit } from '@angular/core';
import { InmueblesService } from './servicios/inmuebles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [InmueblesService]
})
export class AppComponent implements OnInit {

  title = 'FutureSweetHome';

  constructor(private dataInmuebles: InmueblesService) {}

  ngOnInit(): void {
    console.log('Componente principal inicializado');
  }
}
