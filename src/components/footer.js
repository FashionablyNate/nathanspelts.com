import React from "react"
import { Link } from "gatsby"

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col text-center">
                                <a className="mx-2" aria-label="GitLab" target="_blank" rel="noopener noreferrer" href="https://gitlab.com/nspelts">
                                <svg className="main-social-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 500 500">
                                    <path id="Imported Path"
                                            fill="true" stroke="black" stroke-width="1"
                                            d="M 467.60,197.70
                                            C 467.60,197.70 340.50,197.70 340.50,197.70
                                                340.50,197.70 395.10,29.60 395.10,29.60
                                                397.90,21.00 410.10,21.00 413.00,29.60
                                                413.00,29.60 467.60,197.70 467.60,197.70
                                                467.60,197.70 467.60,197.70 467.60,197.70 Z
                                            M 467.60,197.70
                                            C 467.60,197.70 467.60,197.70 467.60,197.70
                                                467.60,197.70 495.20,282.50 495.20,282.50
                                                497.70,290.20 495.00,298.70 488.40,303.50
                                                488.40,303.50 249.90,476.80 249.90,476.80
                                                249.90,476.80 467.60,197.70 467.60,197.70
                                                467.60,197.70 467.60,197.70 467.60,197.70 Z
                                            M 32.10,197.70
                                            C 32.10,197.70 159.20,197.70 159.20,197.70
                                                159.20,197.70 104.60,29.60 104.60,29.60
                                                101.80,21.00 89.60,21.00 86.70,29.60
                                                86.70,29.60 32.10,197.70 32.10,197.70
                                                32.10,197.70 32.10,197.70 32.10,197.70 Z
                                            M 32.10,197.70
                                            C 32.10,197.70 32.10,197.70 32.10,197.70
                                                32.10,197.70 4.50,282.50 4.50,282.50
                                                2.00,290.20 4.70,298.70 11.30,303.50
                                                11.30,303.50 249.80,476.80 249.80,476.80
                                                249.80,476.80 32.10,197.70 32.10,197.70
                                                32.10,197.70 32.10,197.70 32.10,197.70 Z
                                            M 249.90,476.80
                                            C 249.90,476.80 249.90,476.80 249.90,476.80
                                                249.90,476.80 340.60,197.70 340.60,197.70
                                                340.60,197.70 159.20,197.70 159.20,197.70
                                                159.20,197.70 249.90,476.80 249.90,476.80
                                                249.90,476.80 249.90,476.80 249.90,476.80 Z" />
                                    </svg>
                                </a>
                                <a className="mx-2" aria-label="GitHub" target="_blank" rel="noopener noreferrer" href="https://github.com/FashionablyNate">
                                    <svg className="main-social-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                </a>
                                <a className="mx-2" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nathanspelts/">
                                    <svg className="main-social-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                </a>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col text-center">
                                <p><small>Copyright © {new Date().getFullYear()} Nathan Spelts. Site source on <a target="_blank" rel="noopener noreferrer" href="https://github.com/FashionablyNate/nathanspelts.com">GitHub</a>.</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer