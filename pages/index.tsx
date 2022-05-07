import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import Center from '../components/Center'

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <Head>
        <title>Spotify Clone</title>
        <link rel="icon" href="/spotify.ico" />
      </Head>
      <main className='flex'>
        <Sidebar />
        <Center />
      </main>
    </div>
  )
}

export default Home
