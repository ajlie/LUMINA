import React from 'react'
import {useState} from 'react'
import AI from './ai'


const UserInfo = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [sport, setSport] = useState('');

  const handleSubmit = () => {
    try{
    setSport('');
    setUserInfo(...userInfo, {sport});
    } catch (error) {
        console.error(error)
    }
  }

  return (
    <div>
    <form onSubmit = {handleSubmit}>
        <input type = "text" value = {sport} onChange = {(e) => setSport(e.target.value)}> What is your favorite sport?</input>
        <button onClick = {handleSubmit}>SUBMIT</button>
    </form>

    {userInfo.map((userInfo, index) => (
    <AI key = {index} userInfo = {userInfo}/>
   ))}
  
  </div>
  )
}

export default UserInfo