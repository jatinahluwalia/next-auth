"use client"

import { signIn, getProviders, useSession, signOut } from 'next-auth/react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  const { data: session } = useSession()
  console.log(session?.user);

  const [providers, setProviders] = useState(null)
  useEffect(() => {
    const getProvider = async () => {
      const res = await getProviders()

      setProviders(res)
      console.log(res);
    }
    getProvider()
  }, [])

  return (
    <>
      {providers && !session &&
        (
          <>
            <button
              type="button"
              key={providers.google.name}
              onClick={() => signIn(providers.google.id)}
              className="mx-10"
            >
              Sign In with google
            </button>
            <button
              type="button"
              key={providers.facebook.name}
              onClick={() => signIn(providers.facebook.id)}
              className="mx-10"
            >
              Sign In with facebook
            </button>
          </>
        )}

      {
        session && <span className='px-16'>{session.user.email}</span>
      }

      {session && <button
        onClick={signOut}
      >
        Sign Out
      </button>}

      <Image src={session?.user?.image} alt=""
        width={50}
        height={50}
      />
    </>
  )
}
