import React, { useRef, useEffect } from 'react';
import './VideoPlayer.css';
import neha_video from '../../assets/neha-video.mp4';

const VideoPlayer = ({ hideVideoPlayer, setHideVideoPlayer }) => {
    const playerRef = useRef();

    // Function to handle background click
    const handleHideVideoPlayer = (e) => {
        if (e.target === playerRef.current) {
            setHideVideoPlayer(true);
        }
    };

    // Close video on 'Esc' key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setHideVideoPlayer(true);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [setHideVideoPlayer]);

    return (
        <div className={`video-player ${hideVideoPlayer ? 'hide' : ''}`} ref={playerRef} onClick={handleHideVideoPlayer}>
            <video src={neha_video} autoPlay controls muted onClick={(e) => e.stopPropagation()}></video>
        </div>
    );
};

export default VideoPlayer;
