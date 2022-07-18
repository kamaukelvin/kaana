import React from "react";
import styled from "styled-components";

export const StyledTitle = styled.h2`
  text-align: center;
  margin-bottom: 5rem;
`;

export const StyledBlockquote = styled.div`
  position: relative;
  :before {
    position: absolute;
    content: open-quote;
    font-size: 4em;
    margin-left: -0.6em;
    margin-top: -0.4em;
  }
  :after {
    position: absolute;
    content: close-quote;
    font-size: 4em;
    bottom: 0;
    right: 0;
    margin-right: -0.6em;
    margin-bottom: -0.8em;
  }
  p {
    display: inline;
  }
`;
const Featured = () => {
  return (
    <section id="primary" className="content-full-width">
      <div className="container">
        <StyledTitle>Explore experiments by category</StyledTitle>
        <div className="dt-sc-one-fourth column first">
          <div className="dt-sc-ico-content type1">
            <div className="icon">
              <span className="icon-outer">
                <img
                  src="/assets/images/placeholders/experiment-fun.jpg"
                     alt=""
                  title
                />
                <span className="infolayer">
                  <a href>
                    <i className="fa fa-link" />
                  </a>
                </span>
              </span>
            </div>
            <h4>
              <a href>Science</a>
            </h4>
            <p>
              Curabitur ultrices posuere mattis. Nam ullamcorper, diam sit amet
              euismod pelleo ntesque, eros risus rhoncus libero, invest tibulum
              nisl ligula
            </p>
          </div>
        </div>
        <div className="dt-sc-one-fourth column">
          <div className="dt-sc-ico-content type1">
            <div className="icon">
              <span className="icon-outer">
                <img
                  src="/assets/images/placeholders/magic-maths.jpg"
                     alt=""
                  title
                />
                <span className="infolayer">
                  <a href>
                    <i className="fa fa-link" />
                  </a>
                </span>
              </span>
            </div>
            <h4>
              <a href>Mathematics</a>
            </h4>
            <p>
              Decor ostdcaer urabitur ultrices posuere mattis. Nam ullamcorper,
              diam sit amet euismod pelleontesque, eros risus rhoncus libero,
              invest tibulum nisl ligula
            </p>
          </div>
        </div>
        <div className="dt-sc-one-fourth column">
          <div className="dt-sc-ico-content type1">
            <div className="icon">
              <span className="icon-outer">
                <img src="/assets/images/placeholders/drone.jpg"    alt="" title />
                <span className="infolayer">
                  <a href>
                    <i className="fa fa-link" />
                  </a>
                </span>
              </span>
            </div>
            <h4>
              <a href>Technology</a>
            </h4>
            <p>
              Rabitur ultrices posuere mattis. Nam ullamcorper, diam sit euismod
              pelleo ntesque, eros risus rhoncus libero, invest tibulum nisl
              gedretu osterftra ligula
            </p>
          </div>
        </div>
        <div className="dt-sc-one-fourth column">
          <div className="dt-sc-ico-content type1">
            <div className="icon">
              <span className="icon-outer">
                <img
                  src="/assets/images/placeholders/engineering.jpg"
                     alt=""
                  title
                />
                <span className="infolayer">
                  <a href>
                    <i className="fa fa-link" />
                  </a>
                </span>
              </span>
            </div>
            <h4>
              <a href>Engineering</a>
            </h4>
            <p>
              Curabitur ultrices posuere mattis. Nam ullamcorper, diam sit amet
              euismod pelleo ntesque, eros risus rhoncus libero, invest tibulum
              nisl ligula
            </p>
          </div>
        </div>
      </div>
      <div className="dt-sc-hr" />
      <section className="fullwidth-background dt-sc-parallax-section turquoise-bg">
        <div className="container">
          <div className="dt-sc-one-half column first">
            <h2>Play As You Learn</h2>
            <div className="dt-sc-one-half column first">
              <div className="dt-sc-ico-content type2">
                <div className="icon">
                  <span className="fa fa-glass"> </span>
                </div>
                <h4>
                  <a href target="_blank">
                    {" "}
                    Lorem ipsum dolor sit{" "}
                  </a>
                </h4>
                <p>
                  Nam ullamcorper, diam sit amet euismod pelleontesque, eros
                  risus rhoncus libero, inst tibulum nisl ligula....
                </p>
              </div>
              <div className="dt-sc-hr-very-small" />
              <div className="dt-sc-ico-content type2">
                <div className="icon">
                  <span className="fa fa-pencil"> </span>
                </div>
                <h4>
                  <a href target="_blank">
                    {" "}
                    Lorem ipsum dolor sit{" "}
                  </a>
                </h4>
                <p>
                  Nam ullamcorper, diam sit amet euismod pelleontesque, eros
                  risus rhoncus libero, inst tibulum nisl ligula....
                </p>
              </div>
              <div className="dt-sc-hr-very-small" />
              <div className="dt-sc-ico-content type2">
                <div className="icon">
                  <span className="fa fa-bullseye"> </span>
                </div>
                <h4>
                  <a href target="_blank">
                    {" "}
                    Lorem ipsum dolor sit{" "}
                  </a>
                </h4>
                <p>
                  Nam ullamcorper, diam sit amet euismod pelleontesque, eros
                  risus rhoncus libero, inst tibulum nisl ligula....
                </p>
              </div>
            </div>
            <div className="dt-sc-one-half column">
              <div className="dt-sc-ico-content type2">
                <div className="icon">
                  <span className="fa fa-tachometer"> </span>
                </div>
                <h4>
                  <a href target="_blank">
                    {" "}
                    Lorem ipsum dolor sit{" "}
                  </a>
                </h4>
                <p>
                  Nam ullamcorper, diam sit amet euismod pelleontesque, eros
                  risus rhoncus libero, inst tibulum nisl ligula....
                </p>
              </div>
              <div className="dt-sc-hr-very-small" />
              <div className="dt-sc-ico-content type2">
                <div className="icon">
                  <span className="fa fa-magic"> </span>
                </div>
                <h4>
                  <a href target="_blank">
                    {" "}
                    Lorem ipsum dolor sit{" "}
                  </a>
                </h4>
                <p>
                  Nam ullamcorper, diam sit amet euismod pelleontesque, eros
                  risus rhoncus libero, inst tibulum nisl ligula....
                </p>
              </div>
              <div className="dt-sc-hr-very-small" />
              <div className="dt-sc-ico-content type2">
                <div className="icon">
                  <span className="fa fa-music"> </span>
                </div>
                <h4>
                  <a href target="_blank">
                    {" "}
                    Lorem ipsum dolor sit{" "}
                  </a>
                </h4>
                <p>
                  Nam ullamcorper, diam sit amet euismod pelleontesque, eros
                  risus rhoncus libero, inst tibulum nisl ligula....
                </p>
              </div>
            </div>
          </div>
          <div className="dt-sc-one-half column">
            <h2>Curated home STEM materials for your kids!</h2>
            <div className="add-slider-wrapper">
              <ul className="add-slider">
                <li>
                  {" "}
                  <img
                    src="/assets/images/placeholders/experiment-fun.jpg"
                       alt=""
                    title
                  />{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="dt-sc-hr" />
      <div className="container">
        <h2 className="dt-sc-hr-green-title">Our Featured Catalogue</h2>
        <div className="front-portfolio-container">
          <div className="portfolio-content portfolio-content1">
            <div className="front-portfolio">
              <div className="portfolio-outer">
                <div className="portfolio-thumb">
                  <img
                    src="/assets/images/placeholders/rain-cloud.png"
                       alt=""
                    title
                  />
                  <div className="image-overlay">
                    <h5>
                      <a href="portfolio-detail.html">Rain Cloud Experiment</a>
                    </h5>
                    {/* <a href="portfolio-detail.html" className="link">
                      <span className="fa fa-link" />
                    </a>
                    <a
                      href="http://placehold.it/1170x1016"
                      data-gal="prettyPhoto[gallery]"
                      className="zoom"
                    >
                      <span className="fa fa-search" />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-content portfolio-content2">
            <div className="front-portfolio">
              <div className="portfolio-outer">
                <div className="portfolio-thumb">
                  <img
                    src="/assets/images/placeholders/image1.jpeg"
                       alt=""
                    title
                  />
                  <div className="image-overlay">
                    <h5>
                      <a href="portfolio-detail.html">Experiment Name</a>
                    </h5>
                    {/* <a href="portfolio-detail.html" className="link">
                      <span className="fa fa-link" />
                    </a>
                    <a
                      href="http://placehold.it/1170x1016"
                      data-gal="prettyPhoto[gallery]"
                      className="zoom"
                    >
                      <span className="fa fa-search" />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-content portfolio-content3">
            <div className="front-portfolio">
              <div className="portfolio-outer">
                <div className="portfolio-thumb">
                  <img
                    src="/assets/images/placeholders/image4.jpeg"
                       alt=""
                    title
                  />
                  <div className="image-overlay">
                    <h5>
                      <a href="portfolio-detail.html">Experiment Name</a>
                    </h5>
                    {/* <a href="portfolio-detail.html" className="link">
                      <span className="fa fa-link" />
                    </a>
                    <a
                      href="http://placehold.it/1170x1016"
                      data-gal="prettyPhoto[gallery]"
                      className="zoom"
                    >
                      <span className="fa fa-search" />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-content portfolio-content4">
            <div className="front-portfolio">
              <div className="portfolio-outer">
                <div className="portfolio-thumb">
                  <img
                    src="/assets/images/placeholders/child-dad.jpg"
                       alt=""
                    title
                  />
                  <div className="image-overlay">
                    <h5>
                      <a href="portfolio-detail.html">Experiment Name</a>
                    </h5>
                    {/* <a href="portfolio-detail.html" className="link">
                      <span className="fa fa-link" />
                    </a>
                    <a
                      href="http://placehold.it/1170x1016"
                      data-gal="prettyPhoto[gallery]"
                      className="zoom"
                    >
                      <span className="fa fa-search" />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-content portfolio-content5">
            <div className="front-portfolio">
              <div className="portfolio-outer">
                <div className="portfolio-thumb">
                  <img
                    src="/assets/images/placeholders/maths-fun3.jpeg"
                       alt=""
                    title
                  />
                  <div className="image-overlay">
                    <h5>
                      <a href="portfolio-detail.html">Experiment Name</a>
                    </h5>
                    {/* <a href="portfolio-detail.html" className="link">
                      <span className="fa fa-link" />
                    </a>
                    <a
                      href="/assets/images/placeholders/magic-maths.jpg"
                      data-gal="prettyPhoto[gallery]"
                      className="zoom"
                    >
                      <span className="fa fa-search" />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-content portfolio-content6">
            <div className="front-portfolio">
              <div className="portfolio-outer">
                <div className="portfolio-thumb">
                  <img
                    src="/assets/images/placeholders/amazon.jpeg"
                       alt=""
                    title
                  />
                  <div className="image-overlay">
                    <h5>
                      <a href="portfolio-detail.html">Experiment Name</a>
                    </h5>
                    {/* <a href="portfolio-detail.html" className="link">
                      <span className="fa fa-link" />
                    </a>
                    <a
                      href="http://placehold.it/1170x1016"
                      data-gal="prettyPhoto[gallery]"
                      className="zoom"
                    >
                      <span className="fa fa-search" />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-content portfolio-content7">
            <div className="front-portfolio">
              <div className="portfolio-outer">
                <div className="portfolio-thumb">
                  <img
                    src="/assets/images/placeholders/magic-maths.jpg"
                       alt=""
                    title
                  />
                  <div className="image-overlay">
                    <h5>
                      <a href="portfolio-detail.html">Experiment Name</a>
                    </h5>
                    {/* <a href="portfolio-detail.html" className="link">
                      <span className="fa fa-link" />
                    </a>
                    <a
                      href="http://placehold.it/1170x1016"
                      data-gal="prettyPhoto[gallery]"
                      className="zoom"
                    >
                      <span className="fa fa-search" />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dt-sc-hr-small" />
          <div className="aligncenter">
            <a href className="dt-sc-button medium mustard">
              {" "}
              Hit here to view all{" "}
              <span className="fa fa-chevron-circle-right"> </span>
            </a>
          </div>
        </div>
      </div>
      <div className="dt-sc-hr" />
      <section className="fullwidth-background dt-sc-parallax-section orange-bg">
        <div className="container">
          <h2 className="dt-sc-hr-white-title">Experiments by age</h2>
          <div className="column dt-sc-one-half first">
            <article className="blog-entry">
              <div className="blog-entry-inner">
                <div className="entry-meta">
                  {/* <a href="blog-detail.html" className="blog-author">
                    <img
                      src="/assets/images/placeholders/experiment-fun2.jpg"
                         alt=""
                      title
                    />
                  </a> */}
                  <div className="date">
                    <span> 5-8 </span>
                    <p>
                      {" "}
                      Years <br />
                      Old{" "}
                    </p>
                  </div>
                </div>
                <div className="entry-thumb">
                  <a href="blog-detail.html">
                    <img
                      src="/assets/images/placeholders/experiment-fun2.jpg"
                         alt=""
                      title
                    />
                  </a>
                </div>
                <div className="entry-details">
                  <div className="entry-title">
                    <h3>
                      <a href> Activities Improves Mind </a>
                    </h3>
                  </div>
                  {/*entry-metadata ends*/}
                  <div className="entry-body">
                    <p>
                      Roin bibendum nibhsds. Nuncsdsd fermdada msit ametadasd
                      consequat. Praes porr nulla sit amet dui lobortis, id
                      venenatis nibh accums.
                    </p>
                  </div>
                  <a href className="dt-sc-button small">
                    {" "}
                    Read More{" "}
                    <span className="fa fa-chevron-circle-right"> </span>
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div className="column dt-sc-one-half">
            <article className="blog-entry">
              <div className="blog-entry-inner">
                <div className="entry-meta">
                  {/* <a href="blog-detail.html" className="blog-author">
                    <img src="http://placehold.it/90x90"    alt="" title />
                  </a> */}
                  <div className="date">
                    <span> 6-10 </span>
                    <p>
                      {" "}
                      Years <br /> Old{" "}
                    </p>
                  </div>
                </div>
                <div className="entry-thumb">
                  <a href="blog-detail.html">
                    <img
                      src="/assets/images/placeholders/maths-fun2.jpeg"
                         alt=""
                      title
                    />
                  </a>
                </div>
                <div className="entry-details">
                  <div className="entry-title">
                    <h3>
                      <a href="blog-detail.html"> Activities Improves Mind </a>
                    </h3>
                  </div>
                  {/*entry-metadata ends*/}
                  <div className="entry-body">
                    <p>
                      Iid venenatis nibh accums. Doinbibe ndum nibhsds. Nuncsdsd
                      fermdada msit ametadasd consequat. Praes porr nulla sit
                      amet dui lobortis, id venenatis nibh accumsan...
                    </p>
                  </div>
                  <a href="blog-detail.html" className="dt-sc-button small">
                    {" "}
                    Read More{" "}
                    <span className="fa fa-chevron-circle-right"> </span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <div className="dt-sc-hr" />
      <div className="container">
        <h2 className="dt-sc-hr-green-title">
          What our clients are saying about us
        </h2>
        <div className="column dt-sc-one-fourth first">
          <div className="dt-sc-team">
            <div className="image">
              <img className="item-mask" src="images/mask.png"    alt="" title />
              <img src="http://placehold.it/381x331"    alt="" title />
              <div className="dt-sc-image-overlay">
                {/* <a href className="link">
                  <span className="fa fa-link" />
                </a>
                <a href className="zoom">
                  <span className="fa fa-search" />
                </a> */}
              </div>
            </div>
            <div className="team-details">
              <h4> Njoroge Robert </h4>

              <p>
                {" "}
                Phasellus lorem augue, vulputate vel orci id, ultricies aliquet
                risus.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="column dt-sc-one-fourth">
          <div className="dt-sc-team">
            <div className="image">
              <img className="item-mask" src="images/mask.png"  alt="" title />
              <img src="http://placehold.it/381x331"  alt="" title />
              <div className="dt-sc-image-overlay">
                {/* <a href className="link">
                  <span className="fa fa-link" />
                </a>
                <a href className="zoom">
                  <span className="fa fa-search" />
                </a> */}
              </div>
            </div>
            <div className="team-details">
              <h4> Linda Otieno </h4>

              <p>
                {" "}
                Phasellus lorem augue, vulputate vel orci id, ultricies aliquet
                risus.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="column dt-sc-one-fourth">
          <div className="dt-sc-team">
            <div className="image">
              <img className="item-mask" src="images/mask.png" alt="" title />
              <img src="http://placehold.it/381x331" alt="" title />
              <div className="dt-sc-image-overlay">
                {/* <a href className="link">
                  <span className="fa fa-link" />
                </a>
                <a href className="zoom">
                  <span className="fa fa-search" />
                </a> */}
              </div>
            </div>
            <div className="team-details">
              <h4> Kate Kavesi </h4>

              <p>
                {" "}
                Phasellus lorem augue, vulputate vel orci id, ultricies aliquet
                risus.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="column dt-sc-one-fourth">
          <div className="dt-sc-team">
            <div className="image">
              <img className="item-mask" src="images/mask.png"    alt="" title />
              <img src="http://placehold.it/381x331"    alt="" title />
              <div className="dt-sc-image-overlay">
                {/* <a href="#" className="link">
                  <span className="fa fa-link" />
                </a>
                <a href="#" className="zoom">
                  <span className="fa fa-search" />
                </a> */}
              </div>
            </div>
            <div className="team-details">
              <h4> Kristof Mindila </h4>

              <p>
                {" "}
                Phasellus lorem augue, vulputate vel orci id, ultricies aliquet
                risus.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Featured;
