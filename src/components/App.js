import '../styles/style.scss';
import PostList from './PostList';
import useFetch from './useFetch';

function App() {

  const { data: posts, isLoading } = useFetch('http://blog.kasialaniecka.com/wp-json/wp/v2/posts');

  return (
    <div className="App">
      {isLoading && <p className="loading">Posts are coming!</p>}
      {posts && <PostList posts={posts} />}
    </div>
  );
}

export default App;
