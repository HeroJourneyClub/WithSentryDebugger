'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [apiResponse, setApiResponse] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const testGetRequest = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/test?name=NextJS')
      const data = await response.json()
      setApiResponse(data)
    } catch (error) {
      setApiResponse({ error: 'Failed to fetch', success: false })
    } finally {
      setIsLoading(false)
    }
  }

  const testPostRequest = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Next.js 15',
          type: 'Framework',
          version: '15.0.0'
        })
      })
      const data = await response.json()
      setApiResponse(data)
    } catch (error) {
      setApiResponse({ error: 'Failed to fetch', success: false })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container">
      <h1>Welcome to Next.js 15 with App Router</h1>
      <p>This is a basic Next.js 15 project using the app router.</p>

      <div className="features">
        <h2>Features:</h2>
        <ul>
          <li>Next.js 15</li>
          <li>App Router</li>
          <li>TypeScript</li>
          <li>React 18</li>
          <li>API Routes</li>
        </ul>
      </div>

      <div className="api-testing">
        <h2>API Testing:</h2>
        <div className="api-buttons">
          <button
            onClick={testGetRequest}
            disabled={isLoading}
            className="api-button"
          >
            {isLoading ? 'Loading...' : 'Test GET Request'}
          </button>
          <button
            onClick={testPostRequest}
            disabled={isLoading}
            className="api-button"
          >
            {isLoading ? 'Loading...' : 'Test POST Request'}
          </button>
        </div>

        {apiResponse && (
          <div className="api-response">
            <h3>API Response:</h3>
            <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
          </div>
        )}
      </div>

      <div className="links">
        <Link href="/about">About Page</Link>
      </div>
    </div>
  )
}
