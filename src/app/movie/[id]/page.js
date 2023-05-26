"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import { data } from "@/app/common/constant";
import { usePathname, useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { getData, getDataById } from "@/app/redux/postSlice";
const Page = (props) => {
  //   const userouter = useRouter();
  //   console.log("Userouter", userouter);
  //   const [posts, setPosts] = useState([]);
  const router = usePathname();
  //   console.log("router", router.split("/")[2]);

  const newRouter = router.split("/")[2];

  //console.log("newRouter", newRouter);

  //   const useParamsssss = useParams();
  //   console.log("useParams", useParamsssss.id);

  //   const getPostsById = () => {
  //     const url = `https://jsonplaceholder.typicode.com/posts/${newRouter}`;
  //     axios
  //       .get(url)
  //       .then((response) => {
  //         console.log("response", response);
  //         setPosts(response.data);
  //         // console.log("response.data", response.data);
  //       })
  //       .catch((error) => {
  //         //  console.log(error);
  //       });
  //   };

  //   console.log("posts", posts);

  //   useEffect(() => {
  //     getPostsById();
  //   }, []);

  const posts = useSelector((state) => state.movies.posts);
  console.log("dfsfsdf", posts);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect");
    dispatch(getDataById(newRouter));
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.movie_title}>
          {" "}
          Netflix \ <span> Show </span>{" "}
        </h2>
        <div className="backList">
          <Link href="http://localhost:3001/movie">Back To List</Link>
        </div>
        <div className={styles.card_section}>
          <div>
            <Image src="" alt="image" width={600} height={300} />
          </div>
          <div>
            <h1>{posts.title}</h1>
            <p>{posts.body}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
