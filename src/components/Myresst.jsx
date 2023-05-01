import axios from "axios";
import { useState, useEffect } from "react";

const Myresst = ()=>{
    const [resourceType , setResourceType] = useState('posts');
    const [data , setData]=useState([]);

    const getData = async () => {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all')
            setData(response.data);

        } catch (error) {
            
        } 
    }

    useEffect (()=>{
    getData();
    },[])
return (
    <div>
    <button onClick={()=> setResourceType('posts')}>Posts</button>
    <button onClick={()=> setResourceType('Users')}>Users</button>
    <button onClick={()=> setResourceType('Comments')}>Comments</button>
<h1>
{resourceType}
</h1>

USer data

{
    data.map((item)=>(

  <div className="main-div" key={item.name.common}>
<div className="itemdiv">
<h1>{item.name.common}</h1>
<hr />
<p>{item.capital}</p>
<hr />
<img src={item.flags.png} alt={item.name.common} />
</div>

  </div>

    ))
}
    </div>
)
}


export default Myresst;