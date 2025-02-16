import MainPic from "../../assets/main.png"
import styles from "./mainPage.module.css"

const MainPage = () => {
    return (
    <div className={styles.main_phone_image}>            
        <img src={MainPic} alt=""/>
    </div>
    )
}

export default MainPage;