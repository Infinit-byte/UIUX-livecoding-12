import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';

export default function Tweet(props){
    const [likes, setLikes] = useState(0)
    function handleClick(){
        setLikes(likes + 1)
    }

    return <Card>
        <Card.Header className='d-flex'>
            <img 
                src='https://api.dicebear.com/6.x/lorelei/png/' 
                alt='Profil billede'
                style={{width: "3rem", height: "3rem"}}
                className='rounded-circle'
                />
            <div>
                <p className='m-0'>{props.user.name}</p>
                <p className='text-muted m-0'>{props.user.screen_name}</p>
                <small className='m-0'>{props.createdAt}</small>
            </div>
        </Card.Header>
        <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>{props.tweet}</Card.Text>
            <Card.Img className="rounded" variant='bottom' src={props.img} ></Card.Img>
        </Card.Body>
        <Card.Footer>
            <Button variant='primary' onClick={handleClick}>Like {likes}</Button>
        </Card.Footer>
    </Card>;
}