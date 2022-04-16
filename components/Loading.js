import React from "react"
import { Player } from "@lottiefiles/react-lottie-player"

function Loading() {
  const styles = {
    container: {
      display: "grid",
      placeItems: "center",
      gap: "50px",
      zIndex: "999",
    },
    label: {
      color: "white",
      fontSize: "2.5rem",
    },
  }
  return (
    <div style={styles.container}>
      <Player
        autoplay
        loop
        src="https://assets5.lottiefiles.com/packages/lf20_QUbOiL.json"
        style={{ height: "16rem", width: "16rem" }}
      />
      <h1 style={styles.label}>LOADING...</h1>
    </div>
  )
}

export default Loading
