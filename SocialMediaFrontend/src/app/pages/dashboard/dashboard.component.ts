import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  posts: any[] = [];
  editingId: number | null = null;

  constructor(private service: UserServiceService) {}

  ngOnInit(): void {

    this.service.getAllPosts().subscribe({

      next: (res: any) => {
        this.posts = res;
      },

      error: (err) => {
        console.log('ERROR LOADING POSTS', err);
      }

    });

  }

  likePost(post: any) {

    this.service.likePost(post.Id).subscribe({

      next: () => {
        post.like = (post.like || 0) + 1;
      },

      error: (err) => {
        console.log(err);
      }

    });

  }

  
}