import s from "./MiniAppView.module.css";
import miniApp from "../../assets/miniApp.png";
import letters1 from "../../assets/letters1.png";
import letters2 from "../../assets/letters2.png";
import letters3 from "../../assets/letters3.png";

export const MiniAppView = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.title}>
				In a world where every phenomenon has<br />its coin, it’s time for the
				community to decide<br /> <span>what should come next.</span>
			</div>
			<div className={s.phoneBlock}>
				<img src={miniApp} alt="minApp" />
			</div>
			<div className={s.letters}>
				<img src={letters1} alt="letters1" width={"100%"} />
				<img src={letters2} alt="letters1" width={"100%"} />
				<img src={letters3} alt="letters1" width={"100%"} />
			</div>
		</div>
	);
};
