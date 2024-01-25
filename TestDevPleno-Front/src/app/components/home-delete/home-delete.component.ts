import { Component } from '@angular/core';
import { ListaDeReproducao } from '../../model/ListaDeReproducao';
import { ListaDeReproducaoService } from '../../services/lista-de-reproducao-service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-delete',
  templateUrl: './home-delete.component.html',
  styleUrl: './home-delete.component.css'
})

export class HomeDeleteComponent {

  listaDeReproducao: ListaDeReproducao = {
    nome: "",
    descricao: "",
    musicas: [],
  }

  constructor(private service: ListaDeReproducaoService,
              private router: Router,
              private route: ActivatedRoute,
              private toast: ToastrService) {};

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

  delete(): void {
    this.service.delete(this.listaDeReproducao.nome).subscribe(
      {
        next: () => {
          this.toast.success("Lista de reprodução deletada com sucesso!", "Remoção");
          this.router.navigate([""]);
        },
        error: (ex) => {
          if(ex.error.errors) {
            ex.error.errors.forEach(element => {
              this.toast.error(element.message);
            });
          } else {
            this.toast.error(ex.error.message);
          }
        }
      })
  }
}

