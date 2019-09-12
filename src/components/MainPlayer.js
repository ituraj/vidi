import React from "react";

class MainPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: "https://www.youtube.com/embed/tgbNymZ7vqY"
    };
  }
  render() {
    return (
      <>
        <section className='main-player'>
          <div className='player-container'>
            <iframe
              className='player-iframe'
              title='mainVideo'
              src={this.state.src}
              frameBorder='0'
            />
          </div>
          <h3>Category</h3>
          <h1>Slick video title</h1>
          <p>Video description</p>
          <div className='btn__group'>
            <button className='btn btn-action'>Love</button>
            <button className='btn btn-action'>Share</button>
            <button className='btn btn-action'>...</button>
          </div>
          <span className='player-icon'>play/pause</span>
        </section>
      </>
    );
  }
}

export default MainPlayer;
