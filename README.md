# Phase 5 Project (Capstone)

This is the repository for my Phase 5 Single Web Page Doctor Application 
![ScreenShot small] (https://waftengine.org/public/blog/1B5EE4D5D773F8A-RR.jpg) 

## Requirements

* Ruby 2.7.4

* Postgresql Version 12

* React & React-Dom v18.2

* React Redux v8.05

* Redux toolkit v1.9.3

## Demonstration


### Installation
    Fork and clone this repository, and then run
```
bundle install
rails db:create
npm install --prefix client
```
This Will Install the Gemfiles

### Starting the Application
Using two seperate terminals:

- In the first terminal, start up the Postgresql database with
```
sudo service postgresql start
```

- In the second terminal, in your project's root directory, use the command
```
npm start
```

You can use the following commands to run the application: 
- `rails s`: Run the backend on [port 3000](http://localhost:3000)
- `npm start --prefix client`: Run the frontend on [port 4000](http://localhost:4000)
- `npm start`: An alternative to `npm start --prefix client`, but must be used while in the `client` folder of the project's directory

### Future Plans 
    - Make The App Expandable with 
    - Implement A Secondary User to keep Track of Prescription Refills
    
Include future ideas to better the App