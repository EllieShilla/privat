import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function SearchForm(props){
  const[city,setCity]=useState('');
  const [address,setAddress]=useState('');
  const handlerChange=e=>{setCity(e.target.value)};
  const handlerChange2=e=>{setAddress(e.target.value)};

  const handlerSubmit=async event=>{
    event.preventDefault();
     const query =`https://api.privatbank.ua/p24api/pboffice?json&city=${city}&address=${address}`;   
    let resp=await axios.get(query);
    props.onSubmit(resp.data);
  }

  return(
    <form onSubmit={handlerSubmit}>
      <div className="bankInf">
      <p>Город:</p>
      <input type="text" onChange={handlerChange}/>
      </div>
      <br></br>
      <div className="bankInf">
      <p>Адрес:</p>
      <input type="text" onChange={handlerChange2}/>
      </div>
      <br></br>
      <input type="submit" value="Поиск" id="BtnInpt"/>
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
    <p><span>Название:</span> {props.name}</p>
    <p><span>Город: </span>{props.city}</p>
    <p><span>Телефон:</span> {props.phone}</p>
    <p><span>Email: </span>{props.email}</p>
    <p><span>Адрес: </span>{props.address}</p>
    <hr></hr>
  </div>
)
}


function BankMap() {

  const [bankObj,setBankObj]=useState([]);
  const updateBank=e=>setBankObj(e);

  return (
    <div className="BankMap">
    <SearchForm onSubmit={updateBank}/>
      <h2 style={{textAlign:'center', margin:'40px 0'}}>Отделения</h2>
    <GroupList data={bankObj}/>
    </div>
  );
}

export default BankMap;


