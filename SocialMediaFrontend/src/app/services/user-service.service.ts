import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userReg } from '../models/userReg.model';
import { Observable } from 'rxjs';
import { userLog } from '../models/userLog.model';
import { profileData } from '../models/userProfile.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) {}

  posts: any[] = [];

   onReg(userReg: userReg){
    return this.http.post("http://localhost:8080/userRegister", userReg, {
      responseType: 'text'
    });
  }

   onLog(userLog: userLog) {
    return this.http.post("http://localhost:8080/userLogin", userLog);
  }

  addPost(post: any) {
    this.posts.unshift(post);
  }

  getPosts() {
    return this.posts;
  }

  addProfile(data: profileData) {
    return this.http.post("http://localhost:8080/addProfile", data);
  }

  getProfile(userId: number) {
    return this.http.get<profileData>(`http://localhost:8080/getProfile/${userId}`);
  }

  isLogIn(): boolean {
    const myKey = localStorage.getItem("user");
    return myKey != null;
  }
  addPostToBackend(post: any) {
  return this.http.post("http://localhost:8080/addPost", post);
}
getPostsFromBackend(userId: number) {
  return this.http.get(`http://localhost:8080/getPost/${userId}`);
}
getAllPosts()
{
  return this.http.get<any[]>("http://localhost:8080/allPosts");
}

likePost(id: number) {
  return this.http.put(
    `http://localhost:8080/likePost/${id}`,
    {}
  );
}

editPost(id: number, post: any) {
  return this.http.put(
    `http://localhost:8080/editPost/${id}`,
    post
  );
}

deletePost(id: number) {
  return this.http.delete(
    `http://localhost:8080/deletePost/${id}`,
    {
      responseType: 'text'
    }
  );
}

}