import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { newClass: "", classid: "", race: "", raceid: "" };
  }
  handleSelect(e) {
    var index = e.target.selectedIndex;
    var optionElement = e.target.childNodes[index];
    var option = optionElement.getAttribute("id");
    if (e.target.name === "class") {
      this.setState({ newClass: e.target.value });
      // wait to change state of id so api calls correct id
      this.get_info_class(option);
    } else {
      this.setState({ race: e.target.value });
      this.get_info_race(option);
    }
  }

  get_info_class(option) {
    axios
      .get("http://localhost:9080/api/get-class-info", {
        params: {
          data: option
        }
      })
      .then(response => {
        console.log(response);
        this.setState({ classid: option });
        
      });
  }

  get_info_race(option) {
    axios
      .get("http://localhost:9080/api/get-race-info", {
        params: {
          data: option
        }
      })
      .then(response => {
        console.log(response);
        this.setState({ raceid: option });
      });
  }

  render() {
    const classes = [
      { name: "Choose Your Class", id: 0 },
      { name: "Barbarian", id: 1 },
      { name: "Bard", id: 2 },
      { name: "Cleric", id: 3 },
      { name: "Druid", id: 4 },
      { name: "Fighter", id: 5 },
      { name: "Monk", id: 6 },
      { name: "Paladin", id: 7 },
      { name: "Ranger", id: 8 },
      { name: "Rouge", id: 9 },
      { name: "Sorcerer", id: 10 },
      { name: "Warlock", id: 11 },
      { name: "Wizard", id: 12 }
    ];
    const races = [
      { name: "Choose Your Race", id: 0 },
      { name: "Dwarf", id: 1 },
      { name: "Elf", id: 2 },
      { name: "Halfling", id: 3 },
      { name: "Human", id: 4 },
      { name: "Dragonborn", id: 5 },
      { name: "Gnome", id: 6 },
      { name: "Half-Elf", id: 7 },
      { name: "Half-Orc", id: 8 },
      { name: "Tiefling", id: 9 }
    ];
    const raceOptions = races.map(i => (
      <option id={i.id} key={i.id}>
        {i.name}
      </option>
    ));
    const classOptions = classes.map(i => (
      <option id={i.id} key={i.id}>
        {i.name}
      </option>
    ));

    return (
      <div className="homeBody">
        Choose your race
        <select name="race" onChange={this.handleSelect.bind(this)}>
          {raceOptions}
        </select>
        Choose your class
        <select name="class" onChange={this.handleSelect.bind(this)}>
          {classOptions}
        </select>
      </div>
    );
  }
}

export default Home;
