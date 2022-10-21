import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-lista-container',
  templateUrl: './lista-container.component.html',
  styleUrls: ['./lista-container.component.css']
})
export class ListaContainerComponent implements OnInit {

  container: any[] = []

  TotalImportacoes: number = 0
  TotalExportacoes: number = 0


  public displayedColumns = ['cliente', 'codContainer', 'tipo', 'status', 'categoria', 'editar', 'addMovimentacao', 'movimentacao'];

  public dataSource = new MatTableDataSource<any>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor
  (
    private containerService : ContainerService,
    private router: Router,
    public rotaAtual: ActivatedRoute
  )
  {

  }

  ngOnInit() {
    this.getAllOwners();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getAllOwners(){

    this.containerService.onGetAllContainers()
    .subscribe(res => {
      this.dataSource.data = res
    })

  }

  redirectToEdit(container : any)
  {
    this.router.navigate(['editar'], {relativeTo: this.rotaAtual, state:{data:container}})
  }

  redirectToAdd(id : any)
  {
    this.router.navigate(['add-movimentacao'], {relativeTo: this.rotaAtual, state:{data:id}})
  }

  redirectToDetails(container : any)
  {
    this.router.navigate(['detalhes-movimentacoes'], {relativeTo: this.rotaAtual, state:{data:container}})
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  onDelete(id: any)
  {
    this.containerService.onDeleteContainer(id).subscribe(value => {

      this.getAllOwners()
    })
  }

}
