import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { userLog } from '../../models/userLog.model';
import { UserServiceService } from '../../services/user-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  myLogObj:userLog=new userLog();
  
  constructor(private service:UserServiceService,private router:Router){}
  
onLog()
{
  this.service.onLog(this.myLogObj).subscribe((data:any)=>{

    console.log(data);
    if(data == null){
      alert("Invalid Email or Password");
      return;
    }
    localStorage.setItem('user', JSON.stringify(data));
    this.router.navigateByUrl('layout/home');

  },
  error=>{
    alert("error occured");
  })
}
}
