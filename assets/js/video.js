/**
 * GAIA 2.0 - Video Showcase Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  const mainVideo = document.getElementById('mainVideo');
  const videoTitle = document.getElementById('currentVideoTitle');
  const videoDesc = document.getElementById('currentVideoDesc');
  const videoBadge = document.getElementById('currentVideoBadge');
  const playlistCards = document.querySelectorAll('.video-thumb-card');

  const videoData = {
    'gaia_project_video': {
      src: 'assets/videos/gaia_project_video.mp4',
      title: 'GAIA 2.0: Full Project Demonstration & Overview',
      desc: 'Comprehensive engineering walkthrough of the GAIA smart forest monitoring system. Highlights multi-sensor WisBlock nodes, Raspberry Pi edge vision cameras, LoRaWAN gateway integration, and real-time field deployments in Cauvery Wildlife Sanctuary.',
      badge: 'Main Project Film'
    },
    'gaia_field_clip': {
      src: 'assets/videos/gaia_field_clip.mp4',
      title: 'Cauvery Wildlife Sanctuary - Live Field Deployment',
      desc: 'Footage captured during the field deployment period at Anchetty Reserve Forest. Shows tree canopy installation of sensor nodes and real-time telemetry verification over an 8km LoRa transmission radius.',
      badge: 'Field Deployment'
    },
    'wildfire': {
      src: 'assets/videos/wildfire.mp4',
      title: 'Edge AI Fire & Smoke Early Detection Demonstration',
      desc: 'Deep learning inference validation using Sony IMX AI Camera and Raspberry Pi Zero 2 W running the custom 4-class classification model (80.69% accuracy) designed by Team Lead Vishwar S J.',
      badge: 'ML Edge Detection'
    }
  };

  playlistCards.forEach(card => {
    card.addEventListener('click', () => {
      playlistCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const videoKey = card.getAttribute('data-video-key');
      const data = videoData[videoKey];

      if (data && mainVideo) {
        mainVideo.src = data.src;
        if (videoTitle) videoTitle.textContent = data.title;
        if (videoDesc) videoDesc.textContent = data.desc;
        if (videoBadge) videoBadge.textContent = data.badge;

        mainVideo.load();
        mainVideo.play().catch(err => {
          // Autoplay policy might block unmuted autoplay, handled silently
          console.log('Autoplay prevented: user interaction required');
        });
      }
    });
  });
});
