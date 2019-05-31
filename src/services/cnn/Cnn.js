import React, { Component, useState, useEffect } from 'react';
import { CNN_WORLD } from '../common/Constants';
import { CnnHtmlParser } from './CnnHtmlParser';
import downloadImg from '../common/Downloader';

export const Cnn = ({ requester }) => {
  const [headLines, setHeadLines] = useState([]);

  useEffect(() => {
    async function crawling() {
      const result = await requester.get(CNN_WORLD);

      const headLines = new CnnHtmlParser().parse(result.data);

      headLines.map(d => downloadImg(d.image_url));
      setHeadLines(headLines);
    }

    crawling();

    return () => {};
  }, []);

  return (
    <div>
      <h2>Crwaling CNN basic</h2>
      {headLines.map(h => (
        <div key={h.title}>{h.title}</div>
      ))}
    </div>
  );
};
