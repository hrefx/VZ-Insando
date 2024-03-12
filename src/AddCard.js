import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import db from "./Firebase-config";

function AddCard() {
    const [name, setName]=useState("");
    const [imageURL,setImageURL]=useState("");
    const [rarity,setRarity]=useState("");
    const [attack,setAttack]=useState("");
    const [energy,setEnergy]=useState("");

    const handleAddData=async()=>{
    clear();
    const docRef = await addDoc(collection(db, "cards-react"), {
        name: name,
        imageURL: imageURL,
        rarity:rarity,
        attack:attack,
        energy:energy
    });
    console.log("Document written with ID: ", docRef.id);
    }
    const clear=()=>{
        setName(" ");
        setImageURL(" ");
        setRarity(" ");
        setAttack(" ");
        setEnergy(" ");
    }
    

  return (
    <div>
        <h1>Add Your Card</h1>
        <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}></input><br></br><br></br>
        <input type="text" placeholder="Image URL" onChange={(e)=>setImageURL(e.target.value)}></input><br></br><br></br>
        <input type="text" placeholder="Rarity" onChange={(e)=>setRarity(e.target.value)}></input><br></br><br></br>
        <input type="number" placeholder="Attack" onChange={(e)=>setAttack(e.target.value)}></input><br></br><br></br>
        <input type="number" placeholder="Energy" onChange={(e)=>setEnergy(e.target.value)}></input><br></br><br></br>
        <button onClick={handleAddData}>Add</button>
    </div>
  );
}

export default AddCard;