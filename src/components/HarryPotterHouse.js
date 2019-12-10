import React from 'react';

const HarryPotterHouse= (props) => {

  function handleSelect(event){
    props.onSelect(event.target.value);
  }

  return(
    <select id="HarryPotterHouse" defaultValue="default" onChange={handleSelect}>
    <option disabled value="default">Choose a House</option>
    <option value="gryffindor">Choose Gryffindor</option>
    <option value="slytherin">Choose Slytherin</option>
    <option value="hufflepuff">Choose Hufflepuff</option>
    <option value="ravenclaw">Choose Ravenclaw</option>

    </select>
  )

}

export default HarryPotterHouse;
