import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'layout',component:LayoutComponent,canActivate:[authGuard],
        children:[
            {path:'home',component:DashboardComponent},
            {path:'messages',component:MessagesComponent},
            {path:'profile',component:ProfileComponent},
            {path:'post',component:CreatePostComponent},
        ]
    }
];
