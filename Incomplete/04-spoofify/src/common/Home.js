import React, { useEffect, useState } from 'react'

import { getTokenFromUrl } from '../components/lib/auth'
import { spotify } from '../components/lib/api'

import Login from '../components/auth/Login'
import Player from './Player'
import { useDataLayerValue } from '../DataLayer'


const Home = () => {
    const [token, setToken] = useState(null)
    const [{ user }, dispatch]= useDataLayerValue()


    useEffect(() => {
        const hash = getTokenFromUrl()
        window.location.hash = ''
        const _token = hash.access_token

        if (_token) {
            setToken(_token)

            
            spotify.setAccessToken(_token)
            spotify.getMe().then(user => {
                console.log(`This is the user :`, user)
                // console.log(`This is the token :`, _token)
                
                dispatch({
                    type: 'SET_USER',
                    user: user,
                })
            })
        }


        console.log(`🚀This is our spotify token 🚀:`, token)
    }, [])

    console.log(`This is the user :`, user)

    return (
        <div>

        {
            token ? (

                <Player />

            ) : (

            <Login />

            )
        }
        </div>
        
    )
}

export default Home