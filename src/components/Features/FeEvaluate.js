import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/Features/FeEvaluate.module.css';

export default function FeEvaluate() {
  return (
    <div className={styles.evaluateWrapper}>
        <div className={styles.evaluateMain}>
            <div className={styles.evaluateContain} data-aos="flip-up">
                <div className={styles.evaluateHeading}>Evaluate your resume with Intellirecruit</div>
                <Link className={styles.evaluateLink} to="/product">Evaluate my resume</Link>
            </div>
        </div>
    </div>
  )
}
