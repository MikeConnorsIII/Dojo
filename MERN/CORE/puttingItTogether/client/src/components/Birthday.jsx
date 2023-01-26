import React, {useState} from 'react'

const Birthday = (props) => {
    let [age, setLikes] = useState(props.age)

    const{firstName, lastName, color} = props

    const addOneYear = () => {
        console.log("I was just clicked")
        setLikes(age + 1)
    }

  return (
    <div>
        <h3>{lastName}, {firstName}</h3>
        <p>Age: {age}</p>
        <p>Hair Color: {color}</p>

        <button onClick={addOneYear} className="btn btn-success">Birthday button for {lastName}, {firstName}</button>
    </div>
  )
}

export default Birthday