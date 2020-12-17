import { useEffect, useState, useCallback } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";
import VideoView from "./components/video_view/video_view";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [viewVideo, setViewVideo] = useState();

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((result) => setVideos(result))
      .catch((error) => console.log("error", error));
  }, [youtube]);

  const search = useCallback(
    (search) => {
      setViewVideo(null);
      youtube
        .search(search) //
        .then((response) => setVideos(response))
        .catch((error) => console.log("error", error));
    },
    [youtube]
  );

  const view = (video) => {
    setViewVideo(video);
  };

  const unView = () => {
    setViewVideo(null);
  };
  return (
    <>
      <SearchHeader onSearch={search} onUnView={unView} />
      <section className={styles.container}>
        {viewVideo && (
          <div className={styles.view}>
            <VideoView viewVideo={viewVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onView={view} viewVideo={viewVideo} />
        </div>
      </section>
    </>
  );
}

export default App;
