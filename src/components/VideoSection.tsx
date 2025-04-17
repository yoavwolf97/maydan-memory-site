
interface VideoSectionProps {
  title: string;
  videos: {
    url: string;
    description: string;
  }[];
}

export default function VideoSection({ title, videos }: VideoSectionProps) {
  // Function to extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <div className="w-full py-12 px-4 bg-memorial-blue/20" dir="rtl">
      <h3 className="text-3xl font-alef font-bold mb-8 text-center text-memorial-charcoal">{title}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {videos.map((video, index) => {
          const videoId = getYouTubeId(video.url);
          return (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`YouTube video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="mt-4 text-lg font-assistant text-memorial-charcoal text-center">{video.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
