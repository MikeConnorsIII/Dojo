import React, {useState} from 'react'

const Form = () => {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [age, setAge] = useState("")
    const [img, setImg] = useState("")

    let [listOfPets, setListOfPets] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()
        let petObj = {name, type, age, img}
        console.log("Form was submitted!", petObj) //New inbound data
        setListOfPets([...listOfPets, petObj])
        //if were going to map over data 
    }

    const deletePet = (p, i) => {
            console.log(p.name + " deleting this pet!")
    
            let copy = listOfPets.filter((p, idx) => {
                console.log("Pet, i, looks like this:", p,i, idx)
                return i !== idx
            })
            return setListOfPets(copy)
        }

  return (
    <>
    <div>
    <h1>Pet Form</h1>
    <form onSubmit={submitHandler}>
        <div className='form-group'>
                <label>Pet Name:</label>
                <input onChange={(e) => setName(e.target.value)} type="text" className="form-control"></input>
                {
                    name.length < 3 && name.length > 0 ? <p className="text-danger">Name must be 3 characters or longer </p> : ""
                }
        </div>
        <div onChange={(e) => setType(e.target.value)} className='form-group'>
                <label>Pet Type:</label>
                <input type="text" className="form-control"></input>
        </div>
        <div onChange={(e) => setAge(e.target.value)} className='form-group'>
                <label>Pet Age:</label>
                <input type="text" className="form-control"></input>
        </div>
        <div onChange={(e) => setImg(e.target.value)} className='form-group'>
                <label>Pet Image:</label>
                <input type="text" className="form-control"></input>
        </div>
        <br />
        <button type="submit" className='btn btn-success'>Add Me</button>
    </form>
    </div>
    <div>
        {
                listOfPets.map((p, i) => {
                    return(
                        <div key={i}>
                            <h2>This is the index value: {i}</h2>
                            <h3>{p.name}</h3>
                            <h3>{p.type}</h3>
                            <h3>{p.age}</h3>
                            <img src={p.img} alt="My Pet" height="150px"/>
                            <button onClick={() => deletePet(p, i)} className="btn btn-danger">Delete me</button>
                        </div>
                        
                    )})
            }
    </div>
    </>
  )
}

export default Form