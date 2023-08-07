import React from "react";

export default function About() {
  return (
    <section className="py-[55px] md:py-[64px] lg:py-[104px]" id="about">
      <div className="container md:relative">
        <div className="md:flex md:justify-between lg:justify-start lg:gap-[30px]">
          <h2 className="title xs:mb-[20px] leading-none">
            <span className="font-thin">WHO </span>WE ARE
          </h2>
          <div className="max-w-[180px] md:max-w-[225px] lg:max-w-[292px] mdOnly:ml-auto">
            <p className="font-extralight leading-[20px] lg:leading-[24px] text-[14px] md:text-[16px] lg:text-[18px] mb-[20px] md:mb-[16px] lg:mb-[24px]">
              <span className="font-normal">a team of enthusiasts </span>
              who are fully committed to the mission of creating unforgettable
              and extraordinary trips to the most beautiful parts of the
              Carpathians. Our goal is not just to show you the natural wonders
              of the mountains, but to provide you with a deep immersion in
              their magical atmosphere.
            </p>
            <p className="font-extralight leading-[20px] lg:leading-[24px] text-[14px] md:text-[16px] lg:text-[18px]">
              <span className="font-normal">We believe </span>
              that nature has the power to inspire, strengthen character and
              provide new perspectives. Therefore, each of our tours is aimed at
              unlocking your potential, enriching your spiritual world and
              creating unforgettable memories.
            </p>
          </div>
        </div>

        <div className="xs:mt-[40px] lg:flex lg:flex-row-reverse lg:justify-between lg:mt-[72px]">
          <p className="block w-[180px] md:w-[221px] lg:w-[298px] xs:ml-auto text-[14px] md:text-[16px] lg:text-[18px] font-extralight mdOnly:absolute mdOnly:bottom-[188px] mdOnly:left-[32px] leading-[20px] lg:leading-[24px] ">
            <span className="block font-normal uppercase">
              From vacationers
            </span>
            <span className="block font-normal text-right uppercase">
              to active travelers
            </span>
            <span className="tracking-[-0.14px] md:tracking-[0.32px] lg:tracking-[2.16px]">
              we have a tour for everyone.
            </span>
          </p>
          <p className="block md:w-[463px] lg:w-[605px] text-[14px] md:text-[16px] lg:text-[18px] font-extralight leading-[20px] lg:leading-[24px] mt-[40px] md:mt-[64px] lg:mt-0 mdOnly:ml-auto">
            <span className="font-normal">We use methods </span>
            that are time-tested and proven. Our expert guides with in-depth
            knowledge of the Carpathian landscapes lead you safely through the
            mysteries of these mountains.
          </p>
        </div>
      </div>
    </section>
  );
}
