import React, { Component } from 'react';

import CardList from './components/card-list.component';
import SearchBox from './components/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField : ""
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  renderSearch = event => this.setState({searchField : event.target.value });

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1 className="heading">Monsters Rolodex</h1>
        <SearchBox placeholder = "Search Monsters" Func = {this.renderSearch}  />
        <CardList monsters ={filteredMonsters}/>

      </div>
    )
  }
}

export default App;
