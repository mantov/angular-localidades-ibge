import { Component, OnInit } from '@angular/core';
import { IbgeService } from 'src/app/core/services/ibge.service';
import { Estados } from 'src/app/core/models/estados.model';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.scss']
})
export class EstadosComponent implements OnInit {
  estados: Estados[]

  constructor(
    private _ibgeService: IbgeService
  ) { }

  ngOnInit(): void {
    this.obterEstados()
  }

  obterEstados(){
    this._ibgeService.obterEstados().subscribe(
      res => {
        console.log(res)
      }
    )
  }
}
