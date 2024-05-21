import s from "./MiniAppView.module.css";
import miniApp from "../../assets/miniApp.png";
import letters1 from "../../assets/letters1.png";
import letters2 from "../../assets/letters2.png";
import letters3 from "../../assets/letters3.png";
import starBlack from "../../assets/blackstar.svg";
import starGreen from "../../assets/greenStar.svg";
import starAzure from "../../assets/azure-star.svg";
import starBlue from "../../assets/blueStar.svg";
import Marquee from "react-fast-marquee";

export const MiniAppView = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.title}>
				In a world where every phenomenon has
				<br />
				its coin, it’s time for the community to decide
				<br /> <span>what should come next.</span>
			</div>
			<div className={s.phoneBlock}>
				<div className={s.shadowBg}></div>
				<div className={s.phoneBlockContent}>
					<img className={s.starBlack} src={starBlack} alt="blackStar" />
					<img className={s.starBlack2} src={starBlack} alt="blackStar" />
					<img width={38} className={s.starBlack3} src={starBlack} alt="blackStar" />
					<img width={38} className={s.starBlack4} src={starBlack} alt="blackStar" />
					<div className={s.shodow}>
						<div className={s.bgCloud}>
							<img className={s.phone} src={miniApp} alt="minApp" />
						</div>
					</div>
				</div>
			</div>
			<div className={s.letters}>
				<Marquee
					gradient={true}
					gradientColor="black"
					speed={100}
					play={true}
					style={{ display: "flex", alignItems: "center", gap: 50 }}
					direction="left">
					<img src={letters1} alt="letters1" width={"100%"} />
					<img src={letters1} alt="letters1" width={"100%"} />
				</Marquee>
				<Marquee
					gradient={true}
					gradientColor="black"
					speed={100}
					play={true}
					style={{ display: "flex", alignItems: "center", gap: 50 }}
					direction="right">
					<img src={letters2} alt="letters1" width={"100%"} />
					<img src={letters2} alt="letters1" width={"100%"} />
				</Marquee>
				<Marquee
					gradient={true}
					gradientColor="black"
					speed={100}
					play={true}
					style={{ display: "flex", alignItems: "center", gap: 50 }}
					direction="left">
					<img src={letters3} alt="letters1" width={"100%"} />
					<img src={letters3} alt="letters1" width={"100%"} />
				</Marquee>
			</div>
		</div>
	);
};
