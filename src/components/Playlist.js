import React from "react";

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <section className='playlist'>
          <h2>Playlist</h2>
          <div className='playlist__container'>
            <iframe
              title='video 1'
              width='420'
              height='315'
              src='https://www.youtube.com/embed/tgbNymZ7vqY'></iframe>
            <iframe
              title='video 2'
              width='420'
              height='315'
              src='https://www.youtube.com/embed/tgbNymZ7vqY'></iframe>
            <iframe
              title='video 3'
              width='420'
              height='315'
              src='https://www.youtube.com/embed/tgbNymZ7vqY'></iframe>
          </div>
        </section>
      </>
    );
  }
}

export default Playlist;
