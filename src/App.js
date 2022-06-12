
import './App.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addpeople } from './store/people';

const axios = require('axios')

function App() {
  
  const dispatch = useDispatch ()
  var data = [];
  const [currentdisplay,setcurrentdisplay] = useState(6)
  const [persondata,setpersondata] = useState({})
  const [loading,setloading] = useState(false);
  const [total,settotal] = useState(1);
  useEffect(()=>{
    
      axios.get('https://reqres.in/api/users?page=1')
      .then((results)=>{
        settotal(results.data.total)
        results.data.data.forEach(element => {
          dispatch(addpeople(element))
        });
      })
    
  },[])
  data = useSelector((state) => state.People)
  const arr= new Array(total).fill(0)
  console.log(data)

  useEffect(()=>{
    setloading(true)
    axios.get(`https://reqres.in/api/users/${currentdisplay}`).then((results)=>{
        setpersondata(results.data.data)
        setloading(false)
    })
},[currentdisplay])

  return (
    <div>
      {loading ? <h1>loading...</h1> :
        <div>
        <span>
        <img src={persondata.avatar}></img>
        <h2>name: {persondata.first_name + ' '+persondata.last_name}</h2>
        <p>email: {persondata.email}</p>
        </span>            
    </div>
      }
      <div>
        {arr.map((people,i)=>{
        return <button key={i+1} id={i+1} onClick={(e)=>{setcurrentdisplay(e.target.id)}}>
            {i+1}
          </button>
        })}
      </div>
    </div>
  );
}

export default App;
