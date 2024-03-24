import React from 'react';

import ProfilePicColor from '.././images/profile-pic-color.png';

const Home = () => {
    return (
        <main>
            <article className="center-article">
                <h1>Welcome to my page</h1>
                <img className="center-profile-pic" id="darkmode-switch" src={ProfilePicColor} alt="Profile picture" />
                <h2>Maria Vestlund - a junior fullstack .NET-developer and experienced pharmacist</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, magnam reprehenderit! Neque, amet fuga! Est
                    cupiditate necessitatibus itaque omnis ad laboriosam, tempora illum excepturi rem quaerat minima hic
                    sit? Officia.</p>
            </article>
        </main>
    );
}

export default Home;