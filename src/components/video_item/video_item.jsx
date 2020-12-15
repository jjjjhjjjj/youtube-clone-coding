import React from "react";
import styles from "./video_item.module.css";

const VideoItem = (props) => {
  const { thumbnails, title, channelTitle } = props.video.snippet;
  return (
    <li className={styles.container}>
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={thumbnails.standard.url}
          alt=""
        />
        <div className={styles.content}>
          <strong className={styles.title}>{title}</strong>
          <p className={styles.channelTitle}>{channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
