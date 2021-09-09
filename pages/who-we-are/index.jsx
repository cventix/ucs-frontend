import React, { Fragment } from 'react';
import Image from 'next/image';
import Layout from '../../layout';
import Testimonial from '../../components/Testimonial';
import ContactUs from '../../components/ContactUs';
import style from './WhoWeAre.module.scss';

const WhoWeAre = () => {
  return (
    <Fragment>
      <Layout>
        <div className={style.Container}>
          <div className={style.Header}>
            <div className={style.HeaderContent}>
              <h1 className={style.Title}>About Us</h1>
              <p className={style.Description}>
                Originally co-founded by Paul Krake, US-China Series was formed in early 2019 out of a desire to add
                well-needed diversity to the conversation over the direction of the US-China relationship. While
                initially initially and continually focused on gender diversity, we strive for all stakeholders to have
                a voice.
              </p>
            </div>
          </div>
          <div className={style.FounderSection}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <Image src="/images/Matt-Krake.jpeg" width={481} height={481} layout="responsive" />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <h2 className={style.FounderTitle}>Paul Krake | Founder</h2>
                  <p className={style.FounderDescription}>
                    Paul has over 25 years’ experience as an economic and political strategist. He founded a multi-asset
                    class research platform View from the Peak in 2011, seeing a need for a truly global focus on the
                    interactions between public policy, economic trends, technology, and geopolitics. Paul, like many
                    China watchers, has been disappointed with the tone and substance of the debate regarding the future
                    of US-China relations for the last several years. The need for a more sensible discussion forms the
                    genesis behind the US-China Series. Prior, Paul spent 15 years in Investment Banking and Asset
                    Management
                  </p>
                </div>
                <div className="col-12 mt-4">
                  <Testimonial
                    title=""
                    description="While the toning down of vitriol is in everyone’s interest, this is only the beginning. US-China Series is about recalibrating the debate. There is a need for a Strategic Economic Dialogue, a Strategic Technological Dialogue, a Strategic Investment Dialogue and a Strategic Diplomatic Dialogue, with all voices engaged. US-China Series aims to contribute to this."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={style.Testimonial}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <Testimonial
                    title="Testimonial"
                    description="With geopolitics and political risk constantly shaping today’s business environment, the insights and discussions sponsored by the US-China Series have become more timely and relevant than any time in the recent past. The US-China Series has been a helpful asset and resource as we continue work to help our clients... Thank you to Paul and Jonathon for their continued outreach on important topics that are setting the future’s course."
                    writer="JON SHAMES | EY"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={style.ContactUs}>
            <div className="container">
              <ContactUs />
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default WhoWeAre;
