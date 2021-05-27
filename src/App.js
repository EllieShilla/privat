import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function SearchForm(props){
  const[city,setCity]=useState('');
  const [address,setAddress]=useState('');
  const handlerChange=e=>{setCity(e.target.value)};
  const handlerChange2=e=>{setAddress(e.target.value)};

  const handlerSubmit=async event=>{
    event.preventDefault();
    


    //  const query =`https://api.privatbank.ua/p24api/pboffice?city=${city}&address=${address}`;
     const query ="https://api.privatbank.ua/p24api/pboffice?json&city=Днепропетровск&address=Титова";
    // let place=await axios.get("https://api.privatbank.ua/p24api/pboffice?json&city=Днепропетровск&address=Титова");
   


    axios.get(query,{
  method: 'GET',
  mode: 'no-cors',
  headers: {
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    "Access-Control-Allow-Methods": "GET, PATCH, PUT, POST, DELETE, OPTIONS",
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  credentials: 'same-origin',
})
.then(results => console.log(results));  




    // let tmp=await axios.get(query);
    // console.log(tmp.data);





    let resp=await axios.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5");

    props.onSubmit(resp.data);
  }

  return(
    <form onSubmit={handlerSubmit}>
      <input type="text" onChange={handlerChange}/>
      <input type="text" onChange={handlerChange2}/>
      <input type="submit" value="Search"/>
    </form>
  )
}

function GroupList(props){

  return(
    <div>
      {props.data.map(i=>(<BankInfo {...i}/>))}
    </div>
  );
}

function BankInfo(props) {
return(
  <div>
    <h2>{props.ccy}</h2>
    <h2>{props.base_ccy}</h2>
    <h2>{props.buy}</h2>
    <h2>{props.sale}</h2>
  </div>
)
}


function App() {

  const [bankObj,setBankObj]=useState([]);
  const updateBank=e=>setBankObj(e);

  return (
    <div className="App">
    <SearchForm onSubmit={updateBank}/>
    <GroupList data={bankObj}/>
    </div>
  );
}

export default App;


