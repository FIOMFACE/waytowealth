export default function ChannelPage() {
  return (
    <div>
      {<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Your Channel Name] - [Channel Tagline]</title>
    <!-- Link to your CSS stylesheet -->
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <div class="container">
            <img src="your-logo.png" alt="Your Channel Logo" class="logo">
            <h1>[Your Channel Name]</h1>
            <p>[Your Channel Tagline/Brief Description]</p>
            <a href="YOUR_YOUTUBE_CHANNEL_LINK" target="_blank" class="cta-button youtube-subscribe">Subscribe on YouTube</a>
            <a href="[LINK_TO_LATEST_VIDEO]" class="cta-button secondary">Watch Latest Video</a>
        </div>
    </header>

    <section id="about">
        <div class="container">
            <img src="your-profile-picture.jpg" alt="Your Name" class="profile-pic">
            <h2>About Me</h2>
            <p>Hello! I'm [Your Name], and on this channel, I'm passionate about [what you do]. I started this channel to share [your mission/why]. You can expect [types of content] that will help you [benefit for viewer].</p>
            <p>Join our growing community!</p>
        </div>
    </section>

    <section id="featured-videos">
        <div class="container">
            <h2>Latest Videos</h2>
            <!-- Embed your featured video -->
            <div class="video-embed">
                <iframe width="560" height="315" src="YOUR_FEATURED_VIDEO_YOUTUBE_URL" frameborder="0" allowfullscreen></iframe>
            </div>

            <div class="video-grid">
                <!-- Repeat for each latest video -->
                <div class="video-item">
                    <a href="[VIDEO_1_YOUTUBE_LINK]" target="_blank">
                        <img src="thumbnail1.jpg" alt="Video 1 Title">
                        <h3>Video 1 Title</h3>
                    </a>
                </div>
                <div class="video-item">
                    <a href="[VIDEO_2_YOUTUBE_LINK]" target="_blank">
                        <img src="thumbnail2.jpg" alt="Video 2 Title">
                        <h3>Video 2 Title</h3>
                    </a>
                </div>
                <!-- Add more video items -->
            </div>
            <a href="YOUR_YOUTUBE_CHANNEL_LINK" target="_blank" class="cta-button">Watch More on YouTube</a>
        </div>
    </section>

    <section id="why-subscribe">
        <div class="container">
            <h2>Why Join Us?</h2>
            <ul>
                <li>🚀 Never miss a new upload!</li>
                <li>💡 Get exclusive tips & tricks.</li>
                <li>💬 Connect with fellow [your niche] enthusiasts.</li>
            </ul>
        </div>
    </section>

    <section id="connect">
        <div class="container">
            <h2>Connect With Me</h2>
            <div class="social-links">
                <a href="[INSTAGRAM_LINK]" target="_blank">Instagram</a>
                <a href="[TWITTER_LINK]" target="_blank">Twitter</a>
                <a href="[EMAIL_LINK]">Email</a>
                <!-- Add more social links -->
            </div>
            <div class="newsletter-signup">
                <h3>Join the Newsletter</h3>
                <!-- Embed your newsletter signup form here -->
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2023 [Your Channel Name]. All rights reserved.</p>
            <p><a href="YOUR_YOUTUBE_CHANNEL_LINK" target="_blank">Visit my YouTube Channel</a></p>
        </div>
    </footer>

</body>
</html>
}
    </div>
  );
}