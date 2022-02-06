import React, { useRef, useState } from 'react';
import './Video.css';

function Video() {
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
				src="https://v16-webapp.tiktok.com/7a29ca68a7b96ffcb29d031adfa67aa6/62006bcf/video/tos/alisg/tos-alisg-pve-0037c001/4cf27c871b8544dca63154e6243a35cf/?a=1988&br=2288&bt=1144&cd=0%7C0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=3&er=&ft=XOQ9-39Znz7ThjTAoDXq&l=2022020618452401024501514623CDFCD1&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Fsbzc6ZmpsOjMzODczNEApZTRoNDYzPGU0NzpmZGQ6ZGdwLTBlcjRvMjZgLS1kMS1zcy0zM2JjLmM1MF4zMl9iYy46Yw%3D%3D&vl=&vr="></video>
		</div>
	);
}

export default Video;
