import React from "react";
import "./App.scss";
import MainPlayer from "./components/MainPlayer";
import Playlist from "./components/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <main>
          <MainPlayer />
          <Playlist />
        </main>
      </>
    );
  }
}

export default App;
