import React, { useState, useEffect } from "react"
import "../styles/globals.css"
import Head from "next/head"
import { QuizProvider } from "../context/QuizContext"
import Loading from "../components/Loading"
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return <Loading />
  }

  const styles = {
    height: "calc(100vh - 80px)",
    display: "grid",
    placeItems: "center",
  }

  if (typeof window === "undefined") {
    return <></>
  } else {
    return (
      <>
        <Head>
          <title>Quiz App</title>
          <link rel="icon" href="/icon.ico" />
          <meta name="robots" content="noindex, nofollow"></meta>
        </Head>

        <div style={styles}>
          <QuizProvider>
            <Component {...pageProps} />
          </QuizProvider>
          <Footer />
        </div>
      </>
    )
  }
}

export default MyApp
