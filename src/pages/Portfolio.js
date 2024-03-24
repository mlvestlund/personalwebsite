import React from 'react';
import Projects from '.././components/Projects';

const Portfolio = () => {
    return (
        <>
            <main>
                <Projects />
            </main>
        </>
    )
}

export default Portfolio;


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
    <title>Portfolio | Maria Vestlund</title>
</head>

<body>
    <header>
        <nav>
            <a href="./index.html" class="logo">M.V. | .NET-developer</a>
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
            <ul class="menu">
                <li><a href="./index.html">Home</a></li>
                <li><a href="./about.html">About</a></li>
                <li><a href="./portfolio.html" class="active">Portfolio</a></li>
                <li><a href="./curriculum-vitae.html">Curriculum vitae</a></li>
                <li><a href="./contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h1>Portfolio of projects</h1>
        <section class="portfolio-section">
            <article>
                <h2>Solo projects</h2>
                <p>These are some of my main solo projects during my studies at Chas Academy. In addition to all the projects shown below is this webpage which is my first project in the course Frontend development and UX!</p>
                <ul class="portfolio-container">
                    <li>
                        <h3>Project: Guess the number</h3>
                        <figure>
                            <a href="https://github.com/mlvestlund/GuessTheNumber">
                                <img src="./Gifs/guess-the-number.gif"
                                    alt="Gif showing how the console program 'Guess The Number' works"
                                    class="img-float">
                            </a>
                            <figcaption>
                                <p>A number guessing game created in C#</p>
                                <label><input type="checkbox">
                                    <div id="info-btn">More info</div>
                                    <div id="info-cnt">
                                        <p>Course: Programming with C# and .NET</br></br>Description: In this number guessing game you first get to guess a number between 1 and 20, with only 5 tries. After this you get to choose what range of numbers and how many tries you'd like to have. You also get random clues depending on how close or far away from the right number you guessed.</p>
                                    </div>
                                    <div class="close">&times;</div>
                                </label>
                            </figcaption>
                        </figure>

                    </li>
                    <li>
                        <h3>Project: Basics in OOP</h3>
                        <figure>
                            <a href="https://github.com/mlvestlund/Grunderna-OOP">
                                <img src="./Gifs/basics-oop.gif"
                                    alt="Gif showing the code and how the console program 'Basics in OOP' works"
                                    class="img-float">
                            </a>
                            <figcaption>
                                <p>An exercise in the basics of object-oriented programming (OOP)</p>
                                <label><input type="checkbox">
                                    <div id="info-btn">More info</div>
                                    <div id="info-cnt">Course: Programming with C# and .NET</br></br>Description: In this exercise we got to practice how to organise our code in different classes by using a separate circle-class which has a constructors that takes in radius and has a GetArea()-metod which uses that radius to calculate the area. From the main menu I then create different objects of the class with different radius and calls for the method to calculate the areas</div>
                                    <div class="close">&times;</div>
                                </label>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <h3>Project: Inheritance in OOP</h3>
                        <figure>
                            <a href="https://github.com/mlvestlund/OOP-Arv">
                                <img src="./Gifs/inheritance-oop.gif"
                                    alt="Gif showing the code and how the console program 'inheritance OOP' works"
                                    class="img-float">
                            </a>
                            <figcaption>
                                <p>An exercise in stucturing code with inheritence in object-oriented programming (OOP)</p>
                                <label><input type="checkbox">
                                    <div id="info-btn">More info</div>
                                    <div id="info-cnt">Course: Programming with C# and .NET</br></br>Description: In this exercise we practiced how to organise our code into different classes and with inheritance from the base class "Animal" to the different child classes which are different types of animals, and where one of the animals has two more children of its own. They all inherit som characteristics and methods from their base class, and has some that are unique for them.</div></div>
                                    <div class="close">&times;</div>
                                </label>
                            </figcaption>
                        </figure>
                        </figure>
                    </li>
                    <li>
                        <h3>Project: OOP Polymorphism</h3>
                        <figure>
                            <a href="https://github.com/mlvestlund/OOP-Polymorphism">
                                <img src="./Gifs/oop-polymorphism.gif"
                                    alt="Gif showing the code and how the console program 'OOP Polymorphism' works"
                                    class="img-float">
                            </a>
                            <figcaption>
                                <p>An exercise in polymorphism in object-oriented programmin (OOP)</p>
                                <label><input type="checkbox">
                                    <div id="info-btn">More info</div>
                                    <div id="info-cnt">Course: Programming with C# and .NET</br></br>Description: This was made as an exercise in polymorphism in object-oriented programming in C# by creating a parent class called Geometry{ } which has a method called Area() that returns a double value. This class then has different child classes that are different geometrical shapes that has methods that overrides its parent class with its own function for calculating that specific shapes area.</div></div>
                                    <div class="close">&times;</div>
                                </label>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <h3>Project: OOP Generic Collections</h3>
                        <figure>
                            <a href="https://github.com/mlvestlund/OOPGenericCollections">
                                <img src="./Gifs/oop-generic-collections.gif"
                                    alt="Gif showing the code and how the console program 'OOP Generic Collections' works"
                                    class="img-float">
                            </a>
                            <figcaption>
                                <p>An exercise in using stacks and lists in C#</p>
                                <label><input type="checkbox">
                                    <div id="info-btn">More info</div>
                                    <div id="info-cnt">Course: Programming with C# and .NET</br></br>Description: This exercise was divided into two parts within the same program, using the same class Employee{ } and its characteristics. The first part a stack is made using Push() and then experimenting with the methods Pop() and Peek(). In the second part a list is made instead where I practice using Contains(), Find() and FindAll().</div></div>
                                    <div class="close">&times;</div>
                                </label>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <h3>Project: Calling the DB, SQL and ORM</h3>
                        <figure>
                            <a href="https://github.com/mlvestlund/Calling_the_db_SQL_and_ORM">
                                <img src="./Gifs/calling-the-db-sql-and-orm.gif"
                                    alt="Gif showing the code and how the console program 'Calling the DB, SQL and ORM' works"
                                    class="img-float">
                            </a>
                            <figcaption>
                                <p>A practice in using both Entity Framework and SQL</p>
                                <label><input type="checkbox">
                                    <div id="info-btn">More info</div>
                                    <div id="info-cnt">Course: Programming with C# and .NET</br></br>Description: This exercise is both made as a console app in Visual Studio (VS) using C# and Entity Framework (EF), and by writing SQL code in SQL Server Management Studio (SSMS), to retrieve and add data to the Northwind database. First part the user can navigate in the console to collect and add information in the database, using methods created with C#. The other part is stored as an SQL-file with examples of different querys to retrieve different types of information from that same database.</div></div>
                                    <div class="close">&times;</div>
                                </label>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <h3>Project: SQL School</h3>
                        <figure>
                            <a href="https://github.com/mlvestlund/SQL-School">
                                <img src="./Gifs/sql-school.gif"
                                    alt="Gif showing the code and how the console program 'SQL School' works"
                                    class="img-float">
                            </a>
                            <figcaption>
                                <p>An exercise in creating an SQL database first and a console program without using object-relational mapping (ORM)</p>
                                <label><input type="checkbox">
                                    <div id="info-btn">More info</div>
                                    <div id="info-cnt">Course: Backend development and databases</br></br>Description: </div></div>
                                    <div class="close">&times;</div>
                                </label>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <h3>Project: Threading</h3>
                        <figure>
                            <a href="https://github.com/mlvestlund/Threading">
                                <img src="./Gifs/threading.gif"
                                    alt="Gif showing the code and how the console program 'Threading' works"
                                    class="img-float">
                            </a>
                            <figcaption>
                                <p>An exercise in threading where cars in different threads compete</p>
                                <label><input type="checkbox">
                                    <div id="info-btn">More info</div>
                                    <div id="info-cnt">Course: Backend development and databases</br></br>Description: A game where two different car-objects are made and put into different threads which both start a method that plays out as a race between the cars in text form, where incidents for the cars are printed out and if the viewer would like to see how it is going for the cars it can press Enter</div></div>
                                    <div class="close">&times;</div>
                                </label>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <h3>Project: Minimal API</h3>
                        <figure>
                            <a href="https://github.com/mlvestlund/MinimalAPI">
                                <img src="./Gifs/minimal-api.gif"
                                    alt="Gif showing the code and how the console program 'Minimal API' works"
                                    class="img-float">
                            </a>
                            <figcaption>
                                <p>Minimal webb-API in REST architecture</p>
                                <label><input type="checkbox">
                                    <div id="info-btn">More info</div>
                                    <div id="info-cnt">Course: Backend development and databases</br></br>Description: First I made an ER diagram for the database, then I created the database using SQL code accordingly. The program I connected the console app to the database using Entity Framework, and wrote the webb-APIs in REST architecture, with both GET- and SET-methods. After this I tested my APIs using Insomnia and wrote documentation on how to use each API with examples of possible requests. Finally I wrote an UML diagram.</div></div>
                                    <div class="close">&times;</div>
                                </label>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </article>
            <article>
                <h2>Group projects</h2>
                <p>These are the group projects I have been part of during my time at Chas Academy.</p>
                <ul class="portfolio-container">
                    <li>
                        <h3>Project: Mandelsbanken</h3>
                        <figure>
                            <a href="https://github.com/andersonandreas/MandelsBanken">
                                <img src="./Gifs/mandelsbanken.gif"
                                    alt="Gif showing the code and how the console program 'Mandelsbanken' works"
                                    class="img-float">
                            </a>
                            <figcaption>
                                <p>A console app with functions imitating a bank app, with an SQL database</p>
                                <label><input type="checkbox">
                                    <div id="info-btn">More info</div>
                                    <div id="info-cnt">Course: Programming with C# and .NET</br></br>Description: </div></div>
                                    <div class="close">&times;</div>
                                </label>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <h3>Project: Music API</h3>
                        <figure>
                            <a href="https://github.com/ChasAlex/MusikApi">
                                <img src="./Gifs/music-api.gif"
                                    alt="Gif showing the code and how the console program 'Music API' works"
                                    class="img-float">
                            </a>
                            <figcaption>
                                <p>Lorem ipsum ipsum pipsum</p>
                                <label><input type="checkbox">
                                    <div id="info-btn">More info</div>
                                    <div id="info-cnt">Course: Backend development and databases</br></br>Description: </div></div>
                                    <div class="close">&times;</div>
                                </label>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </article>
        </section>
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