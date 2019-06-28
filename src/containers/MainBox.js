import React from "react";
import MenuBar from "../components/MenuBar.js";
import { Profile, Photos, Cocktails, Pokemon } from "../components/Pages.js";

class MainBox extends React.Component {
  state = {
    search: ""
  };

  handleClick = event => {
    this.setState({
      search: event.target.id
    });
  };

  selectedSearch = () => {
    switch (this.state.search) {
      case "pokemon":
        return <Pokemon />;

      case "photo":
        return <Photos />;

      case "profile":
        return <Profile />;

      case "cocktail":
        return <Cocktails />;

      default:
        return <div />;
    }
  };

  render() {
    const detailsToDisplay = this.selectedSearch;

    return (
      <div>
        <MenuBar handleClick={this.handleClick} />
        {detailsToDisplay}
      </div>
    );
  }
}

export default MainBox;
