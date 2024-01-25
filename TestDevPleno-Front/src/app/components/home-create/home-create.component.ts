import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ListaDeReproducao } from './../../model/ListaDeReproducao';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ListaDeReproducaoService } from '../../services/lista-de-reproducao-service';

@Component({
  selector: 'app-home-create',
  templateUrl: './home-create.component.html',
  styleUrl: './home-create.component.css'
})

export class HomeCreateComponent {

  listaDeReproducao: ListaDeReproducao = {
    nome: "",
    descricao: "",
    musicas: []
  }

  nome: FormControl = new FormControl(null, Validators.minLength(3));
  descricao: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(private service: ListaDeReproducaoService,
              private router: Router,
              private toast: ToastrService) {};

  ngOnInit(): void {}

  create(): void {
    this.service.create(this.listaDeReproducao).subscribe(
      {
        next: () => {
          this.toast.success("Lista de reprodução cadastrada com sucesso!", "Cadastro");
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

  validaCampos(): boolean {
    return this.nome.valid && this.descricao.valid;
  }
}
