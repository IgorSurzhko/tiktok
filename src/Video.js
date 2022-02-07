import React, { useRef, useState } from 'react';
import VideoFooter from './VideoFooter';
import './Video.css';
import VideoSidebar from './VideoSidebar';

function Video({ url, channel, description, song, likes, messages, shares }) {
	const [playing, setPlaying] = useState(false);
	const videoRef = useRef(null);

	const onVideoPress = () => {
		if (playing) {
			videoRef.current.pause();
			setPlaying(false);
		} else {
			videoRef.current.play();
			setPlaying(true);
		}
	};

	return (
		<div className="video">
			<video
				className="video__player"
				loop
				onClick={onVideoPress}
				ref={videoRef}
				preload="metadata"
				playsinline
				src={`${url}#t=0.001`}></video>
			<VideoFooter channel={channel} description={description} song={song} />
			<VideoSidebar likes={likes} shares={shares} messages={messages} />
		</div>
	);
}

export default Video;
