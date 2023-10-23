'use client';

import { memo, useCallback, useRef, useEffect } from 'react';
import Styles from './video.module.css';

const Video = memo(() => {
  const videoRef = useRef<HTMLVideoElement>(null);
  // когда видео замонтируется, проверяем SS на наличие сохраненного времени у видео
  useEffect(() => {
    if (videoRef.current) {
      const startFrom = sessionStorage.getItem('startVideo');
      if (startFrom) videoRef.current.currentTime = Number(startFrom);
    }
  }, []);

  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      // при обновление текущего времени у видео оно будет сохранятся в SS
      sessionStorage.setItem(
        'startVideo',
        String(videoRef.current.currentTime),
      );
    }
  }, []);

  return (
    <video
      className={Styles.video}
      ref={videoRef}
      src="/video/1.mp4"
      autoPlay
      loop
      muted
      onTimeUpdate={handleTimeUpdate}
    />
  );
});

export default Video;
