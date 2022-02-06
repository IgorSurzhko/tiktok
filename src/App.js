import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import './App.css';
import Video from './Video.js';
import db from './firebase.js';

function App() {
	const [videos, setVideos] = useState([]);

	// querySnapshot.forEach(doc => console.log(doc.data()));

	// fetchData();

	useEffect(() => {
		const fetchData = async () => {
			const querySnapshot = await getDocs(collection(db, 'videos'));
			querySnapshot.forEach(doc => {
				setVideos(prevState => [...prevState, doc.data()]);
			});
		};
		fetchData();
	}, []);
	console.log(videos);

	return (
		<div className="app">
			<div className="app__videos">
				{videos.map(({ url, channel, song, description, likes, messages, shares }) => (
					<Video
						url={url}
						channel={channel}
						song={song}
						description={description}
						likes={likes}
						messages={messages}
						shares={shares}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
