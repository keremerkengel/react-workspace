import React from 'react'

function Teams_Player({playerName, playerNumber}) {
//   const {playerName, playerNumber} = props;
  return (
    <div style={{border: "3px solid orange", padding: "10px"}}>
      Oyuncu Adı: {playerName} <br />
       Oyuncu Numarası: {playerNumber}
    </div>
  )
}

export default Teams_Player
