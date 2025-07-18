import Link from 'next/link'

export default function About() {
  return (
    <div className="container">
      <h1>About Page</h1>
      <p>This is the about page of our Next.js 15 app with app router.</p>

      <div className="features">
        <h2>App Router Benefits:</h2>
        <ul>
          <li>File-based routing</li>
          <li>Server Components by default</li>
          <li>Improved performance</li>
          <li>Better developer experience</li>
        </ul>
      </div>

      <div className="links">
        <Link href="/">← Back to Home</Link>
      </div>
    </div>
  )
}
