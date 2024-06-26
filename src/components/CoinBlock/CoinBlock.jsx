import s from "./CoinBlock.module.css";
import big from "../../assets/bigLogo.png";
import small from "../../assets/smallLogo.png";
import bg from "../../assets/bg.png";
import top from "../../assets/topCard.svg";
import bot from "../../assets/botCard.svg";
import star from "../../assets/greenStar.svg";
import starBlue from "../../assets/blueStar.svg";
import { useState } from "react";
import classNames from "classnames";
import { ScrollAnimation } from "../ScrollAnimation/ScrollAnimation.jsx";

export const CoinBlock = () => {
    const [letters, setLetters] = useState(["?", "?", "?"]);
    const [alphabet, setAlphabet] = useState(
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    );

    const changeLetter = (index) => {
        setLetters((prevLetters) => {
            const newLetters = [...prevLetters];
            const newAlphabet = [...alphabet];
            const randomIndex = Math.floor(Math.random() * newAlphabet.length);
            newLetters[index] = newAlphabet[randomIndex];
            newAlphabet.splice(randomIndex, 1);
            setAlphabet(newAlphabet);
            return newLetters;
        });
    };
    return (
        <div className={s.wrapper}>
            <div className={s.info}>
                <p>HOW IT WORKS</p>
                <span>X</span>
                <span>TG</span>
            </div>
            <ScrollAnimation className={s.wrapper} animation="fadeBottom" delay="500ms">
                <div className={s.header}>
                    <img className={s.logoBig} src={big} height={155} alt="???" />
                    <img className={s.logoSmal} src={small} height={155} alt="???" />
                </div>
                <div className={s.bg}>
                    <img src={bg} height={293} alt="???" />
                </div>
                <div className={s.card}>
                    <div className={s.cardsHeader}>
                        {letters.map((letter, index) => (
                            <div className={s.cardHeader} key={index}>
                                <img className={s.top} src={top} alt="" />
                                <p className={s.count} onClick={() => changeLetter(index)}>
                                    {letter}
                                </p>
                                <img className={s.bot} src={bot} alt="" />
                            </div>
                        ))}
                    </div>

                    <div className={s.cardItem}>
                        The @namelesscoin will be airdropped to the winners and $XYZ holders when the letter competition is finished.

                    </div>
                    <div className={s.cardBtn}>
                        <button>
                            Enter the Game
                        </button>
                    </div>
                    <div className={s.forMedia}>
                        <img className={classNames(s.bigStar, "pulse-duration-5")} src={star} alt="" />

                        <img width={66} className={classNames(s.smallStar, "pulse-duration-1")} src={star} alt="" />

                        <img className={classNames(s.blueStar, "pulse")} src={starBlue} alt="" />
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    );
};
