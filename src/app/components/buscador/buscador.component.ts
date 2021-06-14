import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Instrumento } from 'src/app/models/instrumento';
import { InstrumentoService } from 'src/app/services/instrumento.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {
  instrumentosBuscados: Instrumento[];
  //instrumentos: Instrumento[];
  termino: string;
  constructor(
    private instrumentoService: InstrumentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.termino = this.route.snapshot.params['termino'];
    this.findByFiltro();
  }
  
  findByFiltro(): void {
    this.instrumentoService
      .getInstrumentoByFiltro(this.termino)
      .subscribe((data) => {
        this.instrumentosBuscados = data;
      });
  }

  instrumentoDetalle(id: number): void {
    this.router.navigate(['/detalle', id]);
  }

  // buscarSinApi(): void {
  //   this.instrumentoService.getAllInstrumentos().subscribe((instrumento) => {
  //       this.instrumentos = instrumento.filter((instrumento) => {
  //         return instrumento.marca.toLowerCase().indexOf(this.termino.toLowerCase()) > -1 ||
  //         instrumento.modelo.toLowerCase().indexOf(this.termino.toLowerCase()) > -1 || 
  //         instrumento.instrumento.toLowerCase().indexOf(this.termino.toLowerCase()) > -1
  //       })
  //       console.log(this.instrumentos)
  //   })
  // }
}
