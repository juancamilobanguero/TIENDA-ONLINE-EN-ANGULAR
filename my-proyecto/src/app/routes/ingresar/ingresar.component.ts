import { Component } from '@angular/core';
import { UserService } from 'src/app/api/user/user.service';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent {
   constructor(public userService:UserService,public router:Router){}

   ngOnInit(){
   
   }

   login(form: NgForm){
    let data = form.value
    if(!data.password ||  !data.username)
    return alert('debes llenar todos los campos')
    
      this.userService.login(data).subscribe((data:any)=>{
       localStorage.setItem('token',data.token)
       this.router.navigate(['/home'])
  
      }, (err: any) =>{ 
        alert("Error al iniciar sesion")
      })
  }

}




