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
  user: any;

  showComments: { [postId: number]: boolean } = {};
  comments: { [postId: number]: any[] } = {};
  newComment: { [postId: number]: string } = {};

  constructor(private service: UserServiceService) {}

  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem('user') || '{}');

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

  toggleComments(post: any) {

    const id = post.Id;
    this.showComments[id] = !this.showComments[id];

    if (this.showComments[id] && !this.comments[id]) {
      this.loadComments(id);
    }

  }

  loadComments(postId: number) {

    this.service.getComments(postId).subscribe({

      next: (res: any) => {
        this.comments[postId] = res;
      },

      error: (err) => {
        console.log(err);
      }

    });

  }

  submitComment(post: any) {

    const text = this.newComment[post.Id]?.trim();

    if (!text) return;

    const comment = {
      postId: post.Id,
      userId: this.user.Id,
      username: this.user.username,
      content: text
    };

    this.service.addComment(comment).subscribe({

      next: (res: any) => {

        if (!this.comments[post.Id]) {
          this.comments[post.Id] = [];
        }

        this.comments[post.Id].push(res);
        this.newComment[post.Id] = '';

      },

      error: (err) => {
        console.log(err);
      }

    });

  }

}