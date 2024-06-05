import {
  forwardRef,
  useCallback,
  useEffect, useImperativeHandle,
  useState,
} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import cls from './style.module.css'

export const IconWithEffects = () => {


  const [activeEffects, setActiveEffects] = useState([])

  const getEffect = (effect) => {
    const exitTime = Date.now() + effect.time
    setActiveEffects((prev) => [
      ...prev,
      {
        exitTime,
        node: (
          <motion.div key={Math.random()} className={cls.num} style={{ left: Math.random() * 100 }} initial={{ y: 0, opacity: 1 }} animate={{ y: -100, opacity: 0 }} transition={{ duration: .5 }}>
            +1
          </motion.div>
        ),
      },
    ])
  }



  useEffect(() => {
    const interval = setInterval(() => {
      getEffect({
        time: 500
      })
      setTimeout(() => getEffect({
        time: 500
      }), 300)

      const now = Date.now()
      setActiveEffects((prevEffects) =>
        prevEffects.filter((effect) => effect.exitTime > now)
      ) // Раз в 700мс удаляем анимации, которые уже за экраном
    }, 500)
    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    return () => {
      setActiveEffects([])
    }
  }, [])

  return (
    <AnimatePresence>
      {activeEffects.map((effect) => effect.node)}
    </AnimatePresence>
  )
}
