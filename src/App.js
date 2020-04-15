import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: process.env.REACT_APP_SECRET_KEY,
        q: searchTerm,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={7}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={5}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
