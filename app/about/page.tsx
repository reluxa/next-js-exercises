'use client'
import {useSession} from "next-auth/react";


export default function About() {
    const { data:session, status } = useSession()
    console.log("session", session);

    if (session) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <div className="p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-bold mb-2">About Us</h1>
                <p className="text-gray-700">Authenticated: {session.user?.email}</p>
                </div>
             </div>    
        )
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-bold mb-2">About Us</h1>
                <p className="text-gray-700">We are a team of passionate individuals dedicated to creating the best user experience possible.</p>
                <p className="text-gray-700">Our mission is to provide high-quality services that exceed our customers' expectations.</p>
                <p className="text-gray-700">For any inquiries, please contact us at info@ourwebsite.com.</p>
            </div>
        </div>
    )
}