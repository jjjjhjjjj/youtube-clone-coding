import React from "react";
import styles from "./video_list.module.css";
import VideoItem from "../video_item/video_item";

const VideoList = (props) => {
  return (
    <ul className={styles.list}>
      {props.videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onView={props.onView}
          viewVideo={props.viewVideo}
        />
      ))}
    </ul>
  );
};

export default VideoList;
