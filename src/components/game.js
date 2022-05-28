import React from "react"
import { main } from "../Particle-Simulator/src/main"
import { useInView } from "react-intersection-observer"

const Game = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px',
    })
    if (inView) {
        return (
            <div ref={ref}>
                {children}
                {main()}
            </div>
        )
    } else {
        return (
            <div ref={ref}>
                {children}
            </div>
        )
    }
}

export default Game