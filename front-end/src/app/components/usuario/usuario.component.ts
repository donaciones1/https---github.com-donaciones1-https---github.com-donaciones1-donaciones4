import { Component, OnInit, HostBinding } from '@angular/core';
import { IOrganizacion } from 'src/app/models/organizacion';
import { Usuario } from 'src/app/models/Usuario';
import { OrganizacionService } from 'src/app/services/organizacion.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { OrganizacionComponent } from '../organizacion/organizacion.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @HostBinding('class') classes = 'row'

  usuarios: any = []

  modalswitch: boolean

  constructor(private usuarioService: UsuariosService) {

  }

  ngOnInit() {
    this.getUsuarios()
  }


  getUsuarios() {
    this.usuarioService.getAll()
      .subscribe(
        res => {
          this.usuarios = res
        },
        err => console.error(err)
      );
  }


  deleteUsuario(id: string) {
    this.usuarioService.deleteOne(id)
      .subscribe(
        res => {
          console.log(res)
          this.getUsuarios()
        },
        err => console.error(err)
      )
  }


  abrirModal(){
   this.modalswitch=!this.modalswitch 
   console.log(this.modalswitch)
  }

}
