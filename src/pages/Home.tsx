export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <p>Welcome to NovaFrame!</p>
      <p>API URL: {import.meta.env.VITE_API_URL}</p>
    </div>
  )
}
