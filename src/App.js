import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

// в папке с chrome нужно открыть командную строку и ввести: "chrome.exe" --user-data-dir="C:/Chrome dev session" --disable-web-security

function SearchForm(props){

  const handlerSubmit=async event=>{
    event.preventDefault();
    let resp=await axios.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5");
    props.onSubmit(resp.data);
  }

  return(
    <form onSubmit={handlerSubmit}>
      <input type="submit" value="Вывод"/>
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
    <p><span>Валюта: </span>{props.ccy}</p>
    <p><span>Купля: </span>{props.buy}</p>
    <p><span>Продажа: </span>{props.sale}</p>
    <hr></hr>
  </div>
)
}


function App() {

  const [bankObj,setBankObj]=useState([]);
  const updateBank=e=>setBankObj(e);

  return (
    <div className="BankMap">
    <SearchForm onSubmit={updateBank}/>
    <h2 style={{textAlign:'center', margin:'40px 0'}}>Курсы валют</h2>
    <GroupList data={bankObj}/>
    </div>
  );
}

export default App;


