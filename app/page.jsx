"use client"

import { signIn, getProviders, useSession, signOut } from 'next-auth/react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@mui/material'

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
      {/* {providers && !session &&
        (
          <>
            <Button
              variant="contained"
              onClick={() => signIn(providers.google.id)}
            >
              Sign In with google
            </Button>
            <Button
              variant="contained"
              onClick={() => signIn(providers.facebook.id)}
            >
              Sign In with facebook
            </Button>
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

      {session?.user && <Image src={session?.user?.image} alt=""
        width={50}
        height={50}
      />} */}
    </>
  )
}
