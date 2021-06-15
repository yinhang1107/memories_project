# Memories

> A simple social media app that allows users to post interesting events that happened in their lives.

> Live demo [_here_](https://memories-9669.netlify.app/).

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup](#setup)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## General Information

- This is a great project for learning: 
  - Backend and Frontend Folder Structure
  - Implementation of CRUD operations
  - Redux for centralising state 
  - Implementation of Google OAuth
  - JWT authentication and authorization
  - Pagination, Search and Recommendation features


## Technologies Used

- React
- Redux
- Bootstrap
- Node.js
- Express
- MongoDB

## Features

- Before signing in, client can search posts by title or tags or both. Client can also clicks on the post to navigate to post detail.
![Before signing in](https://ibb.co/sqk7xzN)

- On post detail, there are recommended posts on the bottom of the page. These posts are recommended by having similar tags with the main post.
![Post detail](https://ibb.co/fd98kmB)

- After signing in, user can create, delete, like or edit post by filling up the form.
![After signing in](https://ibb.co/WPmxSzKg)

## Setup

<!-- Steps are yet to be tested -->

1. Open 2 separate terminals
2. In terminal 1,
```
git clone YOUR URL HERE
cd YOUR PROJECT NAME/client
npm i
```
3. In terminal 2,
```
cd YOUR PROJECT NAME/server
npm i
```
4. Open the project via VS code and navigate to /client/src/api/index.js, replace the existing baseURL with your baseURL.
5. Then navigate to /client/src/components/Auth/Auth.js, enter your clientId. (Steps of getting the clientId - click [here](https://youtu.be/LKlO8vLvUao?t=3255)).
6. Finally, navigate to /server/index.js, enter your connection URL.
7. Now, on both terminal 1 and 2, run npm start.

## Acknowledgements
- This project was based on [JavaScript Mastery - Full Stack MERN Social Media App](https://www.youtube.com/playlist?list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu).

## Contact

Created by [@yinhang](https://www.yinhang.netlify.app/) - feel free to contact me!
