import { useState } from "react";
import Post from "./Post/Post";

function App() {
  const defaultPosts = [
    { id: 1, name: "name1", fav: false },
    { id: 2, name: "name2", fav: false },
    { id: 3, name: "name3", fav: false },
    { id: 4, name: "name4", fav: false },
    { id: 5, name: "name5", fav: false },
  ];

  const [posts, setPosts] = useState(defaultPosts);

  const deletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const favoritePost = (postId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          post.fav = !post.fav;
        }
        return post;
      })
    );
  };

  const updatePost = (postId, newName) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          post.name = newName;
        }
        return post;
      })
    );
  };

  return (
    <div className="App">
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          deletePost={deletePost}
          favoritePost={favoritePost}
          updatePost={updatePost}
        />
      ))}
    </div>
  );
}

export default App;
