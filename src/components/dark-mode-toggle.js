import React from "react"
import useDarkMode from "use-dark-mode"

const DarkModeToggle = () => {
    const darkMode = useDarkMode(true)

    return (
        <div className="d-flex align-items-center">
            <div className="mx-3">
                <span className="main-bottom-tooltip d-flex">
                    <svg id="main-sunglasses-icon" className="main-social-svg" onClick={darkMode.disable} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <path id="Imported Path" fill="true" stroke="black" strokeWidth="1"
                                d="M 264.00,480.00
                                C 135.87,480.00 32.00,376.13 32.00,248.00
                                    32.00,154.00 86.00,69.72 169.61,33.33
                                    171.56,32.47 173.73,32.00 176.00,32.00
                                    184.84,32.00 192.00,39.16 192.00,48.00
                                    192.00,50.27 191.53,52.43 190.67,54.39
                                    181.07,76.43 176.00,104.66 176.00,136.00
                                    176.00,246.28 265.72,336.00 376.00,336.00
                                    407.34,336.00 435.57,330.93 457.61,321.33
                                    459.56,320.47 461.73,320.00 464.00,320.00
                                    472.84,320.00 480.00,327.16 480.00,336.00
                                    480.00,338.27 479.53,340.43 478.67,342.39
                                    442.28,426.00 358.00,480.00 264.00,480.00 Z" />
                    </svg>
                    <svg id="main-sun-icon" className="main-social-svg" onClick={darkMode.enable} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24"><path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"/></svg>
                    <span className="main-bottom-tooltip-text d-sm-block d-none"><span id="main-dark-mode-tooltip"></span></span>
                </span>
            </div>
        </div>
    )
}

export default DarkModeToggle