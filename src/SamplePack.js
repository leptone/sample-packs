import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import './css/SamplePack.css';

class SamplePack extends Component {
  render() {
    return (
      <div className="sample-pack">
        <div className='img-container'>
            <img src={this.props.imgSrc}
                className = 'sample-pack-img' />
        </div>
        <div className='text'>
            {this.props.descriptions.map((p) => <p>{p}</p>)}
            <audio controls preload='auto'>
                <source src="afterhours.mp3" />
            </audio>
            <button>Buy Now<br/>$9.99</button>
            <button>Subscribe<br/>$3.99 / month</button>
        </div>
      </div>
    );
  }
}

export default SamplePack;
