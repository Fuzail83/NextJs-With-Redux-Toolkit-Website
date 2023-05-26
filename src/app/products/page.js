"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Page = () => {
  const initialState = {
    title: "",
    body: "",
  };
  const [data, setData] = useState(initialState);

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setData({ ...data, [fieldName]: fieldValue });
    console.log("fieldValue", fieldValue);
  };

  const getPosts = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    axios
      .get(url)
      .then((response) => {
        console.log("data", response);
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const postBody = {
      title: data.title,
      body: data.body,
    };

    axios
      .post(url, postBody)
      .then((response) => {
        console.log("Post added:", response.data);
        getPosts(); // Refresh the posts after adding a new one
        setData(initialState);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  console.log("data", data);

  return (
    <>
      <div>
        <h2>Add Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={data.title}
          name="title"
          onChange={handleChange}
        />
        <input
          placeholder="Body"
          value={data.body}
          name="body"
          onChange={handleChange}
        />
        <button onClick={addPost}>Submit</button>
      </div>
      <div>
        <h2>All Posts</h2>
        {data.length > 0 &&
          data?.map((item) => <h4 key={item.id}>{item.title}</h4>)}
      </div>
    </>
  );
};

export default Page;
