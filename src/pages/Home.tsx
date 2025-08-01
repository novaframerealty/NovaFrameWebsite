import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-primary to-accent text-white">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Find Your Dream Home
          </h1>
          <p className="mb-6 text-lg md:text-2xl">
            Building spaces that inspire
          </p>
          <Link to="/contact" className="btn">
            Contact Us
          </Link>
        </div>
      </section>
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-center">
          <div className="card">
            <div className="mb-4 text-primary">
              <svg
                className="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7m-9 9v-6h4v6m5-6h2a2 2 0 002-2V7a2 2 0 00-2-2h-3m-6 0H5a2 2 0 00-2 2v3a2 2 0 002 2h2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-heading mb-2">Quality Homes</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Crafted with attention to detail.
            </p>
          </div>
          <div className="card">
            <div className="mb-4 text-primary">
              <svg
                className="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2zm0 0c-4.4183 0-8 1.7909-8 4v5h16v-5c0-2.2091-3.5817-4-8-4z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-heading mb-2">Expert Team</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Professionals ready to help.
            </p>
          </div>
          <div className="card">
            <div className="mb-4 text-primary">
              <svg
                className="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.105 0-2 .672-2 1.5S10.895 11 12 11s2-.672 2-1.5S13.105 8 12 8zm0 0v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-heading mb-2">Great Support</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We are here for you 24/7.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
