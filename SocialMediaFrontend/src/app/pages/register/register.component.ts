import { Component } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { userReg } from '../../models/userReg.model';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(
    private service: UserServiceService,
    private router: Router
  ) {}

  myRegObj: userReg = new userReg();

  onReg() {
    // ✅ Validation: check empty fields
    if (
      !this.myRegObj.username ||
      !this.myRegObj.email ||
      !this.myRegObj.password
    ) {
      alert("Please fill all required fields");
      return;
    }

    this.service.onReg(this.myRegObj).subscribe((data: any) => {
      if (data === "Register Successfully") {
        alert("User Registration Successfully");
        this.router.navigateByUrl('/login');
      } else {
        alert("User Registration Failed");
      }
    });
  }
}