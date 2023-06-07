import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

const account = () => {
    const { data: session, status } = useSession({required: true})
    // const {accessToken} = data
    console.log(session, status)
    if (status === 'authenticated') {
        return (
            <div>
                <p>Welcome {session.user.name}</p>
                {/* <div>Access Token: {accessToken}</div> */}
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        )
    } else {
        return (
            <div>
                <p> you are not signed in</p>
            </div>
        )
    };
};


export default account;