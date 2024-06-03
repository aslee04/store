import React from 'react'
import styles from './main.module.css'

const Container = ({children}) => {
  return (
    <div className={styles.parentContainer}>
        {children}
    </div>
  )
}

export default Container