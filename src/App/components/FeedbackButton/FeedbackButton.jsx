import React from 'react'
  
function FeedbackButton({feedbackChange}) {
  
  return (
    <div onClick={feedbackChange}> 
      <button data-type='good'>Good</button>
      <button data-type='neutral'>Neutral</button>
      <button data-type='bad'>Bad</button>
    </div>
  )
}

export default FeedbackButton