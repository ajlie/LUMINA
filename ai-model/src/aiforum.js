import React from 'react'

const aiforum = ({form}) => {
    // const [postData, setPostData] = useState([]);

    if(!form) {
        return null; 
      }


  return (
    <div>
    <p>FIREFLY: { form.chatResponse}</p>
    <p>USER: {form.userInput}</p>
    </div>
  )
}

export default aiforum