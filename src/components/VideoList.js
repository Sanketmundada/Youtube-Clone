import React from "react";
import VideoItem from "./VideoItem";
import { Grid } from "@material-ui/core";
const VideoList = ({ videos, onVideoSelect }) => {
  const listofVideos = videos.map((video, id) => {
    return <VideoItem key={id} onVideoSelect={onVideoSelect} video={video} />;
  });
  return (
    <Grid container spacing={10}>
      {listofVideos}
    </Grid>
  );
};

export default VideoList;
