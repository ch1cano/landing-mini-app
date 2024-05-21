import s from "./PlayNow.module.css";
import tap from "../../assets/tapPlus.png";
import x from "../../assets/x.png";
import question from "../../assets/question.png";
import abc from "../../assets/abc.png";
import starBlue from "../../assets/blueStar.svg";
import starGreen from "../../assets/greenStar.svg";
import starAzure from "../../assets/azure-star.svg";

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
			<div className={s.wrapperStars}>
				<img className={s.blueStar} src={starBlue} alt="" />
				<img className={s.greenStar} width={66} src={starGreen} alt="" />
				<img className={s.greenStar2} width={66} src={starGreen} alt="" />|
				<img className={s.blueStar2} src={starBlue} alt="" />
				starAzure
				<img className={s.starAzure} src={starAzure} alt="" width={66} />
				<img className={s.starAzure2} src={starAzure} alt="" width={46} />
				<img className={s.starAzure3} src={starAzure} alt="" width={46} />
			</div>
		</div>
	);
};
