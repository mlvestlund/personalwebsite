import React from 'react';

import ProfilePicColor from '.././images/profile-pic-color.png'; 

const Home = () => {
  return (
    <main>
        <article className="center-article">
            <h1>Welcome to my page</h1>
            <img className="center-profile-pic" id="darkmode-switch" src={ProfilePicColor}
                alt="Profile picture" />
            <h2>Maria Vestlund - a junior fullstack .NET-developer and experienced pharmacist</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, magnam reprehenderit! Neque, amet fuga! Est
                cupiditate necessitatibus itaque omnis ad laboriosam, tempora illum excepturi rem quaerat minima hic
                sit? Officia.</p>
        </article>
    </main>
  );
}

export default Home;

/*
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="Curriculum vitae (CV) and portfolio for [Name], a [work title]">
    <meta name="keywords" content="CV, curriculum vitae, portfolio">
    <meta name="author" content="Maria Vestlund">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Text:wght@100..900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
    <title>Maria Vestlund</title>
</head>

<body>
    <header class="header">
        <nav>
            <a href="./" class="logo">M.V. | .NET-developer</a>
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
            <ul class="menu">
                <li><a href="./index.html" class="active">Home</a></li>
                <li><a href="./about.html">About</a></li>
                <li><a href="./portfolio.html">Portfolio</a></li>
                <li><a href="./curriculum-vitae.html">Curriculum vitae</a></li>
                <li><a href="./contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <article class="center-article">
            <h1>Welcome to my page</h1>
            <img class="center-profile-pic" id="darkmode-switch" src="./Images/profile-pic-color.png"
                alt="Profile picture">
            <h2>Maria Vestlund - a junior fullstack .NET-developer and experienced pharmacist</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, magnam reprehenderit! Neque, amet fuga! Est
                cupiditate necessitatibus itaque omnis ad laboriosam, tempora illum excepturi rem quaerat minima hic
                sit? Officia.</p>
        </article>
    </main>
    <footer>
        <article class="center-article">
            <h2>Follow me</h2>
            <ul class="socials-list">
                <li><a href="https://www.linkedin.com/"><img src="./Images/LinkedIn-icon-white.png"
                            alt="LinkedIn"><!-- LinkedIn icon by Icons8 --></a></li>
                <li><a href="https://github.com/"><img src="./Images/GitHub-Icon-white.png"
                            alt="GitHub"><!-- GitHub icon by Icons8 --></a></li>
            </ul>
        </article>
        <article class="center-article">
            <p>&copy; 2024 Maria Vestlund. All rights reserved.</p>
        </article>
    </footer>
    <script src="script.js"></script>
</body>

</html>
*/