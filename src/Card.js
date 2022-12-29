import React from "react";

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      technologies: props.technologies,
    };
  }

  addSkill = (event) => {
    event.preventDefault();
    this.setState(
      {
        technologies: [
          ...this.state.technologies,
          event.target[0].value,
        ],
      }, () => {
        event.target[0].value = "";
      }
    );
  };


  render() {
    return (
      <div>
        <div> My name: {this.props.firstName}</div>
        <div> My surname: {this.props.lastName}</div>
        <div>Learned Technologies:
          {this.state.technologies.map((skill, i) => (
            <div key={skill + i}>
              {skill}
            </div>
          ))}
        </div>
        <form action="#" onSubmit={this.addSkill}>
          <input type="text"></input>
          <button>Add it</button>
        </form>
      </div>
    );
  }

}