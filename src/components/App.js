import '../styles/style.scss';
import PostList from './PostList';
import useFetch from './useFetch';
import {useEffect, useState } from 'react';
import Severus from './Severus';

function App() {

  const { data: posts, isLoading } = useFetch('https://blog.kasialaniecka.com/wp-json/wp/v2/posts');
  const [isOpen, setIsOpen] = useState(false);

  // secret video
  useEffect(() => {
    const pressed = [];
    const secretCode = 'snapesnapeseverussnape';
    window.addEventListener('keyup', (e) => {
      pressed.push(e.key);
      pressed.slice(-secretCode.length - 1, pressed.length - secretCode.length);
      if(pressed.join('').includes(secretCode)) {
        setIsOpen(true);
      }
    })
  },[])

  const hideSeverus = () => {
    setIsOpen(false);
  }

  return (
    <div className="App">
      {isOpen ? <Severus hideSeverus={hideSeverus}/> : null}
      {isLoading && <p className="loading">Posts are coming!</p>}
      {posts && <PostList posts={posts} />}
    </div>
  );
}

export default App;
