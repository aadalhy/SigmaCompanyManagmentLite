import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  login(): void { 
    this.authService.login(this.email, this.password).subscribe( data => {
      Toast.fire({
        icon: 'success',
        title: `Signed in successfully, welcome ${data.cont.encontroUsuario.strNombre}!`
      })
      localStorage.setItem('token', data.cont.token);
      this.router.navigate(['/sigma']);
    }, error => {
      Toast.fire({
        icon: 'error',
        title: `${error.error.msg}`
      })
    })
  }
}
