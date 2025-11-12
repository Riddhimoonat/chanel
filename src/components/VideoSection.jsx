import React from "react";

const VideoSection = () => {
  return (
    <div className="h-screen w-full mt-20 overflow-hidden flex items-center justify-center">
      <video
        src="/videos/chanel.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default VideoSection;
