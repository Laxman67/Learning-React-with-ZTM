import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((user) => {
        this.setState(() => {
          return {
            monster: user,
          };
        });
      });
  }

  onsearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    // Destructuring
    const { monster, searchField } = this.state;
    const { onsearchChange } = this;
    //
    const filteredString = monster.filter((monst) => {
      return monst.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox
          className="monster-search-box"
          onChangeHandler={onsearchChange}
          placeholder="search monster"
        />
        <CardList monsters={filteredString} />
      </div>
    );
  }
}

export default App;
