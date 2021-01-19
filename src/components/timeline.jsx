import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Web Developer at ChangingThePresent.org (Volunteering) <span>November 2020 - January 2021</span></h2>
                        <p>
                          <ul>
                            <li>Worked on an online tool like <b>Stacker</b>, provided technical support and guidance, wrote CSS style sheets of the components from scratch</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer Intern at Dassault Systemes <span>July 2019 - December 2019</span></h2>
                        <p>
                          <ul>
                            <li>Built visualizations to daily monitor Solidworks build results, performance using <b>React.js, Node.js, D3.js</b> and <b>MongoDB</b></li>
                            <li>Integrated user facing react components with server side using <b>RESTful APIs</b> and advanced <b>Postman</b> features</li>
                            <li>Catapulted a robust and scalable fully automated benchmarks tests system using <b>PowerShell</b> and <b>InfluxDB</b>, tracked metrics, capacity analysis, monitored and improved the performance by building <b>Grafana</b> dashboards</li>
                            <li>Implemented custom action code in C# to create Windows Installers(MSI) modules and installers using Visual Studios</li>
                            <li>Developed a general-purpose file viewer and deep comparator using <b>ReactJS</b> and <b>NodeJS</b>, hence, saving developer’s time and improving overall quality of the code</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer at SapientRazorfish <span>September 2016 - July 2018</span></h2>
                        <p>
                          <ul>
                            <li>Worked on developing an online book Store Sapestore using <b>Spring MVC</b> and <b>Hibernate</b></li>
                            <li>Converted the wireframes in <b>Zeplin</b> into a responsive design with 97% customer satisfaction using <b>Handlebars.js</b>, <b>Node.js</b>, <b>JavaScript</b> and <b>jQuery</b></li>
                            <li>Improved quality and Gained Efficiency by boosting code coverage to more than 95% by writing unit test cases in <b>Mocha</b></li>
                            <li>Designed an Asset Tracking System using HTML5, CSS3, Express.js in an <b>agile environment</b>, reducing loss of asset by 90%</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Education <span>July 2012 - May 2016</span></h2>
                        <p>I have completed my Bachelors in Information Technology from <b>Manipal Institute of Technology</b> with major subjects as Object-oriented programming, Data Structures and Algorithms, Computer Networks. During my time at school, I have developed
                          interest in solving complex problems using technology which helped me to improve my analytical and problem solving skill.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
