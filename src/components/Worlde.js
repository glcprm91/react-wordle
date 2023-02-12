import React, { useEffect, useState } from 'react'
import useWorlde from '../hooks/useWorlde'
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'


export default function Worlde({solution}) {
  const {currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys} = useWorlde(solution)
  const [showModal, setShowModal] = useState(false)
  useEffect(() =>{
    window.addEventListener('keyup', handleKeyup)

    if(isCorrect){
        setTimeout(() => setShowModal(true), 2000)
        window.removeEventListener('keyup', handleKeyup)
    }

    if(turn > 5) {
        setTimeout(() => setShowModal(true), 2000)
        window.removeEventListener('keyup', handleKeyup)
    }

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect, turn])

  return (
    <div> 
        <Grid currentGuess={currentGuess} guesses ={guesses} turn = {turn}></Grid>
        <Keypad usedKeys={usedKeys}/>
        {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
    </div>
   
  )
}
