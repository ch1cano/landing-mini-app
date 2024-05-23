import s from "./MiniAppView.module.css";
import miniApp from "../../assets/miniApp.png";
import letters1 from "../../assets/letters1.png";
import letters2 from "../../assets/letters2.png";
import letters3 from "../../assets/letters3.png";
import starBlack from "../../assets/blackstar.svg";
import Marquee from "react-fast-marquee";
import {ScrollAnimation} from "../ScrollAnimation/ScrollAnimation.jsx";

export const MiniAppView = () => {
    return (
        <div className={s.wrapper}>
            <ScrollAnimation animation="fadeBottom" className={s.phoneBlock}>
                <h2 className={s.title}>
                    In a world where every phenomenon has
                    <br/>
                    its coin, it’s time for the community to decide
                    <br/> <span>what should come next.</span>
                </h2>
            </ScrollAnimation>
            <img className={s.starBlack} src={starBlack} alt="blackStar"/>
            <img className={s.starBlack2} src={starBlack} alt="blackStar"/>
            <img width={38} className={s.starBlack3} src={starBlack} alt="blackStar"/>
            <img width={38} className={s.starBlack4} src={starBlack} alt="blackStar"/>
            <div className={s.container}>
                <ScrollAnimation animation="fade" className={s.phoneBlock}>
                    <div className={s.shadowBg}></div>
                    <div className={s.phoneBlockContent}>
                        <div className={s.shodow}>
                            <div className={s.bgCloud}>
                                <img className={s.phone} height={757} src={miniApp} alt="minApp"/>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
            <div className={s.letters}>
                <Marquee
                    gradient={window.innerWidth > 700}
                    gradientColor="transparent"
                    speed={100}
                    play={true}
                    style={{display: "flex", alignItems: "center"}}
                    direction="left">
                    <img src={letters1} className={s.letters_img} height={93} alt="letters1" width={"100%"}/>
                    <img src={letters1} className={s.letters_img} height={93} alt="letters1" width={"100%"}/>
                    <img src={letters1} className={s.letters_img} height={93} alt="letters1" width={"100%"}/>
                </Marquee>
                <Marquee
                    gradient={window.innerWidth > 700}
                    gradientColor="black"
                    speed={100}
                    play={true}
                    style={{display: "flex", alignItems: "center"}}
                    direction="right">
                    <img src={letters2} className={s.letters_img} height={93} alt="letters1" width={"100%"}/>
                    <img src={letters2} className={s.letters_img} height={93} alt="letters1" width={"100%"}/>
                    <img src={letters2} className={s.letters_img} height={93} alt="letters1" width={"100%"}/>
                </Marquee>
                <Marquee
                    gradient={window.innerWidth > 700}
                    gradientColor="black"
                    speed={100}
                    play={true}
                    style={{display: "flex", alignItems: "center"}}
                    direction="left">
                    <img src={letters3} className={s.letters_img} height={93} alt="letters1" width={"100%"}/>
                    <img src={letters3} className={s.letters_img} height={93} alt="letters1" width={"100%"}/>
                    <img src={letters3} className={s.letters_img} height={93} alt="letters1" width={"100%"}/>
                </Marquee>
            </div>
        </div>
    );
};
