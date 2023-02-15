import './index.css'

const GameResultsView = props => {
  const {idValue, randomChoosenObject, renderPlayPage} = props

  const onRenderFirstPage = result => {
    renderPlayPage(result)
  }

  const setConditionalResult = () => {
    let resultText = null
    if (idValue === 'ROCK' && randomChoosenObject === 'SCISSORS') {
      resultText = 'YOU WON'
    } else if (idValue === 'ROCK' && randomChoosenObject === 'PAPER') {
      resultText = 'YOU LOSE'
    } else if (idValue === 'SCISSORS' && randomChoosenObject === 'ROCK') {
      resultText = 'YOU LOSE'
    } else if (idValue === 'SCISSORS' && randomChoosenObject === 'PAPER') {
      resultText = 'YOU WON'
    } else if (idValue === 'PAPER' && randomChoosenObject === 'ROCK') {
      resultText = 'YOU WON'
    } else if (idValue === 'PAPER' && randomChoosenObject === 'SCISSORS') {
      resultText = 'YOU LOSE'
    } else {
      resultText = 'IT IS DRAW'
    }
    return resultText
  }
  const result = setConditionalResult()
  return (
    <div className="result-container">
      <h1 className="result">{result}</h1>
      <button
        className="play-again"
        type="button"
        onClick={() => onRenderFirstPage(result)}
      >
        PLAY AGAIN
      </button>
    </div>
  )
}

export default GameResultsView
