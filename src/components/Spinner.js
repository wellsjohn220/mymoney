import React from 'react'
import spinner from "../assets/svg/spinner.svg"
import styles from './Spinner.module.css'

export default function Spinner() {
  return (
    <div>
      <img src={spinner} alt="Loading" className={styles.lodingtocenter}  />
    </div>
  )
}
