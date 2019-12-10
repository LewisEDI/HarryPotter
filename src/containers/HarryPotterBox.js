import React, {Component} from 'react';
import HarryPotterSelect from '../components/HarryPotterSelect.js'

class HarryPotterBox extends Component{

  constructor(props){
    super(props);
    this.state = {
      characters: [],
      selectedCharacter: null
    }
    this.handleDropDown = this.handleDropDown.bind(this)
  }

  componentDidMount(){
    const url = 'http://hp-api.herokuapp.com/api/characters'
    fetch(url).then(res => res.json()).then(data => this.setState({characters:data}))
    .catch(err => console.error);
  }

  handleDropDown(index){
    this.setState({
      selectedCharacter: this.state.characters[index]
    })
  }


  render(){
    return(
      <div>
      <h1>Harry Potter Characters</h1>
      <HarryPotterSelect characters={this.state.characters} onSelect={this.handleDropDown}/>
      </div>)
    }

  }

  export default HarryPotterBox
