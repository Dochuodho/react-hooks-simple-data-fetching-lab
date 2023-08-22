// create your App component here

import React, {useState , useEffect} from 'react'
export default function App(){

const [image, setImage] = useState([null]);

useEffect(()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then((data)=>{
        setImage(data.message)
    },[])






})



    return (
        <>
        {image=== null? <p>Loading</p> : <img src={image} alt="A Random Dog"></img>}
        
        </>
    )


}
