import { ContainerService } from './../../services/container.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Container } from 'src/app/model/container';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-container',
  templateUrl: './formulario-container.component.html',
  styleUrls: ['./formulario-container.component.css']
})
export class FormularioContainerComponent implements OnInit {

  containerForm: FormGroup
  constructor
  (
    private containerService: ContainerService,
    private formBuilder: FormBuilder,
    private roteador: Router
  )
  {
    this.containerForm = this.formBuilder.group({
      id: [''],
      cliente : ['', Validators.required],
		  numeroContainer : ['', Validators.required],
		  tipo : ['', Validators.required],
		  status : ['', Validators.required],
		  categoria : ['', Validators.required],
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
