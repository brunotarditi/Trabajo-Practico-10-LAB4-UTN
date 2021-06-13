import { Component, OnInit } from '@angular/core';
import { Instrumento } from 'src/app/models/instrumento';
import { InstrumentoService } from 'src/app/services/instrumento.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  instrumentos: Instrumento[];
  constructor(private instrumentoService: InstrumentoService) { }

  ngOnInit(): void {
    this.listar()
  }

  listar(): void {
    this.instrumentoService.getAllInstrumentos().subscribe((data) => {
        this.instrumentos = data
      })
  }
}
