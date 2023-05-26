"use client";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
import { deletePost } from "../redux/postSlice";
import { useDispatch } from "react-redux";
const MovieCard = (props) => {
  const { data, id } = props;
  const dispatch = useDispatch();
  // console.log("sdf", data, id);
  const customStyle = {
    backgroundImage: `url(${data.image})`,
  };
  // console.log("data", customStyle, data.image);

  const handleDelete = () => {
    dispatch(deletePost(data.id));
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image} style={customStyle}>
          {
            <Image
              quality="100"
              alt="movie"
              src="/stranger.jpg"
              width={260}
              height={200}
            />
          }
        </div>
        <div className={styles.card_data}>
          <h2>{data.title}</h2>
          <p>{`${data.body.substring(0, 66)} ...`}</p>

          <Link href={`/movie/${data.id}`}>
            <button>Read More</button>
          </Link>

          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
