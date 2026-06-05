import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { profileData } from '../../models/userProfile.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

  profile: profileData = new profileData();

  user: any;

  isEditMode = false;

  posts: any[] = [];

  editingId: number | null = null;

  constructor(private service: UserServiceService) {}

  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem('user') || '{}');

    const savedProfile = localStorage.getItem('profile');

    if (savedProfile) {
      this.profile = JSON.parse(savedProfile);
    } else {
      this.loadProfile();
    }

    this.loadPosts();
  }

  loadProfile() {

    this.service.getProfile(this.user.Id).subscribe({

      next: (res: any) => {

        this.profile = res;

        localStorage.setItem(
          'profile',
          JSON.stringify(res)
        );

      },

      error: (err) => {

        console.log(err);

      }

    });

  }

  saveProfile() {

    this.profile.userId = this.user.Id;

    this.service.addProfile(this.profile).subscribe({

      next: (res: any) => {

        this.profile = res;

        localStorage.setItem(
          'profile',
          JSON.stringify(res)
        );

        this.isEditMode = false;

        alert('Profile Updated');

      },

      error: (err) => {

        console.log(err);

      }

    });

  }

  editProfile() {

    this.isEditMode = true;

  }

  loadPosts() {

    this.service.getPostsFromBackend(this.user.Id).subscribe({

      next: (res: any) => {

        this.posts = res;

      },

      error: (err) => {

        console.log(err);

      }

    });

  }

  startEdit(post: any) {

    this.editingId = post.Id;

  }

  savePost(post: any) {

    this.service.editPost(post.Id, post).subscribe({

      next: () => {

        this.editingId = null;

        alert('Post Updated');

      },

      error: (err) => {

        console.log(err);

      }

    });

  }

  cancelEdit() {

    this.editingId = null;

  }
  deletePost(postId: number) {

  if (!confirm('Are you sure you want to delete this post?')) {
    return;
  }

  this.service.deletePost(postId).subscribe({

    next: () => {

      this.posts = this.posts.filter(
        post => post.Id !== postId
      );

      alert('Post Deleted');

    },

    error: (err) => {

      console.log(err);

    }

  });

}

}