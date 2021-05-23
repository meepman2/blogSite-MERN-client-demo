import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import Posts from "../posts/Posts";
import userContext from "../../context/userContext";

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const { userData } = useContext(userContext);
  const { user, token } = userData;

  useEffect(() => {
    const getPost = async () => {
      const getRes = await Axios.post("http://localhost:5000/", { token: token });
      setPosts(getRes.data);
    };
    getPost();
  }, [token]);

  return (
    <div>
      {posts.map(post => (
        <Posts key={post._id} content={post.content} title={post.title} id={post._id} />
      ))}
    </div>
  );
}

export default Dashboard;
