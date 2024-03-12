import { collection, getDocs } from "firebase/firestore"; 
import db from "./Firebase-config";
import { useEffect, useState } from "react";

function Home() {
    const [list, setList]=useState([]);

    useEffect(()=>{fetchData()}
    ,[]);

    const fetchData=async()=>{
        let newList = [];
        const querySnapshot=await getDocs(collection(db, "cards-react"));
        querySnapshot.forEach((doc)=>{
            newList.push(
            {
                'name':doc.data().name
            })
            console.log(doc.id, " => ",doc.data());
        });
        setList(newList);
    }
  return (
    <div>
        Home
        {list.map((item,index)=>(
            <li key={index}>{item.name}</li>
        ))}
    </div>
  );
}

export default Home;