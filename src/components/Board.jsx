
import { useState } from 'react'
import Button from './Button'

const Board = () => {

  const [square, setSquare] = useState(Array(9).fill(null))
  const [nextSqr, setNextSqr] = useState(true)

  const handelClick = (i) => {

    // it check that it a square have already a value then return imegiaty that no one again on this /that no change the value
    // it prevent the use to not change the value once it is clicked

    if (square[i]) {
      return;
    }

    const sqrValue = square.slice()
    if (nextSqr) {
      sqrValue[i] = "x"
    }
    else {
      sqrValue[i] = "0"
    }


    setSquare(sqrValue)
    setNextSqr(!nextSqr)

  }

  return (
    <div>
      <div className="board-row flex  ">
        <Button value={square[1]} handelClick={() => handelClick(1)} />
        <Button value={square[2]} handelClick={() => handelClick(2)} />
        <Button value={square[3]} handelClick={() => handelClick(3)} />
      </div>
      <div className="board-row flex  ">
        <Button value={square[4]} handelClick={() => handelClick(4)} />
        <Button value={square[5]} handelClick={() => handelClick(5)} />
        <Button value={square[6]} handelClick={() => handelClick(6)} />
      </div>
      <div className="board-row flex  ">
        <Button value={square[7]} handelClick={() => handelClick(7)} />
        <Button value={square[8]} handelClick={() => handelClick(8)} />
        <Button value={square[9]} handelClick={() => handelClick(9)} />
      </div>

    </div>
  )
}

export default Board