import React, { useContext, useState } from "react";
import Axios from "axios";
import userContext from "../../context/userContext";

function Compose() {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });
  const [postArray, setPostArray] = useState([]);
  const { userData } = useContext(userContext);

  const handleChange = event => {
    const { value, name } = event.target;
    setPost(prevValues => {
      return { ...prevValues, [name]: value };
    });
  };

  const handlePost = async event => {
    setPostArray(prevValues => {
      return [...prevValues, post];
    });

    event.preventDefault();

    const postRes = await Axios.post("http://localhost:5000/compose", {
      title: post.title,
      content: post.content,
      token: userData.token,
    });
    setPost({ title: "", content: "" });
  };

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" value={post.title} placeholder="title"></input>
        <textarea onChange={handleChange} name="content" value={post.content} placeholder="content"></textarea>
        <button type="submit" onClick={handlePost}>
          Post
        </button>
      </form>
    </div>
  );
}

export default Compose;
