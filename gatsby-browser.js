// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "bootstrap/dist/css/bootstrap.min.css"
import "./src/styles/normalize.css"
// custom CSS styles
import "./src/styles/main.css"
import "./src/styles/fonts.css"
import "./src/styles/webgl.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

import customWrapPageElement from "./src/components/wrap-page-element"
export const wrapPageElement = customWrapPageElement