import s from "./PlayNow.module.css";
import tap from "../../assets/tapPlus.png";
import x from "../../assets/x.png";
import question from "../../assets/question.png";
import abc from "../../assets/abc.png";
import starBlue from "../../assets/blueStar.svg";
import starGreen from "../../assets/greenStar.svg";
import starAzure from "../../assets/azure-star.svg";
import classNames from "classnames";
import {ScrollAnimation} from "../ScrollAnimation/ScrollAnimation.jsx";

export const PlayNow = () => {
    return (
        <div className={s.wrapper}>
            <ScrollAnimation animation={"fadeBottom"} delay={'200ms'}>
                <h1 className={s.title}>Play. Name. Claim.</h1>
            </ScrollAnimation>
            <div className={s.cardsBlock}>
                <ScrollAnimation animation={"fadeLeft"} className={s.card}>
                    <p className={s.cardTitle}>1</p>
                    <div className={s.content}>
                        <img src={abc} alt="abc"/>
                    </div>
                    <span className={s.description}>Choose your letter</span>
                </ScrollAnimation>
                <ScrollAnimation animation={"fadeLeft"} delay={"300ms"} className={s.card}>
                    <p className={s.cardTitle}>2</p>
                    <div className={s.content}>
                        <img src={x} alt="x"/>
                        <img src={tap} alt="add"/>
                    </div>
                    <span className={s.description}>
						Push it to the top of the
						<br/> leaderboard
					</span>
                </ScrollAnimation>
                <ScrollAnimation animation={"fadeLeft"} delay={"600ms"} className={s.card}>
                    <p className={s.cardTitle}>3</p>
                    <div className={s.content}>
                        <img src={question} alt="add"/>
                    </div>
                    <span className={s.description}>
						Define the crypto you
						<br/> will hold
					</span>
                </ScrollAnimation>
            </div>
            <button className={s.button}>Play Now</button>
            <div className={s.wrapperStars}>
                <img className={classNames(s.blueStar, "pulse")} src={starBlue} alt=""/>
                <img className={classNames(s.greenStar, "pulse-duration-1")} width={66} src={starGreen} alt=""/>
                <img className={classNames(s.greenStar2, "pulse-duration-3")} width={66} src={starGreen} alt=""/>
                <img className={classNames(s.blueStar2, "pulse")} src={starBlue} alt=""/>
                <img className={classNames(s.starAzure, "pulse-duration-1")} src={starAzure} alt="" width={66}/>
                <img className={classNames(s.starAzure2, "pulse-duration-3")} src={starAzure} alt="" width={46}/>
                <img className={classNames(s.starAzure3, "pulse")} src={starAzure} alt="" width={46}/>
            </div>
        </div>
    );
};
