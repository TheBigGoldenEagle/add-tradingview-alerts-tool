import consola, {Consola} from "consola"
import kleur from "kleur";

const DEFAULT_LEVEL = 3

const log = consola.create({level: Number(process.env.ATAT_LOG_LEVEL) || DEFAULT_LEVEL})

export const logLogInfo = () => {
    log.info(`Current Verbosity level: ${kleur.yellow(log.level)} (you can specify '--verbosity 5' for maximum debugging)`)
}

export default log;
