import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import { useEffect, useState } from "react/cjs/react.production.min";

function BotsPage() {
  //start here with your code for step one
const [bot, setBot] = useState([""]);
const [army, setArmy] = useState([""]);

function Enlist(bot){
  if (army.includes(bot))
  return;
  setArmy((army)=>[
    ...army, bot
  ])
} 
function Retire(bot){
  setArmy((army)=>army.filter((it)=>it.id !== bot.id))
}

useEffect (()=>{
  fetch('http://localhost:8002/bots')
  .then ((resp)=>resp.json())
  .then ((data)=>setBot(data));
    }, [])

  function handleDelete(bot){
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setBot((bot) => bot.filter((it) => it.id !== bot.id));
      setArmy((army) => army.filter((it) => it.id !== bot.id));
    });
  }
  function deleteHandler() {
     
    handleDelete()
  }
  return (
    <div>
      <YourBotArmy collection={army} handleClick={Retire} handleDelete={handleDelete} />
      <BotCollection collection={bot} handleClick={Enlist} handleDelete={handleDelete} />
    </div>
  );
}
export default BotsPage;
