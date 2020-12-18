import React, { Component } from 'react';
import './App.css';
import Content from './Content';
import Three from './Three';

export default class Container extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      scrollPosition: 0,
      isMobile: false,
    }

    this.recordScroll = this.recordScroll.bind(this);
    this.isMobile = this.isMobile.bind(this);
  };

  componentDidMount() {
    window.addEventListener('scroll', this.recordScroll);
    window.addEventListener("resize", this.isMobile);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.recordScroll);
  }

  recordScroll() {
    this.setState({
      scrollPosition: window.pageYOffset
    })
  }

  isMobile(){
    if (window.outerWidth < 768) {
      this.setState({
        isMobile: true
      })
    } else {
      this.setState({
        isMobile: false
      })
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <Content
            scrollPosition={this.state.scrollPosition}
            skills={["Javascript ES6",
                    "SCSS !",
                    "React.js", "Vue.js", 
                    "Node.js", "Docker",
                    "Express-api", "Serverless cfg",
                    "Three.js", "Agile method"]}
            isMobile = {this.state.isMobile}
          />
          <ul>
          </ul>
        </div>
        <Three
          scrollPosition={this.state.scrollPosition}
        />
        <div>
          <h1>
          <p class="ok"> article </p>
          </h1> 
        </div>
      </div>

    );
  };
}
