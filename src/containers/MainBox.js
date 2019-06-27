import React from "react";
import MenuBar from "../components/MenuBar.js";
import { Profile, Photos, Cocktails, Pokemon } from "../components/Pages.js";

class MainBox extends React.Component {
  state = {
    filter: ""
  };

  selectFilter = e => {
    console.log(e.target.id);
    this.setState({
      filter: e.target.id
    });
  };

  selectedFilter = () => {
    switch (this.state.filter) {
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

  // rendermap = {
  //   pokemon: Pokemon,
  //   cocktail: Cocktails,
  //   photo: Photos,
  //   profile: Profile,
  //   none: "div"
  // };

  render() {
    /*
    
    

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */
    // const RenderedItem = this.rendermap[this.state.filter];
    const RenderedItem = this.selectedFilter;
    return (
      <div>
        <MenuBar selectFilter={this.selectFilter} />

        {<RenderedItem />}
      </div>
    );
  }
}

export default MainBox;
