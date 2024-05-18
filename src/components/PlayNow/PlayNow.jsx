import s from './PlayNow.module.css';

export const PlayNow = () => {
    return <div className={s.wrapper}>
        <h1 className={s.title}>Play. Name. Claim.</h1>
        <div className={s.cardsBlock}>
            <div className={s.card}>
                <p className={s.cardTitle}>1</p>
                <div className={s.content}></div>
                <span className={s.description}>
                    Choose your letter
                </span>
            </div>
            <div className={s.card}>
                <p className={s.cardTitle}>2</p>
                <div className={s.content}></div>
                <span className={s.description}>
                    Push it to the top of the leaderboard
                </span>
            </div>
            <div className={s.card}>
                <p className={s.cardTitle}>3</p>
                <div className={s.content}></div>
                <span className={s.description}>
                    Define the crypto you will hold
                </span>
            </div>
        </div>
        <button className={s.button}>Play Now</button>
    </div>;
};