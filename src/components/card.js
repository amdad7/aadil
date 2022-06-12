import React, { useState, useEffect } from 'react';

const axios = require('axios')

function Card(props ) {
    const [data,setData] = useState({})
    const [idd,setidd] = useState(props.id)
    console.log(idd)
    useEffect(()=>{
        console.log(idd)
        axios.get(`https://reqres.in/api/users/${idd}`).then((results)=>{
            setData(results.data.data)
        })
    },[idd])
    return (
        <div>
            <span>
            <img src={data.avatar}></img>
            <h2>name: {data.first_name + ' '+data.last_name}</h2>
            <p>email: {data.email}</p>
            </span>            
        </div>
    )
}

export default Card;