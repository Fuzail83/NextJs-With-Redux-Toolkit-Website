"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/styles/common.module.css";
import MovieCard from "../components/MovieCard";
// import { data } from "../common/constant";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { getData } from "../redux/postSlice";
import Tab from "../common/Tab";

const Movie = () => {
  // const [posts, setPosts] = useState([]);
  // const [product, setProduct] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // const getPosts = () => {
  //   const url = "https://jsonplaceholder.typicode.com/posts";
  //   axios
  //     .get(url)
  //     .then((response) => {
  //       console.log(response);
  //       setPosts(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   getPosts();
  // }, []);

  // const searchDb = () => {
  //   // Perform the search logic here
  //   const filteredPosts = posts.filter((post) =>
  //     post.title.includes(searchQuery)
  //   );
  //   // Update the state with the filtered results
  //   console.log("filteredPosts", filteredPosts);
  //   setPosts(filteredPosts);
  // };

  // const handleSearch = (event) => {
  //   setSearchQuery(event.target.value);
  //   if (event.target.value.length >= 3) {
  //     searchDb();
  //   } else {
  //     // Reset the posts to original data
  //     getPosts();
  //   }
  // };
  const posts = useSelector((state) => state.movies.posts);

  const filteredPosts =
    posts.length > 0
      ? posts?.filter((post) => post?.title?.includes(searchQuery))
      : [];
  //console.log("posts", filteredPosts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // const getProducts = () => {
  //   const url = "https://dummyjson.com/products";
  //   axios
  //     .get(url)
  //     .then((response) => {
  //       console.log("products", response.data.products);
  //       setProduct(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <>
      {/* {product?.map((dataObj, index) => (
        <MovieCard data={dataObj} key={index} />
      ))} */}

      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <div className={styles.card_section}>
            {/* <Tab /> */}
            {filteredPosts?.map((dataObj, index) => (
              <MovieCard data={dataObj} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
