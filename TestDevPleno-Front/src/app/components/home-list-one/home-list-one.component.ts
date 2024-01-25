import { Component } from '@angular/core';
import { ListaDeReproducao } from '../../model/ListaDeReproducao';
import { ActivatedRoute } from '@angular/router';
import { ListaDeReproducaoService } from '../../services/lista-de-reproducao-service';
import { Musicas } from '../../model/Musicas';
import { MatTableDataSource } from '@angular/material/table';
import { elementAt } from 'rxjs';
import { json } from 'body-parser';

@Component({
  selector: 'app-home-list-one',
  templateUrl: './home-list-one.component.html',
  styleUrl: './home-list-one.component.css'
})

export class HomeListOneComponent {
  
  listaDeReproducao: ListaDeReproducao = {
    nome: "",
    descricao: "",
    musicas: [],
  }

  constructor(private service: ListaDeReproducaoService,
              private route: ActivatedRoute) {};

  ngOnInit(): void {
    this.listaDeReproducao.nome = this.route.snapshot.paramMap.get("listNome");
    this.findByName();
  }

  findByName(): void {
    this.service.findByName(this.listaDeReproducao.nome).subscribe(
    {
      next: (response) => {
        this.listaDeReproducao = response;
      }
    })
  }

}
