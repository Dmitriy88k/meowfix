import styles from "./hours.module.css";

const Hours = () => {
  return (
    <div className={styles.business_hours}>
      <h2>Hours</h2>
      <p><span className={styles.business_day}>Mon:</span><span className={styles.business_hour}>12:00 pm - 8:00 pm</span></p>
      <p><span className={styles.business_day}>Tue:</span><span className={styles.business_hour}>12:00 pm - 8:00 pm</span></p>
      <p><span className={styles.business_day}>Wed:</span><span className={styles.business_hour}>12:00 pm - 8:00 pm</span></p>
      <p><span className={styles.business_day}>Thu:</span><span className={styles.business_hour}>12:00 pm - 8:00 pm</span></p>
      <p><span className={styles.business_day}>Fri:</span><span className={styles.business_hour}>12:00 pm - 8:00 pm</span></p>
      <p><span className={styles.business_day}>Sat:</span><span className={styles.business_hour}>12:00 pm - 8:00 pm</span></p>
      <p><span className={styles.business_day}>Sun:</span><span className={styles.business_hour}>12:00 pm - 8:00 pm</span></p>
    </div>
  )
}

export default Hours;