import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Main = () => {

  const [account, setAccount] = useState({});

  useEffect( () => {
    axiosGet();
  },[])

  const axiosGet = async () => {
    try {
      const response = await axios.get('https://account-31643-default-rtdb.firebaseio.com/accounts.json');
      console.log(response.data.a3);
      setAccount(response.data.a3);
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <>  
      <div>
        <div>{account.accNum}</div>
        <div>{account.name}</div>
        <div>{account.status}</div>
        <div>{account.total}</div>
      </div>
    </>
  )
}

export default Main;