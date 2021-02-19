# Todo In Three

The goal of this project is to get familiar with the basics and subtle differences between all three major Front-end Development frameworks: Angular, React and Vue, by creating a simple todo list application in each framework. I tried to keep the architecture consistent among the frameworks so you can easily transition.

Follow the steps below to set-up the projects, you can then run their respective json-server and development server from within their direcotry. You can even run all three apps at the same time!

Code is [here](https://github.com/nenadpejic/todo-in-three)

![thumbnail](https://user-images.githubusercontent.com/50808282/108475216-b3a93500-7290-11eb-8658-9371fe173caf.png)


## Table of Contents

- [Angular Todo](#angular-todo)
- [React Todo](#react-todo)
- [Vue Todo](#vue-todo)

## Features

- Add a todo
- Mark a todo as completed
- Delete a todo
- Switch between Home and About page

## Angular Todo

## Technologies

- json-server

Dependencies:

- "@angular/router": "~11.2.0",

DevDependencies:

- "@types/uuid": "^8.3.0",
- "uuid": "^8.3.2"

## Installation

Install dependencies:
```
$ npm install
```

Make sure you have json-server installed globaly
```
$ npm install -g json-server
```

Run the json server via custom script
```
$ npm run json:server
```

Run the development server
```
$ ng serve --open
```

## React Todo

## Technologies

- json-server

Dependencies:

- "react-router-dom": "^5.2.0"

DevDependencies

- "node-sass": "^5.0.0",
- "uuid": "^8.3.2"

### Installation

Install dependencies:
```
$ npm install
```

Make sure you have json-server installed globaly
```
$ npm install -g json-server
```

Run the json server via custom script
```
$ npm run json:server
```

Run the development server
```
$ npm start
```

## Vue Todo

## Technologies

- json-server

Dependencies:

- "vue-router": "^3.2.0"

DevDependencies

- "node-sass": "^5.0.0",
- "sass-loader": "^10.1.1",
- "uuid": "^8.3.2",

### Installation

Install dependencies:
```
$ npm install
```

Make sure you have json-server installed globaly
```
$ npm install -g json-server
```

Run the json server via custom script
```
$ npm run json:server
```

Run the development server
```
$ npm run serve
```
