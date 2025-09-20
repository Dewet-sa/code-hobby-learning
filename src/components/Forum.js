import React, { useState } from "react";

function Forum({ user }) {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");

  const addPost = () => {
    if (message) {
      setPosts([...posts, { user: user.username, message }]);
      setMessage("");
    }
  };

  return (
    <div>
      <h2>Discussion Forum</h2>
      <input
        type="text"
        placeholder="Write a message..."
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button onClick={addPost}>Post</button>
      <ul>
        {posts.map((p, i) => (
          <li key={i}>
            <b>{p.user}:</b> {p.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Forum;