import s from "./Home.module.css";
import group from "../../assets/group.png";
import rocket from "../../assets/rocket_launch.svg";
import x from "../../assets/x.svg";
import bg from "../../assets/bg.png";
import top from "../../assets/topCard.svg";
import bot from "../../assets/botCard.svg";
import click from "../../assets/cloudclick.png";
import cloudLeft from "../../assets/cloudLeft.svg";
import cloudRight from "../../assets/cloudRight.svg";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";

export const Home = () => {
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
			<h1 className={s.title}>
				From A to Z, your ticker to the moon lies
				<br /> within these 26 letters of the alphabet.
				<br />
				<span>Only 3 letters will win.</span>
			</h1>
			<img className={s.cloudLeft} src={cloudLeft} alt="group" />
			<img className={s.cloudRight} src={cloudRight} alt="group" />
			<div className={s.questionWrap}>
				{letters.map((letter, index) => (
					<div className={s.card} key={index}>
						<img className={s.top} src={top} alt="" />
						<p className={s.count} onClick={() => changeLetter(index)}>
							{letter}
						</p>
						<img className={s.bot} src={bot} alt="" />
					</div>
				))}
				<img className={s.cloudClick} src={click} alt="group" />
			</div>
			<div className={s.bg}>
				<img src={bg} alt="group" />
			</div>
			<div className={s.playNowWrap}>
				<div className={s.playNowBlock}>
					<span className={s.playNowTitle}>The Coin That Must Be Named</span>
					<img src={group} alt="group" />
					<button className={s.playNowButton}>Play Now</button>
				</div>
				<div className={s.rocket}>
					<Parallax speed={-10}>
						<img src={rocket} alt="rocket" />
					</Parallax>
				</div>
			</div>
			<div className={s.info}>
				<img src={x} alt="x" />
				<div className={s.infoText}>
					<p>HOW IT WORKS</p>
					<p>X</p>
					<p>TG</p>
				</div>
			</div>
		</div>
	);
};
