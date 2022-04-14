import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';


function Loading() {

    const containerStyle = {
        display: 'grid',
        placeItems: 'center',
        gap: '50px',
        zIndex: '999'
    }

    const labelStyle = {
        color: 'white',
        fontSize: '50px'
    }

  return (
    <div style={containerStyle}>
        <Player
          autoplay
          loop
          src="https://assets5.lottiefiles.com/packages/lf20_QUbOiL.json"
          style={{ height: '300px', width: '300px' }}
        />
        <h1 style={labelStyle}>LOADING...</h1>
    </div>
  )
}

export default Loading