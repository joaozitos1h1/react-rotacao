import './App.css'
import Conteudo from './components/Conteudo'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import styled from 'styled-components'

  const Spinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 4px solid black;
  border-top: 4px solid red;
  border-radius: 50%;
`
function App() {
  const [Carregando, setCarregando] = useState(true);

  useEffect(() =>{
    const timer = setTimeout(() => {
      setCarregando(false)
    }, 5000)
    return () => clearTimeout(timer)
    }, [])
    
    return (
      
        <div className="center">
             {Carregando ? (
             <Spinner
                animate={{rotate:360}}
                transition={{duration: 0.5, repeat: Infinity, ease: 'linear'}}
        />
        ):(
           <Conteudo visivel={!Carregando}/>
           )
            }

         </div>

       
  )
}

export default App
