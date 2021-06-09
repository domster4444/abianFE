import React from 'react';
import ServiceCard from '../1atoms/ServiceCard';
import serviceLogo1 from '../../img/serviceLogo/serviceLogo1.png';
import serviceLogo2 from '../../img/serviceLogo/serviceLogo2.png';
import serviceLogo3 from '../../img/serviceLogo/serviceLogo3.png';
import serviceLogo4 from '../../img/serviceLogo/serviceLogo4.png';
import serviceLogo5 from '../../img/serviceLogo/serviceLogo5.png';
import serviceLogo6 from '../../img/serviceLogo/serviceLogo6.png';

export default function ServiceSection() {
  return (
    <section className="containerCenter" id="serviceSection">
      <div className="contentBlock">
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo1}
            offername="Call Ambulance"
          ></ServiceCard>
        </a>
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo2}
            offername="Call Ambulance"
          ></ServiceCard>
        </a>
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo3}
            offername="School Software"
          ></ServiceCard>
        </a>
        <a href="https://google.com">
          <ServiceCard logo={serviceLogo6} offername="Land Sale"></ServiceCard>
        </a>
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo4}
            offername="Rent A Room"
          ></ServiceCard>
        </a>
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo5}
            offername="Rent A Room"
          ></ServiceCard>
        </a>
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo6}
            offername="Rent A Room"
          ></ServiceCard>
        </a>
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo1}
            offername="Rent A Room"
          ></ServiceCard>
        </a>
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo1}
            offername="Rent A Room"
          ></ServiceCard>
        </a>
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo1}
            offername="Rent A Room"
          ></ServiceCard>
        </a>
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo1}
            offername="Rent A Room"
          ></ServiceCard>
        </a>
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo1}
            offername="Rent A Room"
          ></ServiceCard>
        </a>
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo1}
            offername="Rent A Room"
          ></ServiceCard>
        </a>
        <a href="https://google.com">
          <ServiceCard
            logo={serviceLogo1}
            offername="Rent A Room"
          ></ServiceCard>
        </a>
      </div>
    </section>
  );
}
