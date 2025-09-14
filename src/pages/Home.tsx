import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <section className="relative h-[80vh] flex items-center justify-center text-white bg-hero before:absolute before:inset-0 before:bg-black/40 before:content-['']">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-7xl font-heading font-bold mb-6">
            Next-Gen Property Management Software
          </h1>
          <Link to="/contact" className="btn text-lg">
            Request a Demo
          </Link>
        </div>
      </section>
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-center">
          <div className="card hover:scale-105 transition-transform">
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
                  d="M12 8v4l3 3"
                />
              </svg>
            </div>
            <h3 className="text-xl font-heading mb-2">Automated Listings</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Post and update property listings automatically.
            </p>
            <Link to="/features" className="text-primary hover:underline">
              Learn More
            </Link>
          </div>
          <div className="card hover:scale-105 transition-transform">
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
                  d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m4 0H5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-heading mb-2">Maintenance Tracker</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Stay on top of repair requests and schedules.
            </p>
            <Link to="/features" className="text-primary hover:underline">
              Learn More
            </Link>
          </div>
          <div className="card hover:scale-105 transition-transform">
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
                  d="M11 11V9a1 1 0 012 0v2m0 0v2m0-2h2m-2 0H9m11 4a8 8 0 10-14 0 8 8 0 0014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-heading mb-2">
              Data Analytics Dashboard
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Visualize trends and metrics in real time.
            </p>
            <Link to="/features" className="text-primary hover:underline">
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-heading mb-6 text-center">
            Built on Cutting-Edge Tech
          </h2>
          <p className="text-center mb-4 text-gray-600 dark:text-gray-300">
            RESTful APIs and WebSockets power real-time updates and cloud-native
            scalability.
          </p>
          <div className="flex overflow-x-auto gap-8 py-4 items-center justify-center">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/aws.svg"
              alt="AWS"
              className="h-12"
            />
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg"
              alt="PostgreSQL"
              className="h-12"
            />
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/stripe.svg"
              alt="Stripe"
              className="h-12"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
