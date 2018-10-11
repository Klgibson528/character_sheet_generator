import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { newClass: "", race: "" };
  }
  handleSelect(e) {
    if (e.target.name === "class") {
      this.setState({ newClass: e.target.value });
    } else {
      this.setState({ race: e.target.value });
    }
  }
  render() {
    const classes = [
      {name:"Choose Your Class", id:0},
      {name:"Barbarian", id:1},
      {name:"Rouge", id:9},
      {name:"Wizard", id:12},
      {name:"Bard", id:2},
      {name:"Cleric", id:3},
      {name:"Druid", id:4},
      {name:"Fighter", id:5},
      {name:"Monk", id:6},
      {name:"Paladin", id:7},
      {name:"Ranger", id:8},
      {name:"Sorcerer", id:10},
      {name:"Warlock", id:11}
    ];
    const races = [
      {name:"Choose Your Race", id:0},
      {name:"Dwarf", id:1},
      {name:"Elf", id:2},
      {name:"Human", id:4},
      {name:"Halfling", id:3},
      {name:"Dragonborn", id:5},
      {name:"Gnome", id:6},
      {name:"Half-Elf", id:7},
      {name:"Half-Orc", id:8},
      {name:"Tiefling", id:9}
    ];
    const raceOptions = races.map(i => <option key={i.id}>{i.name}</option>);
    const classOptions = classes.map(i => <option key={i.id}>{i.name}</option>);

    return (
      <div className="homeBody">
        <p>Choose your race</p>
        <select name="race" onChange={this.handleSelect.bind(this)}>
          {raceOptions}
        </select>

        <p>Choose your class</p>
        <select name="class" onChange={this.handleSelect.bind(this)}>
          {classOptions}
        </select>
      </div>
    );
  }
}

export default Home;
