import './App.css';
import {useEffect, useRef, useState} from "react";
import axios from "axios";

function App() {
  const [hotPosts, setHotPosts] = useState([]);

  useEffect(()=> {
      subscribe();
  }, [])

  const subscribe = async () => {
     /* const response = await axios.get('http://localhost:5000/api/posts');
      console.log(response)*/
      const post =  new EventSource('http://localhost:5000/api/hot-posts');
      post.onmessage = (event) => {
          const data = JSON.parse(event.data);
          console.log(data)
      }
      post.onopen = (e) => {
          console.log(e)
      }
      post.onerror = (e) => {
          console.log(e)
      }
  }

  return (
    <div>
    </div>
  );
}

export default App;
