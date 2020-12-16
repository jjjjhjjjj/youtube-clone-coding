import { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  // const [search, setSearch] = useState();

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((result) => setVideos(result))
      .catch((error) => console.log("error", error));
  }, []);

  const handleSearch = (search) => {
    // setSearch(search);
    youtube
      .search(search) //
      .then((response) => setVideos(response))
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
