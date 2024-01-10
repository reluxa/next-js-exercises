'use client'

import { signIn, signOut} from "next-auth/react";

export default function Login() {
    return (
        <>
            <button onClick={() => signIn(undefined, {callbackUrl: '/'})}>
                Login
            </button>
            <button onClick={() => signOut()}>
                Logout
            </button>
        </>
    );
}