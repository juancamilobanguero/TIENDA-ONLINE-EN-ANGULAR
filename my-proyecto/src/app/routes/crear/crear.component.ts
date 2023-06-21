import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/api/user/user.service';
import { User } from 'src/app/models/user.models';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  constructor(public userService: UserService) {}

  ngOnInit() {
    this.getAllUsers();
  }

  cleanForm() {
    this.userService.userToCreate = new User();
  }

  createOrUpdateUser(form: NgForm) {
    // revisar los campos
    let data = form.value

    if (data._id) {
      // actualizar
      this.userService.updateUser(data).subscribe((data) => {
        alert('Usuario actualizado');
        this.getAllUsers();
      });
      this.cleanForm();
      return;
    }

    //crear usuario
    delete data._id;

    this.userService.createUser(data).subscribe((data: any) => {
      console.log({ data });
      this.getAllUsers();
      this.cleanForm();
    });
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((data: any) => {
      this.userService.allUsers = data.result || [];
      console.log(data);
    });
  }

  deleteUser(_id: string) {
    this.userService.deleteUser(_id).subscribe((data) => {
      alert('Usuario Eliminado');
      this.getAllUsers();
    });
  }

  updateUser(user: User) {
    this.userService.userToCreate = user;
  }
}

