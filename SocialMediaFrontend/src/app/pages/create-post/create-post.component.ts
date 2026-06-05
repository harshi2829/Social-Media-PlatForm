import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {

  title = '';
  description = '';
  image = '';

  loading = false;

  cloudName = "dlui1409m";
  uploadPreset = "SocilaMedia";

  constructor(
    private service: UserServiceService,
    private router: Router
  ) {}

  uploadImage(event: any) {

    const file = event.target.files[0];

    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", this.uploadPreset);

    this.loading = true;

    fetch(`https://api.cloudinary.com/v1_1/${this.cloudName}/image/upload`, {
      method: "POST",
      body: formData
    })
    .then((response) => response.json())
    .then((data) => {

      this.image = data.secure_url;

      this.loading = false;

    });

  }

 createPost() {

  const user = JSON.parse(localStorage.getItem("user") || '{}');

  const newPost = {
    title: this.title,
    description: this.description,
    image: this.image,
    userId: user.Id
  };

  this.service.addPostToBackend(newPost).subscribe({

    next: (res: any) => {
      console.log("POST SAVED");
      this.router.navigate(['/layout/home']);
    },

    error: (err) => {
      console.log("ERROR", err);
    }

  });

}
}