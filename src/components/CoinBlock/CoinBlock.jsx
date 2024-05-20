import s from "./CoinBlock.module.css";
import big from "../../assets/bigLogo.png";
import small from "../../assets/smallLogo.png";
import bg from "../../assets/bg.png";
import cube from "../../assets/cube.png";
import top from "../../assets/topCard.svg";
import bot from "../../assets/botCard.svg";
import star from "../../assets/greenStar.svg";
import starBlue from "../../assets/blueStar.svg";
import { useState } from "react";

export const CoinBlock = () => {
	const [letter, setLetter] = useState("?");
	const getRandomLetter = () => {
		const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		const randomIndex = Math.floor(Math.random() * alphabet.length);
		return alphabet[randomIndex];
	};

	const changeLetter = () => {
		const newLetter = getRandomLetter();
		setLetter(newLetter);
	};
	return (
		<div className={s.wrapper}>
			<div className={s.info}>
				<p>HOW IT WORKS</p>
				<p>X</p>
				<p>TG</p>
			</div>
			<div className={s.header}>
				<img className={s.logoBig} src={big} alt="???" />
				<img className={s.logoSmal} src={small} alt="???" />
			</div>
			<div className={s.bg}>
				<img src={bg} alt="???" />
			</div>
			<div className={s.card}>
				<div className={s.cardsHeader}>
					<div className={s.cardHeader}>
						<img className={s.top} src={top} alt="" />
						<p className={s.count} onClick={changeLetter}>
							{letter}
						</p>
						<img className={s.bot} src={bot} alt="" />
					</div>
					<div className={s.cardHeader}>
						<img className={s.top} src={top} alt="" />
						<p className={s.count} onClick={changeLetter}>
							{letter}
						</p>
						<img className={s.bot} src={bot} alt="" />
					</div>
					<div className={s.cardHeader}>
						<img className={s.top} src={top} alt="" />
						<p className={s.count} onClick={changeLetter}>
							{letter}
						</p>
						<img className={s.bot} src={bot} alt="" />
					</div>
				</div>

				<div className={s.cardItem}>
					The coin with the ticker of the top 3 letters will be listed and
					airdropped to XYZ token holders.
				</div>
				<div className={s.cardBtn}>
					<button>
						<img src={cube} alt="cube" />
						BUY $??? (SOON)
					</button>
				</div>
				<div className={s.forMedia}>
					<img className={s.bigStar} src={star} alt="" />

					<img width={66} className={s.smallStar} src={star} alt="" />

					<img className={s.blueStar} src={starBlue} alt="" />
				</div>
			</div>
		</div>
	);
};
