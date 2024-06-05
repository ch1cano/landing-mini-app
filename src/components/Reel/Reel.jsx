import { useEffect } from 'react'
import cls from './Reel.module.css'
import { useRef } from 'react'
import { useState } from 'react';

export const Reel = ({ items, duration, letterColor = "linear-gradient(45deg, #00f0ff, #00ff75)", timeout = 0 }) => {
    const ref = useRef();
    const wrapperRef = useRef()
    const [coordinate, setCoordinate] = useState(0)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const handler = () => {
            setCoordinate(ref.current.offsetTop)
        }
        if (ref.current && inView) {
            let timer = setTimeout(handler, timeout)
            return () => {
                clearTimeout(timer)
            }
        }
    }, [inView])

    useEffect(() => {
        const observer = new IntersectionObserver((el) => {
            setInView(el[0].isIntersecting)
        })

        observer.observe(wrapperRef.current)

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <div className={cls.wrapper} ref={wrapperRef}>
            <div className={cls.scroller} style={{ transform: `translateY(-${coordinate - 10}px)`, transitionDuration: duration ? `${duration}ms` : undefined }}>
                {items.map((item, i) => (
                    <div key={i} className={cls.scroller__item} style={{ background: letterColor, backgroundClip: 'text', WebkitBackgroundClip: 'text' }} ref={item.isTarget ? ref : undefined}>
                        {item.title}
                    </div>
                ))}
            </div>
        </div >
    )
}