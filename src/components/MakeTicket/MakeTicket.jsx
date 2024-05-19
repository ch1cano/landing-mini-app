import s from "./MakeTicket.module.css";
import question from "../../assets/quest.png";
import left from "../../assets/arrowLeft.svg";
import right from "../../assets/arrowRight.svg";
import star from "../../assets/greenStar.svg";

export const MakeTicket = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.title}>Make Your Ticker Win </div>
			<div className={s.cards}>
				<div className={s.card}>
					<div className={s.cardHeader}>
						<img src={question} alt="???" />
					</div>
					<div className={s.cardItem}>
						Create a team around your idea, and make it to the top
					</div>
					<div className={s.cardBtn}>
						<button>Create a Team</button>
					</div>
				</div>
			</div>
			<div className={s.swiper}>
				<div className={s.arrow}>
					<img src={left} />
				</div>
				<div className={s.arrow}>
					<img src={right} />
				</div>
				<img className={s.bigStar} src={star} alt="" />
				<img width={66} className={s.smallStar} src={star} alt="" />
			</div>
		</div>
	);
};
