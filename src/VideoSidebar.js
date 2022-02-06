import React, { useState } from 'react';
import './VideoSidebar.css';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';

function VideoSidebar() {
	const [liked, setLiked] = useState(false);

	return (
		<div className="videoSidebar">
			<div class="videoSidebar__button">
				{liked ? (
					<FavoriteIcon
						onClick={() => {
							setLiked(false);
						}}
					/>
				) : (
					<FavoriteBorderIcon
						onClick={() => {
							setLiked(true);
						}}
					/>
				)}

				<p>300</p>
			</div>
			<div class="videoSidebar__button">
				<MessageIcon />
				<p>248</p>
			</div>
			<div class="videoSidebar__button">
				<ShareIcon />
				<p>1223</p>
			</div>
		</div>
	);
}

export default VideoSidebar;
