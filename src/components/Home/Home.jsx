import s from "./Home.module.css";
import group from "../../assets/group.png";
import rocket from "../../assets/rocket_launch.svg";

export const Home = () => {
    return <div className={s.wrapper}>
        <h1 className={s.title}>From A to Z, your ticker to the moon lies<br /> within these 26 letters of the alphabet.<br />
            <span>Only 3 letters will win.</span></h1>
        <div className={s.playNowBlock}>
            <span className={s.playNowTitle}>The Coin That Must Be Named</span>
            <img src={group} alt="group" />
            <button className={s.playNowButton}>Play Now</button>
        </div>
        <div className={s.rocket}>
            <img src={rocket} alt="rocket" />
        </div>
    </div>;
};