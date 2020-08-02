import React from "react";
import { VideoCardContainer, Title } from "./styles";

function getYouTubeId(youtubeURL) {
	return youtubeURL.replace(
		/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
		"$7"
	);
}

function VideoCard({ videoTitle, videoURL, categoryColor }) {
	const image = `https://img.youtube.com/vi/${getYouTubeId(
		videoURL
	)}/hqdefault.jpg`;
	return (
		<div style={{ position: "relative" }}>
			<VideoCardContainer
				url={image}
				href={videoURL}
				target="_blank"
				style={{ borderColor: categoryColor || "red" }}
				title={videoTitle}
			>
				<Title>{videoTitle}</Title>
			</VideoCardContainer>
		</div>
	);
}

export default VideoCard;
