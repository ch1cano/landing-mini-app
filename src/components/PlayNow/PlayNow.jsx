import s from "./PlayNow.module.css";
import tap from "../../assets/tapPlus.png";
import x from "../../assets/x.png";
import question from "../../assets/question.png";
import abc from "../../assets/abc.png";

export const PlayNow = () => {
	return (
		<div className={s.wrapper}>
			<h1 className={s.title}>Play. Name. Claim.</h1>
			<div className={s.cardsBlock}>
				<div className={s.card}>
					<p className={s.cardTitle}>1</p>
					<div className={s.content}>
						<img src={abc} alt="abc" />
					</div>
					<span className={s.description}>Choose your letter</span>
				</div>
				<div className={s.card}>
					<p className={s.cardTitle}>2</p>
					<div className={s.content}>
						<img src={x} alt="x" />
						<img src={tap} alt="add" />
					</div>
					<span className={s.description}>
						Push it to the top of the
						<br /> leaderboard
					</span>
				</div>
				<div className={s.card}>
					<p className={s.cardTitle}>3</p>
					<div className={s.content}>
						<img src={question} alt="add" />
					</div>
					<span className={s.description}>
						Define the crypto you
						<br /> will hold
					</span>
				</div>
			</div>
			<button className={s.button}>Play Now</button>
		</div>
	);
};
