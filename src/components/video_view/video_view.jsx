import React from "react";
import styles from "./video_view.module.css";
const VideoView = ({ viewVideo }) => {
  return (
    <section className={styles.view}>
      <h2 className={styles.title}>{viewVideo.snippet.title}</h2>
      <iframe
        className={styles.iframe}
        id="ytplayer"
        title="youtube player"
        width="100%"
        height="500px"
        type="text/html"
        src={`https://www.youtube.com/embed/${viewVideo.id}?autoplay=1`}
        frameBorder="0"
        allowFullScreen
      />
      <strong className={styles.channelTitle}>
        {viewVideo.snippet.channelTitle}
      </strong>
      <pre className={styles.desc}>{viewVideo.snippet.description}</pre>
    </section>
  );
};

export default VideoView;
