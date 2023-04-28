import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { useState } from 'react';

export default function TweetPost(){
    const [input, setInput] = useState("")
    function handleChange(event){
        setInput(event.target.value)
    }

    async function handleSubmit(event){
        event.preventDefault()
        const response = await fetch("http://localhost:8080/tweet", {
            method: "POST",
            body: JSON.stringify({tweet: input})
        })
        if(response.status === 200){
            setInput("")
        }else{
            alert("Something went wrong")
        }
    }
    
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Control 
                as="textarea"
                placeholder='Write a tweet...'
                value={input}
                onChange={handleChange}
            />
            <Button type="submit">Post</Button>
        </Form>

    );

}