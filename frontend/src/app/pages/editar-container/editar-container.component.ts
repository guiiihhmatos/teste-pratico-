import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-editar-container',
  templateUrl: './editar-container.component.html',
  styleUrls: ['./editar-container.component.css']
})
export class EditarContainerComponent implements OnInit {

  containerForm: FormGroup
  passedContainer: any
  constructor
  (
    private containerService: ContainerService,
    private formBuilder: FormBuilder,
    private roteador: Router
  )
  {
    this.passedContainer = history.state.data

    console.log(this.passedContainer)
    
    this.containerForm = this.formBuilder.group({
      id: [this.passedContainer.id],
      cliente : [this.passedContainer.cliente],
		  numeroContainer : [this.passedContainer.numeroContainer],
		  tipo : [this.passedContainer.tipo],
		  status : [this.passedContainer.status],
		  categoria : [this.passedContainer.categoria],

    })
  }

  ngOnInit(): void {
  }

  onSaveContainer()
  {
    this.containerService.onSaveContainers(this.containerForm.value).subscribe(value => {

      this.roteador.navigate(['lista-containers'])
    },
    error => {
      console.error(error)
    })
  }


}
