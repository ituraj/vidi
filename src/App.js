import React from "react";
import "./App.scss";
import Player from "./components/Player";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <main className='main'>
          <Player />
        </main>
      </>
    );
  }
}

export default App;
