import {slugger} from "./index.js"
import log from "@ajar/marker"

log.magenta(slugger("hello", "i", "am", "the", "slugger"))
log.cyan(slugger("and","i","am","working"))