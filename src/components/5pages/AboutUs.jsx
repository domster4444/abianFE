import { Redirect } from 'react-router-dom';

import React from 'react';

import PrincipleCard from '../1atoms/PrincipleCard';

import one from '../../img/aboutus/one.png';
import two from '../../img/aboutus/two.png';
import three from '../../img/aboutus/three.png';
import four from '../../img/aboutus/four.png';
import five from '../../img/aboutus/five.png';
import six from '../../img/aboutus/six.png';
import seven from '../../img/aboutus/seven.png';
import eight from '../../img/aboutus/eight.png';
import nine from '../../img/aboutus/nine.png';
import ten from '../../img/aboutus/ten.png';
import eleven from '../../img/aboutus/eleven.png';
import twelve from '../../img/aboutus/twelve.png';

export default function AboutUs(props) {
  console.log(props.isLoggedInProps);
  if (props.isLoggedInProps === 'false') {
    return (
      <>
        <div className="containerCenter">
          <div className="contentBlock">
            <main id="AboutUsPageMain">
              <h1 className="title poppins_bold_700">Values</h1>

              <h1 className="title  poppins_bold_700">& Principles.</h1>
              <h4 className="subTitle poppins_regular_400">
                Abian. Fluid UI Team
              </h4>

              <section id="principleCardSection">
                <PrincipleCard
                  image={one}
                  color="defaultGrey"
                  title1="We listen"
                  title2="Learn adapt"
                  title3="All the time"
                  subTitle1="No stops, no "
                  subTitle2="excuses."
                  description=" As developers,we're always looking for and listening to
                    feedback,value it,and then learning from it.We discover new
                    way to solve problems,adapt to new
                    environments,tools,knowledge etc.This is never ending process."
                />
                <PrincipleCard
                  image={two}
                  color="defaultGrey"
                  title1="We listen"
                  title2="Learn adapt"
                  title3="All the time"
                  subTitle1="No stops, no "
                  subTitle2="excuses."
                  description=" As developers,we're always looking for and listening to
                    feedback,value it,and then learning from it.We discover new
                    way to solve problems,adapt to new
                    environments,tools,knowledge etc.This is never ending process."
                />
                <PrincipleCard
                  image={three}
                  color="defaultGrey"
                  title1="We listen"
                  title2="Learn adapt"
                  title3="All the time"
                  subTitle1="No stops, no "
                  subTitle2="excuses."
                  description=" As developers,we're always looking for and listening to
                    feedback,value it,and then learning from it.We discover new
                    way to solve problems,adapt to new
                    environments,tools,knowledge etc.This is never ending process."
                />
                <PrincipleCard
                  image={four}
                  color="defaultGrey"
                  title1="We listen"
                  title2="Learn adapt"
                  title3="All the time"
                  subTitle1="No stops, no "
                  subTitle2="excuses."
                  description=" As developers,we're always looking for and listening to
                    feedback,value it,and then learning from it.We discover new
                    way to solve problems,adapt to new
                    environments,tools,knowledge etc.This is never ending process."
                />
                <PrincipleCard
                  image={five}
                  color="defaultGrey"
                  title1="We listen"
                  title2="Learn adapt"
                  title3="All the time"
                  subTitle1="No stops, no "
                  subTitle2="excuses."
                  description=" As developers,we're always looking for and listening to
                    feedback,value it,and then learning from it.We discover new
                    way to solve problems,adapt to new
                    environments,tools,knowledge etc.This is never ending process."
                />
                <PrincipleCard
                  image={six}
                  color="defaultGrey"
                  title1="We listen"
                  title2="Learn adapt"
                  title3="All the time"
                  subTitle1="No stops, no "
                  subTitle2="excuses."
                  description=" As developers,we're always looking for and listening to
                    feedback,value it,and then learning from it.We discover new
                    way to solve problems,adapt to new
                    environments,tools,knowledge etc.This is never ending process."
                />
                <PrincipleCard
                  image={seven}
                  color="defaultGrey"
                  title1="We listen"
                  title2="Learn adapt"
                  title3="All the time"
                  subTitle1="No stops, no "
                  subTitle2="excuses."
                  description=" As developers,we're always looking for and listening to
                    feedback,value it,and then learning from it.We discover new
                    way to solve problems,adapt to new
                    environments,tools,knowledge etc.This is never ending process."
                />
                <PrincipleCard
                  image={eight}
                  color="defaultGrey"
                  title1="We listen"
                  title2="Learn adapt"
                  title3="All the time"
                  subTitle1="No stops, no "
                  subTitle2="excuses."
                  description=" As developers,we're always looking for and listening to
                    feedback,value it,and then learning from it.We discover new
                    way to solve problems,adapt to new
                    environments,tools,knowledge etc.This is never ending process."
                />
                <PrincipleCard
                  image={nine}
                  color="defaultGrey"
                  title1="We listen"
                  title2="Learn adapt"
                  title3="All the time"
                  subTitle1="No stops, no "
                  subTitle2="excuses."
                  description=" As developers,we're always looking for and listening to
                    feedback,value it,and then learning from it.We discover new
                    way to solve problems,adapt to new
                    environments,tools,knowledge etc.This is never ending process."
                />
                <PrincipleCard
                  image={ten}
                  color="defaultGrey"
                  title1="We listen"
                  title2="Learn adapt"
                  title3="All the time"
                  subTitle1="No stops, no "
                  subTitle2="excuses."
                  description=" As developers,we're always looking for and listening to
                    feedback,value it,and then learning from it.We discover new
                    way to solve problems,adapt to new
                    environments,tools,knowledge etc.This is never ending process."
                />
                <PrincipleCard
                  image={eleven}
                  color="defaultGrey"
                  title1="We listen"
                  title2="Learn adapt"
                  title3="All the time"
                  subTitle1="No stops, no "
                  subTitle2="excuses."
                  description=" As developers,we're always looking for and listening to
                    feedback,value it,and then learning from it.We discover new
                    way to solve problems,adapt to new
                    environments,tools,knowledge etc.This is never ending process."
                />
                <PrincipleCard
                  image={twelve}
                  color="defaultGrey"
                  title1="We listen"
                  title2="Learn adapt"
                  title3="All the time"
                  subTitle1="No stops, no "
                  subTitle2="excuses."
                  description=" As developers,we're always looking for and listening to
                    feedback,value it,and then learning from it.We discover new
                    way to solve problems,adapt to new
                    environments,tools,knowledge etc.This is never ending process."
                />
              </section>
            </main>
          </div>
        </div>
      </>
    );
  } else {
    return <Redirect to="/welcomehome" />;
  }
}
