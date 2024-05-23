import {useEffect, useRef} from "react";
import s from './ScrollAnimation.module.css'
import classnames from 'classnames'

const classes = new Map([
    ["fadeTop", s.fadeTop],
    ["fadeBottom", s.fadeBottom],
    ["fadeLeft", s.fadeLeft],
    ["fadeRight", s.fadeRight],
    ["fade", s.fade]
])

const observer = new IntersectionObserver((entries) => {
    if(window.scrollY !== 0){
        entries.forEach(entry => entry.isIntersecting && entry.target.classList.add(s.active))
    }
}, {
    threshold: 0.1
})

// eslint-disable-next-line react/prop-types
export const ScrollAnimation = ({children, animation, className, delay = 0}) => {
    const ref = useRef(null)
    useEffect(() => {
        observer.observe(ref.current)
    }, []);

    return (
        <div ref={ref} style={{animationDelay: delay}} className={classnames(s.animation, className, classes.get(animation))}>{children}</div>
    )
}