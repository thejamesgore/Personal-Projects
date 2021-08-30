import React, { useEffect, useState } from 'react'
import Login from '../components/auth/Login'
import { getTokenFromUrl } from '../components/lib/auth'

const Home = () => {
    const [token, setToken] = useState(null)


    useEffect(() => {
        const hash = getTokenFromUrl()
        window.location.hash = ''
        const _token = hash.access_token

        if (_token) {
            setToken(_token)
        }

        console.log(`🚀This is our spotify token 🚀:`, token)
    }, [])

    return (
        <div>

        {
            token ? (

                <h1>YOU ARE LOGGED IN</h1>

            ) : (

            <Login />

            )
        }
        </div>
        
    )
}

export default Home