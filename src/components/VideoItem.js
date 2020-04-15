import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper style={{ display: "flex", alignItems: "center" }}>
        <img
          style={{ marginRight: "1.2rem" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
          onClick={() => onVideoSelect(video)}
          style={{ cursor: "pointer" }}
        />
        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};
export default VideoItem;
