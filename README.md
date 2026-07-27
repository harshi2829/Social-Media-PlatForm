# Social Media Application

## Overview
A full-stack Social Media Application built using Spring Boot and Angular. The application allows users to register, log in, create posts with images, like and comment on posts, and manage their profiles through a modern web interface.

## Tech Stack

### Backend
* Java
* Spring Boot
* Spring Data JPA
* Hibernate
* MySQL
* REST APIs
* Cloudinary (Image Upload)

### Frontend
* Angular
* TypeScript
* HTML
* SCSS
* Tailwind CSS

## Features
* User Registration & Login
* Profile Management (username, bio)
* Create Posts with Image Upload (Cloudinary)
* View All Posts on Home Feed
* Like Posts
* Comment on Posts
* View & Delete Your Own Posts
* Protected Routes using Angular Guards
* RESTful API Integration
* Responsive User Interface

## Project Structure

SocialMedia/
├── SocialMediaBackend/
└── SocialMediaFrontend/

## Getting Started

### Backend Setup
1. Configure MySQL database in `application.properties`
2. Add your Cloudinary credentials in `application.properties`
3. Run the Spring Boot application

### Frontend Setup
1. Navigate to the frontend folder
2. Install dependencies:
```bash
npm install
```
3. Start the Angular application:
```bash
ng serve
```
4. Open `http://localhost:4200`

## Future Enhancements
* JWT Authentication
* Real-time Messaging
* Follow / Unfollow Users
* Notifications

## Author
Harshini V
