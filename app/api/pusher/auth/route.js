import { NextResponse } from 'next/server'
import Pusher from 'pusher'

const pusher = new Pusher({
  appId: process.env.NEXT_PUBLIC_PUSHER_APP_ID,
  key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY,
  secret: process.env.NEXT_PUBLIC_PUSHER_APP_SECRET,
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
})

export async function POST(request) {
  const data = await request.formData()
  const socketId = data.get('socket_id')
  const channel = data.get('channel_name')

  // Add your authentication logic here
  // Verify the user is allowed to subscribe to this channel
  // You might want to check user session, tokens, etc.
  
  try {
    const authResponse = pusher.authorizeChannel(socketId, channel)
    return NextResponse.json(authResponse)
  } catch (error) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
  }
}
