class Youtube {
  constructor(key) {
    this.key = key;

    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };

    this.link = "https://youtube.googleapis.com/youtube/v3";
  }

  mostPopular() {
    return fetch(
      `${this.link}/videos?part=snippet&chart=mostPopular&maxResults=26&key=${this.key}`,
      this.requestOptions
    )
      .then((response) => response.json())
      .then((result) => result.items);
  }

  search(search) {
    return fetch(
      `${this.link}/search?part=snippet&maxResults=26&key=${this.key}&q=${search}`,
      this.requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({
          ...item,
          id: item.id.videoId,
        }))
      );
  }
} 

export default Youtube;
