import React,{useEffect, useState } from "react"

// create your App component here
export default function App(){
    const [image, setImage] = useState("");
    const [loaded, setLoaded] = useState(false);
   
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data=> 
            {setImage(data.message) ;
                setLoaded(true) ;
            }
            )
    },[])
    if (!loaded) return <h3>Loading...</h3>;
    return(<img src={image} alt="A Random Dog" />)
       
}