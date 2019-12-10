import React, {Component} from 'react';
import HarryPotterSelect from '../components/HarryPotterSelect.js'
import HarryPotterDetail from '../components/HarryPotterDetail.js'
import HarryPotterHouse from '../components/HarryPotterHouse.js'

class HarryPotterBox extends Component{

  constructor(props){
    super(props);
    this.state = {
      characters: null,
      selectedCharacter: null,
      house: ''
    }
    this.handleDropDown = this.handleDropDown.bind(this)
    this.handleHouse = this.handleHouse.bind(this)
  }

  // componentDidMount(){
  //   const url = 'http://hp-api.herokuapp.com/api/characters'
  //   fetch(url).then(res => res.json()).then(data => this.setState({characters: data}))
  //   .catch(err => console.error);
  // }

  handleDropDown(index){
    this.setState({
      selectedCharacter: this.state.characters[index]
    })
  }

  handleHouse(houseChosen){
    this.setState({
      house: houseChosen
    })
    const url = 'http://hp-api.herokuapp.com/api/characters/house/'+houseChosen
    console.log(url)
    fetch(url).then(res => res.json()).then(data => this.setState({characters:data}))
    .catch(err => console.error);
  }


  render(){
    return(
      <div>
      <h1>Harry Potter Characters</h1>
      <HarryPotterHouse onSelect={this.handleHouse}/>
      <HarryPotterSelect characters={this.state.characters} onSelect={this.handleDropDown}/>
      <HarryPotterDetail chosen={this.state.selectedCharacter}/>
      </div>)
    }

  }

  export default HarryPotterBox
