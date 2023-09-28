/* eslint-disable react/prop-types */

import styles from './Question.module.css'

function Question({question}) {
  return (
    <div className={styles.question}>{question.name}</div>
  )
}

export default Question