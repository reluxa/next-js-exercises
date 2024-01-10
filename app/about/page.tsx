'use client'
import { SessionProvider } from 'next-auth/react'
import { useSession } from "next-auth/react"


export default function About() {

    const { data: session, status } = useSession()

    if (status === "authenticated") {
        return <p>Signed in as {session.user?.email}</p>
    }

    return (
        <div>About...</div>
    )
}

