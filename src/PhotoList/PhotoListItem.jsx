import React from "react";
import styles from "./PhotoListItem.module.css";

import BlogImage from "../Components/BlogImage";

const PhotoListItem = (props) => {
  const link = "/detailPhoto/" + props.blog.blogId;
  return (
    <div className={styles.abox}>
      <a href={link}>
        <BlogImage blog={props.blog} />
      </a>
    </div>
  );
};

export default PhotoListItem;
