# 02.04.EJS
***

## What this topic covers
- What is EJS
- Partials
- Javascript Injections
- Conditional Rendering
- Looping over elements

## EJS

EJS (Embedded JavaScript) is one of the most popular template engines for Javascript. As the name suggests, it lets us embed JavaScript code in a template language that is then used to generate HTML.

Until we get to creating React applications on the front-end and attaching it to the rest of our back-end, this is what we will use to serve front-end files to a user.

## Getting Started

Let's get started by installing the necessary modules for today's project. You are given some starter files with a _**package.json**_, so use the following command:

0. Install the necessary modules
<!-- 0. Install the necessary modules -->
```
npm install 
```

- Use command `node index.js` in terminal to test the server
- The terminal should show "Server is listening on port 3000....
- Shut the server off using `ctrl + c`

Now let's head to **./routes/indexRouter** and begin writing on that file.

Currently this should be the only thing on that file:

```js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("homepage");
});

module.exports = router;
```

- Use command `node index.js` in terminal to test the server
- Use the browser to navigate to `localhost:3000/`. The browser should show the text "homepage"
- Shut the server off using `ctrl + c`

Now that we have the response working, let's begin writing in our **./views/home.ejs** file and test our ability to see it in the browser.

1. Create a basic webpage
<!-- 1. Create a basic webpage -->
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Our first EJS!</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
      
        <link rel="stylesheet" href="/stylesheets/style.css">
       
      </head>
      <body>
        <img src="/noble.jpg"/>
        <h1>Noble Desktop</h1>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/teachers">Teachers</a></li>
            <li><a href="/students">Students</a></li>
        </ul>
        <h3>
            Best tech education class in the world. Sign up now to further your education!
        </h3>
      </body>
</html>
```

Head back into **./routes/indexRouter.js** and render the "home" file:

2. Render the Home file
<!-- 2. Render the Home file -->
```js
router.get("/", (req, res) => {
    // res.send("homepage");

    // 2. Render the Home file
    res.render("home");
});
```

- Use command `node index.js` in terminal to test the server
- Use the browser to navigate to `localhost:3000/`. The browser should show the beginnings of a web page!
- Shut the server off using `ctrl + c`

Now that we have our home page rendering, let's start separating parts of our HTML to make it easier to work with!

## Partials

Partials are views that are designed to be used from within other views. They are useful for reusing the same views, layouts, and even other partials. For example, we can move the Nav bar out of our **./views/home.ejs** file, and create a new file in the partials folder to re-use it on multiple web pages.

3. Move the Nav bar into a Partial

3. A) Create a file called **navbar.ejs** inside of the **./views/partials** folder
3. B) Cut out the following section from **./views/home.ejs**:

```html
<ul>
    <li><a href="/">Home</a></li>
    <li><a href="/teachers">Teachers</a></li>
    <li><a href="/students">Students</a></li>
</ul>
```
3. C) Paste it directly into the **./views/partials/navbar.ejs** file

Now we need to import it back. The syntax for partials looks like this:
```js
<%- include("FILE PATH HERE") %>
```

With this knowledge, let's go back to our **./views/home.ejs** and import it where it was before:

3. D) Where the nav bar was removed, import the partial
<!-- 3. D) Where the nav bar was removed, import the partial -->
```js
<%- include("./partials/navbar") %>
```

- Use command `node index.js` in terminal to test the server
- Use the browser to navigate to `localhost:3000/`. The browser should show the same webpage
- Shut the server off using `ctrl + c`

We can take this further and move the `<head></head>` tag in another file as well.

4. Move the head tag into a Partial

4. A) Create a file called **head.ejs** inside of the **./views/partials** folder
4. B) Cut out the following section from **./views/home.ejs**:

```html
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Our first EJS!</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/stylesheets/style.css">
</head>
```
4. C) Paste it directly into the **./views/partials/navbar.ejs** file

4. D) Where the head tag was removed, import the partial
<!-- 4. D) Where the head tag was removed, import the partial -->
```js
<%- include("./partials/head") %>
```

## Javascript Injections

EJS allows you to render the page with data that comes from the server, and inject it directly into the HTML. Head back into **./routes/indexRouter** and render the homepage with data:

5. A) Render the Home file with data
<!-- 5. A) Render the Home file with data -->
```js
router.get("/", (req, res) => {
    // res.send("homepage");

    // 2. Render the Home file
    // res.render("home");

    // 5. A) Render the Home file with data
    res.render("home", { name: "Brian Carela" });
});
```

Head back to **./views/home.ejs** and inject this value onto our home page:

5. B) Inject the data onto the home page
```html
<h2>
    Welcome <%=name%>!
</h2>

<h3>
    Best tech education class in the world. Sign up now to further your education!
</h3>
```

- Use command `node index.js` in terminal to test the server
- Use the browser to navigate to `localhost:3000/`. The browser should show the injected value from the server
- Shut the server off using `ctrl + c`

Now that we understand basic data injections, let's cover what happens when you try an `if(){}` statement with EJS:

## Conditional Rendering

Conditional rendering is when you only render elements onto a page if the injected data meets a certain condition.

- IF certain data exists on the page, the elements will render
- ELSE, the elements will remain hidden

Let's take a look at a small example:
```html
<% if (3 > 4) { %>
    <h2>
        Welcome <%=name%>!
    </h2>
<% } %>
```

The element will no longer render under these conditions. You can even inspect the page in your web browser, the elements don't even reach the DOM. If you change the condition to evaluate to true, the element will render!