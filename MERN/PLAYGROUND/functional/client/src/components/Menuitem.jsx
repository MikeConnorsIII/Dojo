import React, {useState} from 'react'

const Menuitem = (props) => {
    let [likes, setLikes] = useState(props.likes)

    const{dishName, price} = props

    const addOneLike = () => {
        console.log("I was just clicked")
        setLikes(likes + 1)
    }

  return (
    <div>
        <h3>{dishName}</h3>
        <p>Price: ${price}</p>
        <p>Number of Likes: {likes}</p>
        <button onClick={addOneLike} className="btn btn-outline-danger">Like</button>
    </div>
  )
}

export default Menuitem