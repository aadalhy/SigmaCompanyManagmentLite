import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userName: string = '';

  constructor( private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('userName')) {
      this.userName = localStorage.getItem('userName')!;
    }
  }

  logout(): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "Your session will be closed!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.value) {
        localStorage.removeItem('token');
        this.router.navigate(['auth/login']);
      }
    });
  }
}
