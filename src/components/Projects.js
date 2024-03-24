import React, { useState, useEffect } from 'react'
import { PacmanLoader } from 'react-spinners';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Projects() {
    const url = 'https://api.github.com/users/mlvestlund/repos';
    const [isLoading, setIsLoading] = useState(true);
    const [repos, setRepos] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .catch(error => console.log(error))
    }, [])

    // initialt visas detta (spinner) men när datan hämtas så kommer denna vara false.
    if (isLoading) {
        return <div><PacmanLoader color="#666dcb" /></div>
    }

    return (
        <div className="myProjects">
            {repos.map(repo => (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://img.freepik.com/free-vector/cute-rabbit-with-duck-working-laptop-cartoon-illustration_56104-471.jpg" alt="cute animated bunny coding" />
                    <Card.Body>
                        <Card.Title>
                            <h3>Projectets namn:</h3>
                            <p>{repo.name}</p>
                        </Card.Title>
                        <h3>Använt språk:</h3>
                        <Card.Text>
                            <p>{repo.language}</p>
                        </Card.Text>
                        {/* här la jag en "a-tagg" inuti en knapp men går att göra på olika sätt.
                            Viktigt är att ersätta värdet i href med resultatet av repo.html_url så att den kopplas rätt.
                            Läs gärna mer om vad target och rel gör då det kan vara intressant :) */}
                        <Button variant="warning"><a className="button" href={repo.html_url} target="_blank" rel="noreferrer">Till Repon</a></Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}