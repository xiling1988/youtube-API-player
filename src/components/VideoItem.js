import React from 'react';
import './videoItem.css';

// video is deconstruction of props.video
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt=""
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
        <div className="description">{video.snippet.channelTitle}</div>
      </div>
    </div>
  );
};

export default VideoItem;

// {
/* <div className="item">
  <img
    className="ui image"
    src={video.snippet.thumbnails.medium.url}
    alt=""
  >
  <div class="content">
    <a
      class="header"
      href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
    >
      {video.snippet.title}
    </a>
    <div class="description">Updated 10 mins ago</div>
  </div>
</div> */
// }
