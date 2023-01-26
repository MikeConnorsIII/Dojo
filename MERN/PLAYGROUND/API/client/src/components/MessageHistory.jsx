import React from 'react'

const MessageHistory = (props) => {
  return (
    <div>
        <h1>Message History</h1>
        {
            props.messageHistory.map((message, i) => {
                return(
                    <pre key={i}>{message}</pre>
            )})
        }
    </div>
  )
}

export default MessageHistory

// if map is not a function make sure the name MessageHistory is lower case so it doesnt look at the file
// map is a for loop