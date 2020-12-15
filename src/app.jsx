import { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";

function App() {
  const [videos, setVideos] = useState([]);
  // const [search, setSearch] = useState();

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=26&key=AIzaSyBlk9XU9tEPFtzLY9_D5wVNxF-V-u5_-DI",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  const handleSearch = (search) => {
    // setSearch(search);
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&key=AIzaSyBlk9XU9tEPFtzLY9_D5wVNxF-V-u5_-DI&q=${search}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const data = result.items.map((item) => ({
          ...item,
          id: item.id.videoId,
        }));

        setVideos(data);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <SearchHeader onSearch={handleSearch} />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
