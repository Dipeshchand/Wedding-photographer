import { useEffect, useState } from "react";

function VideoCard({ video }) {
  const [play, setPlay] = useState(false);
  const videoId = video.id.videoId;
  const thumbnail = video.snippet.thumbnails.high.url;

  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer group"
      onClick={() => setPlay(true)}
    >
      {!play ? (
        <>
          <img
            src={thumbnail}
            alt={video.snippet.title}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/70 backdrop-blur-xl p-4 rounded-full shadow-xl group-hover:scale-125 transition-transform duration-300">
              <svg
                className="w-10 h-10 text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </>
      ) : (
        <iframe
          className="w-full h-56"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="autoplay"
          allowFullScreen
        ></iframe>
      )}

      <p className="p-3 text-base font-semibold text-gray-800">
        {video.snippet.title}
      </p>
    </div>
  );
}

export default function YouTubeFeed() {
  const [videos, setVideos] = useState([]);

  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
        );
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    }

    fetchVideos();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        🎥 Latest Wedding Videos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id.videoId} video={video} />
        ))}
      </div>
    </div>
  );
}
