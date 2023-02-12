import React from 'react'

export default function Modal({isCorrect, turn, solution}) {
  return (
    <div className="modal">
        {isCorrect && (
            <div>
                <h1>Hai vinto!</h1>
                <p className='solution'>{solution}</p>
                <p>Hai trovato la soluzione in {turn} tentativi!</p>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>Tentativi finiti!</h1>
                <p className='solution'>{solution}</p>
                <p>Riprova con una nuova parola</p>
            </div>
        )}
    </div>
  )
}
