# Project Title


## Overview


### Problem



### Features

- As a user, I want to be able to create an account to manage my visited places
- As a user, I want to be able to login to my account to manage my visited places

- As a logged in user, I want to be able to add to todo list
- As a logged in user, I want to be able to see my visited attractions
- As a logged in user, I want to be able to select place to get all attractions for that selected place


## Implementation

### Tech Stack

- React ![alt text](README-images/reactlogo.png)
- SASS ![alt text](README-images/sass_logo.png)
- MySQL ![alt text](README-images/mysql_logo.png)
- Express ![alt text](README-images/express_logo.png)
- Client libraries: 
    - react
    - react-router
    - axios
- Server libraries:
    - knex
    - express
    - bcrypt for password hashing

### APIs

- No external APIs will be used for the sprint

### Sitemap

- Home 
- Register
- Login
- Attractions
- To do List

### Mockups

#### Home Page
![](home.png)

#### Register Page
![](register.png)

#### Login Page
![](login.png)

#### Attractions Page


#### To do list Page





### Auth

- JWT auth
    - Before adding auth, all API requests will be using a fake user with id 1
    - Added after core features have first been implemented
    - Store JWT in localStorage, remove when a user logs out
    - Add states for logged in showing different UI in places listed in mockups

## Roadmap

- Create client
    - react project with routes and boilerplate pages

- Create server
    - express project with routing

- Create migrations

- Gather 15 sample cities/ countries

- Create seeds with sample attractions data

- Bug fixes

- DEMO DAY

## Nice-to-haves

