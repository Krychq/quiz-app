import React from "react"
import Link from "next/link"
import styles from "../styles/Custom404.module.scss"
import { Player } from "@lottiefiles/react-lottie-player"
import { Button } from "@mantine/core"

export default function Custom404() {
  return (
    <div className={styles.container}>
      <Player
        autoplay
        loop
        src="https://assets10.lottiefiles.com/packages/lf20_suhe7qtm.json"
        style={{ height: "20rem", width: "20rem" }}
      />

      <h1>Oops</h1>
      <p>We couldn't find the page you are looking for...</p>
      <Link href="/">
        <Button color="violet" size="lg" radius="md">
          Back to Homepage
        </Button>
      </Link>
    </div>
  )
}
