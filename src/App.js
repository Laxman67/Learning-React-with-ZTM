import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

function App() {
  const [searchField, setSearchField] = useState(""); // [value,setValue]
  const [monsters, setMonsters] = useState([]); // [value,setValue]
  const [filteredMonsters, setfilteredMonsters] = useState(monsters); // [value,setValue]

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((user) => {
        setMonsters(user);
      });
  }, []);

  //
  const onsearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setfilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex </h1>

      <SearchBox
        className="monster-search-box"
        onChangeHandler={onsearchChange}
        placeholder="search monster"
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monster: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//       .then((response) => response.json())
//       .then((user) => {
//         this.setState(() => {
//           return {
//             monster: user,
//           };
//         });
//       });
//   }

//   onsearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     // Destructuring
//     const { monster, searchField } = this.state;
//     const { onsearchChange } = this;
//     //
//     const filteredString = monster.filter((monst) => {
//       return monst.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox
//           className="monster-search-box"
//           onChangeHandler={onsearchChange}
//           placeholder="search monster"
//         />
//         <CardList monsters={filteredString} />
//       </div>
//     );
//   }
// }

export default App;
