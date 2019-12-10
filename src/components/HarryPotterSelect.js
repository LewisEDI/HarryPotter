import React from 'react';

const HarryPotterSelect = (props) => {


  function handleSelect(event){
    props.onSelect(event.target.value);
  }

  if (!props.characters) return null;

  const characterList = props.characters.map((character,index) =>{
    return <option key={index} value={index}>{character.name}</option>
  })

  return (
    <select id="HarryPotterSelect" defaultValue="default" onChange={handleSelect}>
    <option disabled value="default">Choose a Character</option>
    {characterList}
    </select>
  )
}

export default HarryPotterSelect
