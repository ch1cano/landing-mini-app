import s from './MarqueeSlider.module.css'
import 'swiper/css'
import { useState } from 'react'
import classNames from 'classnames'
import { useEffect } from 'react'

export const MarqueeSlider = ({ items }) => {
    const [index, setIndex] = useState(2)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => prev + 1)
            set
        }, 1500)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className={s.wrapper}>
            <div className={s.track}>
                {items.slice(index - 3, index + 4).map((item, i) => <div className={classNames(s.item, {
                    [s.active]: i === index,
                    [s.prev]: index === i - 1,
                    [s.next]: index === i + 1
                })}>{item}</div>)}
            </div>
        </div>
    )
}