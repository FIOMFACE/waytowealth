import Head from "next/head";

export default function ChannelPage() {
  return (
      <Head>
        <title>Channel | PureWayWealth</title>
        <meta
          name="description"
          content="Join our channel to explore wealth, health, and peace insights."
        />
      </Head>

      <section className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900">
        {/* Header */}
        <div className="max-w-5xl mx-auto text-center py-12 px-6">
          <img
            src="/logo.png"
            alt="Channel Logo"
            className="mx-auto w-20 h-20 mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            PureWayWealth Channel
          </h1>
          <p className="text-lg text-gray-600">
            Your daily dose of Wealth 💰, Health ❤️, and Peace ☮️
          </p>
          <a
            href="https://youtube.com/@yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-6 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700"
          >
            Subscribe on YouTube
          </a>
        </div>

        {/* About Me */}
        <div className="max-w-4xl mx-auto py-12 px-6">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            Hello 👋 I’m <span className="font-semibold">[Your Name]</span>, and
            I started this channel to share insights that help you trade less,
            sleep more, and live fully. Expect tips on wealth building,
            well-being, and mindful living.
          </p>
        </div>

        {/* Latest Videos */}
        <div className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Latest Videos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Video 1 */}
              <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden">
                <iframe
                  width="100%"
                  height="250"
                  src="https://www.youtube.com/embed/your_video_id"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    Video 1 Title
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Short description of what this video covers.
                  </p>
                </div>
              </div>

              {/* Video 2 */}
              <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden">
                <iframe
                  width="100%"
                  height="250"
                  src="https://www.youtube.com/embed/your_video_id"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    Video 2 Title
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Short description of what this video covers.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <a
                href="https://youtube.com/@yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700"
              >
                Watch More on YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Connect With Me</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-medium"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 font-medium"
            >
              Instagram
            </a>
            <a
              href="mailto:your@email.com"
              className="text-gray-600 font-medium"
            >
              Email
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-300 py-