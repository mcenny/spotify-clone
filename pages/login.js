import { getProviders, signIn } from 'next-auth/react'
import Image from 'next/image'

function Login({ providers }) {

    console.log(providers)
  return (
    <div className='flex flex-col items-center bg-black min-h-screen w-full justify-center'>
      <Image
        src="https://links.papareact.com/9xl"
        width={208}
        height={208}
        alt=""
        // className='mb-5 w-52'
      />

      { Object.values(providers).map((provider) => 
        (
          <div>
            <button className='bg-[#18D860] text-white p-5 rounded-full mt-5' onClick={()=>signIn(provider.id, {callbackUrl: '/'})}>Login with {provider.name}</button>
          </div>
        )
      )}
    </div>
  )
}

export default Login

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}
