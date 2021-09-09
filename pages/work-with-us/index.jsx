import React, { Fragment } from 'react';
import Image from 'next/image';
import Layout from '../../layout';
import ContactUs from '../../components/ContactUs';
import style from './WorkWithUs.module.scss';

const WorkWithUs = () => {
  return (
    <Fragment>
      <Layout>
        <div className={style.Container}>
          <div className={style.Header}>
            <div className={style.HeaderContent}>
              <h1 className={style.Title}>Work With Us</h1>
              <p className={style.Description}>
                Our model is one of collaboration. We are constantly looking to partner with organizations that bring a
                specific area of expertise to the conversation.
              </p>
            </div>
          </div>
          <div className={style.MainSection}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <p className={style.Description}>
                    Paul has over 25 years’ experience as an economic and political strategist. He founded a multi-asset
                    class research platform View from the Peak in 2011, seeing a need for a truly global focus on the
                    interactions between public policy, economic trends, technology, and geopolitics. Paul, like many
                    China watchers, has been disappointed with the tone and substance of the debate regarding the future
                    of US-China relations for the last several years. The need for a more sensible discussion forms the
                    genesis behind the US-China Series. Prior, Paul spent 15 years in Investment Banking and Asset
                    Management
                  </p>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <Image src="/images/Network-Graphic-p-500.png" width={481} height={428} layout="responsive" />
                </div>
                <div className="col-12 mt-4 text-center">
                  <p className={`${style.Description} text-center`}>
                    If you have a message that you believe should be heard, please use the contact form below, or reach
                    out to us:
                  </p>
                  <a href="mailto:jnlcumming@uschinaseries.org" className={style.Email}>
                    info@uschinaseries.org
                  </a>
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

export default WorkWithUs;
