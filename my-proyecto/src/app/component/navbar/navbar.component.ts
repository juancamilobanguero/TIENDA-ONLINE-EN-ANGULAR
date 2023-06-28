import { Component } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  tokenExisten = false;
  constructor(private NavbarService: NavbarService){
    this.tokenExisten=NavbarService.traertoken();
  }

  eliminarToken(){
    this.NavbarService.removeToken();
    this.tokenExisten = this.NavbarService.traertoken();
  }
  
  showDropdown = false;
}
