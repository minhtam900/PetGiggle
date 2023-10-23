import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  login = false;
  register = false;

  openpopup(){
    this.login = true;
  }

  closepopup(){
    this.login = false;
  }
}
