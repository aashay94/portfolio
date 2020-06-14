import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I'm Information Systems grad student at Northeastern University, Boston. I'm an experienced web developer with a passion for building state of the art web applications. I have 2+ years of industry experience in Software Development.</p>
                    <p>I would really describe myself as a person with a versatile skill-set, a lot of integrity and a willingness to go the extra mile to achieve my goals. I am an enthusiastic team player, quick learner and has developed robust code for high-volume businesses.  </p>
                    <p>I love going out for trips and playing virtual games. 
                    I'm a huge football fan. If you need anything from me, you know where to start :)</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience in building FullStack web applications having thorough knowledge in HTML,CSS, Jquery, Javascript, React, Angular, Node and D3</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>I have good grasp over the fundamental concepts of DSA</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>UI / UX</h3>
                    <p>Have built storyboards, personas, UI prototypes and wireframes in Zeplin, Moqups, Balsemiq and Axure, 
                        also conducted usability tests to make the designs intuitive and simple</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
