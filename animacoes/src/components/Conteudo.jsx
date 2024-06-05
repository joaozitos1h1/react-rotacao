import {motion} from 'framer-motion'

export default function Conteudo(visivel){
    return(
        <motion.div
            initial={{opacity: 0, y:50}}//estado inicial da animacao
            animate={{opacity: 1, y: 0}}//
            exit={{opacity: 0, y: -50}}//
            transition={{duration: 0.5}}//
        >
            {visivel && <h1>conteudo</h1>}
        </motion.div>
    )
}