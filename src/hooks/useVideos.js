/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import youtube from '../apis/youtube';

const Videos = defaultSearchTerm => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async term => {
    try {
      const results = await youtube.get('/search', {
        params: { q: term },
      });
      setVideos(results.data.items);
    } catch (err) {
      console.log(err);
    }
  };

  return [videos, search];
};
export default Videos;
