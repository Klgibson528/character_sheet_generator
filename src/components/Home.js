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
      "Choose Your Class",
      "Barbarian",
      "Rouge",
      "Wizard",
      "Bard",
      "Cleric",
      "Druid",
      "Fighter",
      "Monk",
      "Paladin",
      "Ranger",
      "Sorcerer",
      "Warlock"
    ];
    const races = [
      "Choose Your Race",
      "Dwarf",
      "Elf",
      "Human",
      "Halfling",
      "Dragonborn",
      "Gnome",
      "Half-Elf",
      "Half-Orc",
      "Tiefling"
    ];
    const raceOptions = races.map(i => <option key={i}>{i}</option>);
    const classOptions = classes.map(i => <option key={i}>{i}</option>);

    return (
      <div className="">
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
