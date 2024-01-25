import { Component, ViewChild } from '@angular/core';
import { ListaDeReproducao } from '../../model/ListaDeReproducao';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ListaDeReproducaoService } from '../../services/lista-de-reproducao-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  ELEMENT_DATA: ListaDeReproducao[] = []

  // displayedColumns: string[] = ['titulo', 'artista', 'album', 'ano', 'genero', 'acoes'];
  displayedColumns: string[] = ['nome', 'descricao', 'musicas', 'acoes'];
  dataSource = new MatTableDataSource<ListaDeReproducao>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.findAll();
  }

  constructor(private service: ListaDeReproducaoService) {};

  findAll() {
    this.service.findAll().subscribe(response => {
      console.log(response);
      this.ELEMENT_DATA = response;
      this.dataSource = new MatTableDataSource<ListaDeReproducao>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}