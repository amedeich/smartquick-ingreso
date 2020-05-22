import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  user: any;

  constructor(public router: Router, public dataService: DataService) { 
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('____SQ'));
  }

  getRole = (role) => {
    return role === 'admin' ? 'Administrador' : 'Coordinador';
  }

  logout = () => {
    localStorage.removeItem('____SQ');
    this.router.navigateByUrl('login');
  }

}
