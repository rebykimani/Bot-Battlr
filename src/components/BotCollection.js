import React from "react";
import BotCard from "./BotCard";

function BotCollection({collection, handleClick, handleDelete}) {
  
  
  // Your code here
  return (
    <div className="ui four column grid">
      {'Add bot to your army by clicking on the Bot Collection below'}
      <div className="row">
        {/*...and here..*/}
        {collection.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleClick={handleClick} handleDelete={handleDelete} />
        ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
