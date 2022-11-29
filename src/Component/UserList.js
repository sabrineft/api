import React, { useEffect, useState } from 'react';
import axios from "axios";

function UserList() {
    const [users,setusers] = useState([]);
useEffect(() => {
    try {
           
   axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{setusers(res.data);});
}
   
    catch (error) {
       console.log(error);
    }
 
}, []); 

  console.log(users);

  return (
    <div>
        {users?users.map(()=><div>
            <h1>{el.name}</h1>
        </div>):<img src='https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp?cid=ecf05e47bayvrgkzmgnireid55p7d6ame2seav65g9ohubpj&rid=giphy.webp&ct=g'  />}
    </div>
  )
}

export default UserList