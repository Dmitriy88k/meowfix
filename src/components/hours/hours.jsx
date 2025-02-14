import styles from "./hours.module.css"

const Hours = () => {
  return (
    <div className={styles.business_hours}>
      <h1>Hours</h1>
      <p>Mon 12:00 pm - 8:00 pm</p>
      <p>Tue 12:00 pm - 8:00 pm</p>
      <p>Wed 12:00 pm - 8:00 pm</p>
      <p>Thu 12:00 pm - 8:00 pm</p>
      <p>Fri 12:00 pm - 8:00 pm</p>
      <p>Sat 12:00 pm - 8:00 pm</p>
      <p>Sun 12:00 pm - 8:00 pm</p>
    </div>
  )
}

export default Hours;