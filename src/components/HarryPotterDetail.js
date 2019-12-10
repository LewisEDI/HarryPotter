import React from 'react';

const HarryPotterDetail = (props) => {

  if (!props.chosen) return null;
  return(
    <div>
    <h1>{props.chosen.name}</h1>
    <h1>{props.chosen.house}</h1>
    <img src ={props.chosen.image}/>
    </div>
  )

}

export default HarryPotterDetail;
