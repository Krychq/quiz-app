import React from "react"
import styles from "../styles/Footer.module.scss"

export default function Footer() {
  return (
    <div className={styles.container}>
      <p>
        &copy; 2022 Enjoy. All Right Reserved. Author:{" "}
        <a href="https://github.com/Krychq" target="_blank" rel="noreferrer">
          Krystian Urban
        </a>
        .{" "}
        <a
          href="https://github.com/Krychq/quiz-app"
          target="_blank"
          rel="noreferrer"
        >
          Github Repository
        </a>
      </p>
    </div>
  )
}
