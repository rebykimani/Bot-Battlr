import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ collection, clickHandler, handeleDelete }) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        {"Click on a Bot on the bot collection to enlist it to your army."}
        <div className="row bot-army-row">
          {collection.map((bot) => (
            <BotCard key={bot.id} bot={bot} clickHandler={clickHandler} handleDelete={handeleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;