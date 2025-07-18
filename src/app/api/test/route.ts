import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const name = searchParams.get('name') || 'World'

  console.log("Add a breakpoint here")

  return NextResponse.json({
    message: `Hello ${name}!`,
    timestamp: new Date().toISOString(),
    method: 'GET',
    success: true
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    console.log("Add a breakpoint here")

    return NextResponse.json({
      message: 'Data received successfully',
      receivedData: body,
      timestamp: new Date().toISOString(),
      method: 'POST',
      success: true
    })
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Invalid JSON',
        success: false,
        timestamp: new Date().toISOString()
      },
      { status: 400 }
    )
  }
}
