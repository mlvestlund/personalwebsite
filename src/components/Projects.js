import React, { useState, useEffect } from 'react'
import { PacmanLoader } from 'react-spinners';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
/*import 'bootstrap/dist/css/bootstrap.min.css';*/

export default function Projects() {
    const url = 'https://api.github.com/users/mlvestlund/repos';
    const [isLoading, setIsLoading] = useState(true);
    const [repos, setRepos] = useState([]);
    
    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then((data) => {
                setTimeout(() => {
                    setRepos(data);
                    setIsLoading(false)
                }, 3000)
            })
            .catch(error => console.log(error))
    }, [])

    if (isLoading) {
        return <div><PacmanLoader color="#666dcb" /></div>
    }

    return (
        <div className="myProjects">
            {repos.map(repo => (
                <Card key={repo.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://img.freepik.com/free-vector/cute-rabbit-with-duck-working-laptop-cartoon-illustration_56104-471.jpg" alt="cute animated bunny coding" />
                    <Card.Body>
                        <Card.Title>
                            <h3>Projectets namn:</h3>
                            <p>{repo.name}</p>
                        </Card.Title>
                        <Card.Title>
                            <h3>Använt språk:</h3>
                            <p>{repo.language}</p>
                        </Card.Title>
                        <Button variant="warning"><a className="button" href={repo.html_url} target="_blank" rel="noreferrer">Till Repon</a></Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}