import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  volverAProductos(texto: string): void {
    if (texto === '') this.router.navigate(['/instrumentos']);
  }

  buscarInstrumentos(texto: string): void {
    this.router.navigate(['/buscador', texto]);
  }
}
