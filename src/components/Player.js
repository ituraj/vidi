import React from "react";
import Playlist from "./Playlist";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: "https://www.youtube.com/embed/6TLZqx2jW-k"
    };
  }

  render() {
    return (
      <>
        <section className='player'>
          <div className='player-content'>
            <h3>Category</h3>
            <h1>Slick video title</h1>
            <p>Video description</p>
            <div className='btn__group'>
              <button className='btn btn-action'>Love</button>
              <button className='btn btn-action'>Share</button>
              <button className='btn btn-action'>...</button>
            </div>
            <span className='player-content__icon'>play/pause</span>
            <Playlist className='playlist' />
          </div>
          <div className='player-container'>
            <div className='player-container__iframe-wrapper'>
              <iframe
                width='1920'
                height='1080'
                className='player-container__iframe'
                title='mainVideo'
                src={this.state.src}
                frameBorder='0'
                // volume='0'
                // allow='autoplay'
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Player;
