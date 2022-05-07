import Image from 'next/image'
import { useSession } from 'next-auth/react'

function Center() {
  const { data: session } = useSession
  const profilePictureUrl = session?.user.image
  console.log(session)
  return (
    <div className="flex flex-grow text-white">
      <h1>This is the center item</h1>
      <header>
        <div>
          {/* <Image src={profilePictureUrl} width={40} height={40} alt="" /> */}
          <img className='rounded-full border w-10 h-10' src={profilePictureUrl} alt=''/>
        </div>
      </header>
    </div>
  )
}

export default Center
