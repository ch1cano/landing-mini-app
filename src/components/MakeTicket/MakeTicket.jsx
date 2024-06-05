import { Swiper, SwiperSlide } from 'swiper/react';
import s from "./MakeTicket.module.css";

import question from "../../assets/quest.png";
import left from "../../assets/arrowLeft.svg";
import right from "../../assets/arrowRight.svg";
import star from "../../assets/greenStar.svg";
import avatars from "../../assets/avatars.png";
import hop from "../../assets/hop.png";
import hrt from "../../assets/hrt.png";
import obm from "../../assets/obm.png";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useRef } from "react";
import { ScrollAnimation } from "../ScrollAnimation/ScrollAnimation.jsx";


const SLIDE_MOCK = [
    {
        id: 1,
        letters: hop,
        title: "Hopium.",
        subTitle: "Sponsor global leapfrog competitions",
        description: "Hop on our team! We`re going to be sponsoring the wildest green leapfrog competitions around the globe.",
        avatars: avatars,
        count: "6039"
    },
    {
        id: 2,
        letters: hrt,
        title: "HeartToken.",
        subTitle: "Support cardiovascular health initiatives",
        description: "Stand with us to promote cardiovascular health and support initiatives that keep our hearts strong and healthy, making a real difference.",
        avatars: avatars,
        count: "1595"
    },
    {
        id: 3,
        letters: obm,
        title: "WHY Coin.",
        subTitle: "We also know what",
        description: "We ask the big questions and make the big decisions. Join WHY Coin and shape the future with your vote.",
        avatars: avatars,
        count: "3333"
    }
];

export const MakeTicket = () => {

    const swiperRef = useRef(null);

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <ScrollAnimation animation={"fade"} className={s.wrapper}>
            <ScrollAnimation animation="fadeTop">
                <h2 className={s.titleBlock}>Make Your Ticker Win</h2>
            </ScrollAnimation>
            <div className={s.cards}>
                <Swiper centeredSlides centeredSlidesBounds wrapperClass={s.sliderWrapper} slidesPerView={'auto'} ref={swiperRef} style={{ padding: '20px' }} spaceBetween={20}>
                    <SwiperSlide className={s.slide} style={{ height: 'unset' }}>
                        <div className={s.card}>
                            <div className={s.cardHeader}>
                                <img src={question} className={s.question} alt="???" />
                            </div>
                            <div className={s.cardItem}>
                                Create a team around your idea, and make it to the top
                            </div>
                            <div className={s.cardBtn}>
                                <button>Create a Team</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    {SLIDE_MOCK.map((slide) =>
                        <SwiperSlide className={s.slide} style={{ height: 'unset' }}
                            key={slide.id}>
                            <div className={s.cardSlide}>
                                <div className={s.lettersBlock}>
                                    <img src={slide.letters} className={s.letters} alt='letters' />
                                </div>
                                <div className={s.textBlock}>
                                    <span className={s.title}>{slide.title}<br />{slide.subTitle}</span>
                                    <span className={s.description}>{slide.description}</span>
                                </div>
                                <div className={s.bottomBlock}>
                                    <div className={s.avatarsBlock}>
                                        <img src={slide.avatars} className={s.avatars} alt='avatars' />
                                        <span className={s.count}>{slide.count}+</span>
                                    </div>
                                    <button className={s.joinBtn}>Join team</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                    <SwiperSlide className={s.slide} style={{ height: 'unset' }}>
                        <div className={s.cardSlideEnd}>
                            <span>Think you`ve got a better idea of what this coin could be?</span>
                            <span>Get a team boost in the app and see your idea featured in this section. </span>
                            <div className={s.btnBlock}>
                                <button className={s.createBtn}>Create a team</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={s.navigation}>
                <div onClick={goPrev} className={s.arrow}>
                    <img src={left} />
                </div>
                <div onClick={goNext} className={s.arrow}>
                    <img src={right} />
                </div>
                <img width={66} className={s.smallStar} src={star} alt="" />
            </div>
            <img className={s.bigStar} src={star} alt="" />
        </ScrollAnimation >
    );
};
