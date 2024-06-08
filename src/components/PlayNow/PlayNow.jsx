import s from "./PlayNow.module.css";
import tap from "../../assets/tapPlus.png";
import x from "../../assets/x.png";
import abc from "../../assets/abc.png";
import starBlue from "../../assets/blueStar.svg";
import starGreen from "../../assets/greenStar.svg";
import starAzure from "../../assets/azure-star.svg";
import classNames from "classnames";
import { ScrollAnimation } from "../ScrollAnimation/ScrollAnimation.jsx";
import { Reel } from "../Reel/Reel";
import { IconWithEffects } from "../IconWithEffects/IconWithEffects";

function shuffle(array) {
    let currentIndex = array.length;
    const copy = JSON.parse(JSON.stringify(array));
    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [copy[currentIndex], copy[randomIndex]] = [
            copy[randomIndex], copy[currentIndex]];
    }
    return copy;
}

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const items = Array.from({ length: 50 }).map(item => ({
    title: letters[Math.floor(Math.random() * letters.length)],
    isTarget: false
}));

export const PlayNow = () => {

    return (
        <div className={s.wrapper}>
            <ScrollAnimation animation={"fadeBottom"} delay={'200ms'}>
                <div className={s.title}>The movement begins with a single letter.<br /> <span>Start your team and see the vibes spreading like a wildfire.</span></div>
            </ScrollAnimation>
            <div className={s.cardsBlock}>
                <ScrollAnimation animation={"fadeLeft"} className={s.card}>
                    <p className={s.cardTitle}>1</p>
                    <div className={s.content}>
                        <img src={abc} alt="abc" />
                    </div>
                    <span className={s.description}>Choose your letter</span>
                </ScrollAnimation>
                <ScrollAnimation animation={"fadeLeft"} delay={"300ms"} className={s.card}>
                    <p className={s.cardTitle}>2</p>
                    <div className={s.content}>
                        <img src={x} alt="x" />
                        <div className={s.tap}>
                            <IconWithEffects />
                            <img src={tap} className={s.tap} alt="add" />
                        </div>
                    </div>
                    <span className={s.description}>
                        Boost it to the top
                    </span>
                </ScrollAnimation>
                <ScrollAnimation animation={"fadeLeft"} delay={"600ms"} className={s.card}>
                    <p className={s.cardTitle}>3</p>
                    <div className={s.content}>
                        <Reel items={[...items, { title: 'x', isTarget: true }]} />
                        <Reel items={[...shuffle(items), { title: 'y', isTarget: true }]} duration={3500} letterColor="#00F0FF" />
                        <Reel items={[...shuffle(items), { title: 'z', isTarget: true }]} duration={5000} letterColor="#9747FF" />
                    </div>
                    <span className={s.description}>
                        Name and claim the<br />
                        new token
                    </span>
                </ScrollAnimation>
            </div>
            <button className={s.button}>Play Now</button>
            <div className={s.wrapperStars}>
                <img className={classNames(s.blueStar, "pulse")} src={starBlue} alt="" />
                <img className={classNames(s.greenStar, "pulse-duration-1")} width={66} src={starGreen} alt="" />
                <img className={classNames(s.greenStar2, "pulse-duration-3")} width={66} src={starGreen} alt="" />
                <img className={classNames(s.blueStar2, "pulse")} src={starBlue} alt="" />
                <img className={classNames(s.starAzure, "pulse-duration-1")} src={starAzure} alt="" width={66} />
                <img className={classNames(s.starAzure2, "pulse-duration-3")} src={starAzure} alt="" width={46} />
                <img className={classNames(s.starAzure3, "pulse")} src={starAzure} alt="" width={46} />
            </div>
        </div>
    );
};
