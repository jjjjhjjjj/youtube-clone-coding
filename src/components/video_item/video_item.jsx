import React, { memo } from "react";
import styles from "./video_item.module.css";

const VideoItem = memo((props) => {
  const { thumbnails, title, channelTitle } = props.video.snippet;
  const listType = props.viewVideo ? styles.col : styles.grid;
  return (
    <li
      className={`${styles.container} ${listType}`}
      onClick={() => props.onView(props.video)}
    >
      <div className={styles.video}>
        <img className={styles.thumbnail} src={thumbnails.medium.url} alt="" />
        <div className={styles.content}>
          <strong className={styles.title}>{title}</strong>
          <p className={styles.channelTitle}>{channelTitle}</p>
        </div>
      </div>
    </li>
  );
});

export default VideoItem;
