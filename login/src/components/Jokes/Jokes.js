import React from 'react';
import axios from 'axios'


const Jokes = async ()=>{
   
   
        const response = await axios.get('https://official-joke-api.appspot.com/jokes/ten');
        
        const data = response.data;
      
    console.log(data);    
    return(
      <table>
         {data.map((joke)=>{
            return <tr>{joke.setup}</tr>
         })}
      </table>
    )

}

export default Jokes;