import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Tweet from './components/Tweet';
import TweetPost from './components/TweetPost';
import { useEffect, useState } from 'react';
import Wowo from './components/Wowo'

function App() {
  const [tweets, setTweets] = useState([])  

  useEffect(() => {
    // Three ways to do the same thing:

    // 1. Async and Await
    /*(async () => {
      const response = await fetch("http://localhost:8080/tweets");
      const tweets = await response.json();
      setTweets(tweets);
    })();

    // 2. Promise chaining
    fetch("http://localhost:8080")
      .then(response => response.json()) // Returns a Promise with JSON in the lambda function
      .then(tweets => setTweets(tweets)); // The lamba function gets the Promise with JSON
*/
    // 3. A more explicit way
    const response = fetch("http://localhost:8080/tweets", {
      method: 'GET'
    })
    response.then((result) => {
      result.json().then((data) => {
        setTweets(data)
      })
    })
  }, [])

  return (
    <div className="App">
      <Wowo/>
      <TweetPost/>
      <div className='mx-auto col-11 col-sm-9 col-md-7 col-lg-6'>
        {tweets.map((tweet, i) => {
          return <Tweet key={tweet.id} user={tweet.user} createdAt={tweet.created_at} tweet={tweet.text} img={tweet.img}/>
        })}
      </div>


    </div>
  );
}

export default App;
