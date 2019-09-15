import React from "react";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <section className='player'>
          <div className='player-content'>
            <article className='player-content__description'>
              <h3>Category</h3>
              <h1>Slick video title</h1>
              <p>Video description</p>
              <div className='btn__group'>
                <button className='btn btn-action'>Love</button>
                <button className='btn btn-action'>Share</button>
                <button className='btn btn-action'>...</button>
              </div>
              <button onClick={}>Pause</button>
            </article>
          </div>
          <div className='player-container'>
            <div className='player-container__iframe-wrapper'>
              <iframe
                title='titleOne'
                width='1920'
                height='1080'
                src='https://www.youtube.com/embed/5vZK7KHFB80?autoplay=1'
                mute='1'
                frameBorder='0'
                allow='autoplay'
                allowFullScreen></iframe>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Player;
