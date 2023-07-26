"use client"

import { useSession, signIn, signOut, getProviders } from "next-auth/react"
import { useEffect, useState } from "react"
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Image from "next/image";
import { Dialog, DialogTitle } from "@mui/material";

const Navbar = () => {
    const { data: session } = useSession()
    const [providers, setProviders] = useState(null)
    const [open, setOpen] = useState(false)

    console.log(session);
    useEffect(() => {
        const getProvider = async () => {
            const res = await getProviders()
            setProviders(res)
        }
        getProvider()
    }, [])
    return (
        <nav className="flex justify-between items-center mx-auto max-w-[1200px] h-16">
            <h1 className=" text-3xl">JITU</h1>

            {session ? (
                <div className="flex items-center gap-5">
                    <Image
                        src={session?.user?.image}
                        width={40}
                        height={40}
                        className="rounded-full border-[1px] border-black"
                        alt={session?.user?.name}
                    />
                    <button
                        type="button"
                        className="rounded-full px-4 py-2 bg-black text-white hover:bg-white hover:text-black transition-all"
                        onClick={() => {
                            signOut()
                        }}
                    >
                        Sign Out
                    </button>
                </div>
            ) : (
                providers && <div>
                    <button
                        type="button"
                        className="rounded-full px-4 py-2 bg-black text-white hover:bg-white hover:text-black transition-all"
                        onClick={() => {
                            setOpen(true)
                        }}
                    >
                        Sign in
                    </button>
                    <Dialog open={open} className="" onClose={() => setOpen(false)}>
                        <DialogTitle>Sign in with Social Media </DialogTitle>
                        <div className="flex flex-col gap-2 p-5">
                            <button
                                type="button"
                                className="flex gap-3 items-center border-2 border-black p-5 rounded-full hover:bg-gray-50"
                                onClick={() => signIn(providers.google.id)}
                                key={providers.google.name}
                            >
                                <GoogleIcon />
                                <span>Sign in with Google</span>
                            </button>
                            <button
                                type="button"
                                className="flex gap-3 items-center border-2 border-black p-5 rounded-full hover:bg-gray-50"
                                onClick={() => signIn(providers.facebook.id)}
                                key={providers.facebook.name}
                            >
                                <FacebookIcon />
                                <span>Sign in with Facebook</span>
                            </button>
                        </div>
                    </Dialog>
                </div>
            )}
        </nav>
    )
}

export default Navbar