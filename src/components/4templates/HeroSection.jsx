import React from 'react';
import FeaTag from '../1atoms/FeaTag';
import GhostTag from '../1atoms/GhostTag';

import heroSectionIllustrator from '../../img/illustrators/heroSectionIllustrator.png';
import todo from '../../img/todo.png';
import hand from '../../img/hand.png';

import VideoModalBtn from '../1atoms/VideoModalBtn';

export default function HeroSection() {
  return (
    <>
      <div className="containerCenter">
        <div className="contentBlock">
          <div id="heroSection" className="centerContainer">
            <article id="leftBlock">
              <h1 className="poppins_light_300">
                Let's find you
                <br />
                the
                <span className="poppins_semibold_600"> Best Services</span>
              </h1>

              <div className="flexContainer">
                <FeaTag logo={todo} />
                <FeaTag logo={hand} />
              </div>
            </article>
            <article id="rightBlock">
              <div id="left">
                <GhostTag />

                <h3 className="poppins_regular_400">
                  A commitment
                  <br /> to our customers
                </h3>

                <button
                  className="blueBtn cursor hint--right hint--rounded hint--bounce"
                  aria-label="Thank you!"
                >
                  Know more
                </button>
                <VideoModalBtn />
              </div>
              <div id="right">
                <img src={heroSectionIllustrator} alt="an illustrator" />
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
