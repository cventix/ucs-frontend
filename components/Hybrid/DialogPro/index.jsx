import React from 'react';
import dialogStyles from './dialogPro.module.scss';

const DialogPro = (props) => {
  const { titleDialog, coverDialog, descriptionDialog } = props;

  return (
    <div className={dialogStyles['w-gallery-overlay-root']}>
      <div className={dialogStyles['w-gallery-overlay']}>
        <div className={dialogStyles['w-gallery-overlay__content']}>
          <div>
            <div id="w-react-css-reset-2658" style={{ height: '100%', position: 'relative', width: '100%' }}>
              <div id="w-react-css-reset-2659" style={{ height: '100%', position: 'relative', width: '100%' }}>
                <div
                  className={`${dialogStyles['w-gallery-view']} ${dialogStyles['w-css-reset']} ${dialogStyles['w-text-highlight-allowed']}`}
                >
                  <div
                    className={`${dialogStyles['w-hero-background']} ${dialogStyles['w-css-reset']} ${dialogStyles['w-css-reset-tree']}`}
                  >
                    <div className={dialogStyles['w-css-reset-tree-wrapper']}>
                      <div>
                        <div className={`${dialogStyles['w-background-wrapper']} ${dialogStyles['w-css-reset']}`}>
                          <img
                            className={`${dialogStyles['w-background-img']} ${dialogStyles['w-css-reset']}`}
                            // srcSet="https://embed-ssl.wistia.com/deliveries/e7259a63e571710b12ace9bfaeab74ed.jpg?image_crop_resized=320x169 320w, https://embed-ssl.wistia.com/deliveries/e7259a63e571710b12ace9bfaeab74ed.jpg?image_crop_resized=640x337 640w, https://embed-ssl.wistia.com/deliveries/e7259a63e571710b12ace9bfaeab74ed.jpg?image_crop_resized=960x506 960w, https://embed-ssl.wistia.com/deliveries/e7259a63e571710b12ace9bfaeab74ed.jpg?image_crop_resized=1280x675 1280w, https://embed-ssl.wistia.com/deliveries/e7259a63e571710b12ace9bfaeab74ed.jpg?image_crop_resized=1920x1012 1920w"
                            src={coverDialog}
                            alt="Video Thumbnail"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${dialogStyles['w-gallery-view__gallery-card-cover']} ${dialogStyles['w-css-reset']} ${dialogStyles['w-css-reset-tree']}`}
                  />
                  <div
                    className={`${dialogStyles['w-gallery-view__hero-content-wrapper']} ${dialogStyles['w-css-reset']}`}
                  >
                    <div
                      style={{ height: 1, left: 0, pointerEvents: 'none', position: 'absolute', top: 0, width: '100%' }}
                    />
                    <div className={`${dialogStyles['w-gallery-view__hero-content']} ${dialogStyles['w-css-reset']}`}>
                      <div className={dialogStyles['w-gallery-view__title-content']}>
                        <h1>
                          <div>{titleDialog}</div>
                        </h1>
                      </div>
                      <div className={dialogStyles['w-gallery-view__description-content']}>
                        <div className={dialogStyles['w-gallery-view__description']}>
                          <span>
                            {descriptionDialog}
                            <br />
                            March 2021
                          </span>
                        </div>
                      </div>
                      <div className={dialogStyles['w-gallery-view__button-wrapper']}>
                        <div>
                          <button className={dialogStyles['w-channel-big-button']} type="button">
                            <span style={{ display: 'inline-block', verticalAlign: 'top' }}>Play</span>
                          </button>
                        </div>
                      </div>
                      <p
                        style={{
                          color: 'rgb(255, 255, 255)',
                          fontSize: 13,
                          lineHeight: '1.5em',
                          opacity: 0,
                          textShadow: 'rgba(0, 0, 0, 0.8) 1px 1px 3px',
                          transform: 'scale(1.001)',
                          transformOrigin: '5em top 0px',
                          transition:
                            'opacity 200ms cubic-bezier(0.15, 0.51, 0.25, 1) 0s, transform 200ms cubic-bezier(0.15, 0.51, 0.25, 1) 0s',
                        }}
                      >
                        <span>&nbsp;</span>
                      </p>
                    </div>
                  </div>
                  <div className="w-css-reset w-css-reset-tree">
                    <div
                      className="w-gallery-view__body w-gallery-view__grid w-css-reset w-css-reset-tree"
                      style={{
                        color: 'rgb(255, 255, 255)',
                        fontFamily: 'Roboto, Helvetica, sans-serif',
                        fontSize: 14,
                        position: 'relative',
                      }}
                    >
                      <div className="w-gallery-view__section" style={{ position: 'relative', paddingTop: '31.84px' }}>
                        <div
                          className="w-gallery-view__video-cards"
                          style={{ display: 'block', paddingLeft: '31.84px' }}
                        >
                          <div style={{ display: 'block', marginBottom: '15.92px', whiteSpace: 'nowrap' }}>
                            <div style={{ display: 'inline-block', marginRight: '31.84px', verticalAlign: 'top' }}>
                              <a
                                className="w-video-card"
                                href="https://www.uschinaseries.com?wchannelid=qbllwxbq04&wmediaid=fjn6nendr7"
                                style={{
                                  cursor: 'pointer',
                                  display: 'block',
                                  flex: '0 0 auto',
                                  outline: 'currentcolor none medium',
                                  position: 'relative',
                                  width: 223,
                                }}
                                tabIndex={0}
                              >
                                <div style={{ transform: 'scale(1.001)', transition: 'transform 100ms ease 0s' }}>
                                  <div
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      transform: 'translateY(0.001%)',
                                      transition: 'transform 5000ms cubic-bezier(0, 0.8, 0, 1) 100ms',
                                    }}
                                  >
                                    <div
                                      className="w-video-card__thumbnail-wrapper"
                                      style={{
                                        flex: '0 0 auto',
                                        height: 125,
                                        overflow: 'hidden',
                                        position: 'relative',
                                      }}
                                    >
                                      <div
                                        className="wistia_popover"
                                        style={{ height: '100%', position: 'relative', width: '100%' }}
                                      >
                                        <div
                                          className="wistia_poster"
                                          style={{
                                            height: '100%',
                                            left: 0,
                                            position: 'absolute',
                                            top: 0,
                                            width: '100%',
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div style={{ backgroundColor: 'transparent', flex: '0 1 auto', paddingTop: 11 }}>
                                      <h3
                                        style={{
                                          color: 'rgb(255, 255, 255)',
                                          fontFamily: '"Roboto", WistiaPlayerInter, Helvetica, sans-serif',
                                          fontWeight: 400,
                                          margin: 0,
                                          display: '-webkit-box',
                                          fontSize: 13,
                                          lineHeight: '1.25em',
                                          overflow: 'hidden',
                                          position: 'relative',
                                          MozBoxOrient: 'vertical',
                                          WebkitLineClamp: 2,
                                          whiteSpace: 'normal',
                                        }}
                                        title="Overview of Graticule Asset Management - Adam Levinson"
                                      >
                                        Overview of Graticule Asset Management - Adam Levinson
                                      </h3>
                                    </div>
                                    <div style={{ position: 'relative' }}>
                                      <div
                                        style={{
                                          boxSizing: 'content-box',
                                          height: '3.5em',
                                          marginTop: '0.5em',
                                          paddingBottom: '1em',
                                        }}
                                      >
                                        <h4
                                          className="w-video-card__description"
                                          style={{
                                            color: 'rgb(255, 255, 255)',
                                            fontFamily: '"Roboto", WistiaPlayerInter, Helvetica, sans-serif',
                                            fontWeight: 400,
                                            margin: 0,
                                            display: '-webkit-box',
                                            fontSize: 13,
                                            opacity: 0,
                                            overflow: 'hidden',
                                            transition: 'opacity 0ms ease 0s',
                                            MozBoxOrient: 'vertical',
                                            WebkitLineClamp: 3,
                                            whiteSpace: 'normal',
                                          }}
                                          title="An overview of Graticule Asset Management - Adam Levinson"
                                        >
                                          An overview of Graticule Asset Management - Adam Levinson
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '31.84px', verticalAlign: 'top' }}>
                              <a
                                className="w-video-card"
                                href="https://www.uschinaseries.com?wchannelid=qbllwxbq04&wmediaid=sfi99e24cl"
                                style={{
                                  cursor: 'pointer',
                                  display: 'block',
                                  flex: '0 0 auto',
                                  outline: 'currentcolor none medium',
                                  position: 'relative',
                                  width: 223,
                                }}
                                tabIndex={0}
                              >
                                <div style={{ transform: 'scale(1.001)', transition: 'transform 100ms ease 0s' }}>
                                  <div
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      transform: 'translateY(0.001%)',
                                      transition: 'transform 5000ms cubic-bezier(0, 0.8, 0, 1) 100ms',
                                    }}
                                  >
                                    <div
                                      className="w-video-card__thumbnail-wrapper"
                                      style={{
                                        flex: '0 0 auto',
                                        height: 125,
                                        overflow: 'hidden',
                                        position: 'relative',
                                      }}
                                    >
                                      <div
                                        className="wistia_popover"
                                        style={{ height: '100%', position: 'relative', width: '100%' }}
                                      >
                                        <div
                                          className="wistia_poster"
                                          style={{
                                            height: '100%',
                                            left: 0,
                                            position: 'absolute',
                                            top: 0,
                                            width: '100%',
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div style={{ backgroundColor: 'transparent', flex: '0 1 auto', paddingTop: 11 }}>
                                      <h3
                                        style={{
                                          color: 'rgb(255, 255, 255)',
                                          fontFamily: '"Roboto", WistiaPlayerInter, Helvetica, sans-serif',
                                          fontWeight: 400,
                                          margin: 0,
                                          display: '-webkit-box',
                                          fontSize: 13,
                                          lineHeight: '1.25em',
                                          overflow: 'hidden',
                                          position: 'relative',
                                          MozBoxOrient: 'vertical',
                                          WebkitLineClamp: 2,
                                          whiteSpace: 'normal',
                                        }}
                                        title="Multi-asset solutions within Schroders - Patrick Brenner"
                                      >
                                        Multi-asset solutions within Schroders - Patrick Brenner
                                      </h3>
                                    </div>
                                    <div style={{ position: 'relative' }}>
                                      <div
                                        style={{
                                          boxSizing: 'content-box',
                                          height: '3.5em',
                                          marginTop: '0.5em',
                                          paddingBottom: '1em',
                                        }}
                                      >
                                        <h4
                                          className="w-video-card__description"
                                          style={{
                                            color: 'rgb(255, 255, 255)',
                                            fontFamily: '"Roboto", WistiaPlayerInter, Helvetica, sans-serif',
                                            fontWeight: 400,
                                            margin: 0,
                                            display: '-webkit-box',
                                            fontSize: 13,
                                            opacity: 0,
                                            overflow: 'hidden',
                                            transition: 'opacity 0ms ease 0s',
                                            MozBoxOrient: 'vertical',
                                            WebkitLineClamp: 3,
                                            whiteSpace: 'normal',
                                          }}
                                          title="An overview of multi-asset solutions with a traditional asset  manager such as Schroders - Patrick Brenner"
                                        >
                                          An overview of multi-asset solutions with a traditional asset manager such as
                                          Schroders - Patrick Brenner
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '31.84px', verticalAlign: 'top' }}>
                              <a
                                className="w-video-card"
                                href="https://www.uschinaseries.com?wchannelid=qbllwxbq04&wmediaid=cvf4icd6ca"
                                style={{
                                  cursor: 'pointer',
                                  display: 'block',
                                  flex: '0 0 auto',
                                  outline: 'currentcolor none medium',
                                  position: 'relative',
                                  width: 223,
                                }}
                                tabIndex={0}
                              >
                                <div style={{ transform: 'scale(1.001)', transition: 'transform 100ms ease 0s' }}>
                                  <div
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      transform: 'translateY(0.001%)',
                                      transition: 'transform 5000ms cubic-bezier(0, 0.8, 0, 1) 100ms',
                                    }}
                                  >
                                    <div
                                      className="w-video-card__thumbnail-wrapper"
                                      style={{
                                        flex: '0 0 auto',
                                        height: 125,
                                        overflow: 'hidden',
                                        position: 'relative',
                                      }}
                                    >
                                      <div
                                        className="wistia_popover"
                                        style={{ height: '100%', position: 'relative', width: '100%' }}
                                      >
                                        <div
                                          className="wistia_poster"
                                          style={{
                                            height: '100%',
                                            left: 0,
                                            position: 'absolute',
                                            top: 0,
                                            width: '100%',
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div style={{ backgroundColor: 'transparent', flex: '0 1 auto', paddingTop: 11 }}>
                                      <h3
                                        style={{
                                          color: 'rgb(255, 255, 255)',
                                          fontFamily: '"Roboto", WistiaPlayerInter, Helvetica, sans-serif',
                                          fontWeight: 400,
                                          margin: 0,
                                          display: '-webkit-box',
                                          fontSize: 13,
                                          lineHeight: '1.25em',
                                          overflow: 'hidden',
                                          position: 'relative',
                                          MozBoxOrient: 'vertical',
                                          WebkitLineClamp: 2,
                                          whiteSpace: 'normal',
                                        }}
                                        title="Macro investing with zero interest rates. - Adam Levinson"
                                      >
                                        Macro investing with zero interest rates. - Adam Levinson
                                      </h3>
                                    </div>
                                    <div style={{ position: 'relative' }}>
                                      <div
                                        style={{
                                          boxSizing: 'content-box',
                                          height: '3.5em',
                                          marginTop: '0.5em',
                                          paddingBottom: '1em',
                                        }}
                                      >
                                        <h4
                                          className="w-video-card__description"
                                          style={{
                                            color: 'rgb(255, 255, 255)',
                                            fontFamily: '"Roboto", WistiaPlayerInter, Helvetica, sans-serif',
                                            fontWeight: 400,
                                            margin: 0,
                                            display: '-webkit-box',
                                            fontSize: 13,
                                            opacity: 0,
                                            overflow: 'hidden',
                                            transition: 'opacity 0ms ease 0s',
                                            MozBoxOrient: 'vertical',
                                            WebkitLineClamp: 3,
                                            whiteSpace: 'normal',
                                          }}
                                          title="How has macro investing changed in the era of zero interest rates? Adam Levinson"
                                        >
                                          How has macro investing changed in the era of zero interest rates? Adam
                                          Levinson
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div style={{ display: 'block', marginBottom: '15.92px', whiteSpace: 'nowrap' }}>
                            <div style={{ display: 'inline-block', marginRight: '31.84px', verticalAlign: 'top' }}>
                              <a
                                className="w-video-card"
                                href="https://www.uschinaseries.com?wchannelid=qbllwxbq04&wmediaid=vfrfftyy4v"
                                style={{
                                  cursor: 'pointer',
                                  display: 'block',
                                  flex: '0 0 auto',
                                  outline: 'currentcolor none medium',
                                  position: 'relative',
                                  width: 223,
                                }}
                                tabIndex={0}
                              >
                                <div style={{ transform: 'scale(1.001)', transition: 'transform 100ms ease 0s' }}>
                                  <div
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      transform: 'translateY(0.001%)',
                                      transition: 'transform 5000ms cubic-bezier(0, 0.8, 0, 1) 100ms',
                                    }}
                                  >
                                    <div
                                      className="w-video-card__thumbnail-wrapper"
                                      style={{
                                        flex: '0 0 auto',
                                        height: 125,
                                        overflow: 'hidden',
                                        position: 'relative',
                                      }}
                                    >
                                      <div
                                        className="wistia_popover"
                                        style={{ height: '100%', position: 'relative', width: '100%' }}
                                      >
                                        <div
                                          className="wistia_poster"
                                          style={{
                                            height: '100%',
                                            left: 0,
                                            position: 'absolute',
                                            top: 0,
                                            width: '100%',
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div style={{ backgroundColor: 'transparent', flex: '0 1 auto', paddingTop: 11 }}>
                                      <h3
                                        style={{
                                          color: 'rgb(255, 255, 255)',
                                          fontFamily: '"Roboto", WistiaPlayerInter, Helvetica, sans-serif',
                                          fontWeight: 400,
                                          margin: 0,
                                          display: '-webkit-box',
                                          fontSize: 13,
                                          lineHeight: '1.25em',
                                          overflow: 'hidden',
                                          position: 'relative',
                                          MozBoxOrient: 'vertical',
                                          WebkitLineClamp: 2,
                                          whiteSpace: 'normal',
                                        }}
                                        title="Underexposure to China. The great disconnect - Adam Levinson"
                                      >
                                        Underexposure to China. The great disconnect - Adam Levinson
                                      </h3>
                                    </div>
                                    <div style={{ position: 'relative' }}>
                                      <div
                                        style={{
                                          boxSizing: 'content-box',
                                          height: '3.5em',
                                          marginTop: '0.5em',
                                          paddingBottom: '1em',
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '31.84px', verticalAlign: 'top' }}>
                              <a
                                className="w-video-card"
                                href="https://www.uschinaseries.com?wchannelid=qbllwxbq04&wmediaid=36ajy4990u"
                                style={{
                                  cursor: 'pointer',
                                  display: 'block',
                                  flex: '0 0 auto',
                                  outline: 'currentcolor none medium',
                                  position: 'relative',
                                  width: 223,
                                }}
                                tabIndex={0}
                              >
                                <div style={{ transform: 'scale(1.001)', transition: 'transform 100ms ease 0s' }}>
                                  <div
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      transform: 'translateY(0.001%)',
                                      transition: 'transform 5000ms cubic-bezier(0, 0.8, 0, 1) 100ms',
                                    }}
                                  >
                                    <div
                                      className="w-video-card__thumbnail-wrapper"
                                      style={{
                                        flex: '0 0 auto',
                                        height: 125,
                                        overflow: 'hidden',
                                        position: 'relative',
                                      }}
                                    >
                                      <div
                                        className="wistia_popover"
                                        style={{ height: '100%', position: 'relative', width: '100%' }}
                                      >
                                        <div
                                          className="wistia_poster"
                                          style={{
                                            height: '100%',
                                            left: 0,
                                            position: 'absolute',
                                            top: 0,
                                            width: '100%',
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div style={{ backgroundColor: 'transparent', flex: '0 1 auto', paddingTop: 11 }}>
                                      <h3
                                        style={{
                                          color: 'rgb(255, 255, 255)',
                                          fontFamily: '"Roboto", WistiaPlayerInter, Helvetica, sans-serif',
                                          fontWeight: 400,
                                          margin: 0,
                                          display: '-webkit-box',
                                          fontSize: 13,
                                          lineHeight: '1.25em',
                                          overflow: 'hidden',
                                          position: 'relative',
                                          MozBoxOrient: 'vertical',
                                          WebkitLineClamp: 2,
                                          whiteSpace: 'normal',
                                        }}
                                        title="The impact of volatility versus duration as a hedging strategy"
                                      >
                                        The impact of volatility versus duration as a hedging strategy
                                      </h3>
                                    </div>
                                    <div style={{ position: 'relative' }}>
                                      <div
                                        style={{
                                          boxSizing: 'content-box',
                                          height: '3.5em',
                                          marginTop: '0.5em',
                                          paddingBottom: '1em',
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '31.84px', verticalAlign: 'top' }}>
                              <a
                                className="w-video-card"
                                href="https://www.uschinaseries.com?wchannelid=qbllwxbq04&wmediaid=n08cznuwje"
                                style={{
                                  cursor: 'pointer',
                                  display: 'block',
                                  flex: '0 0 auto',
                                  outline: 'currentcolor none medium',
                                  position: 'relative',
                                  width: 223,
                                }}
                                tabIndex={0}
                              >
                                <div style={{ transform: 'scale(1.001)', transition: 'transform 100ms ease 0s' }}>
                                  <div
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      transform: 'translateY(0.001%)',
                                      transition: 'transform 5000ms cubic-bezier(0, 0.8, 0, 1) 100ms',
                                    }}
                                  >
                                    <div
                                      className="w-video-card__thumbnail-wrapper"
                                      style={{
                                        flex: '0 0 auto',
                                        height: 125,
                                        overflow: 'hidden',
                                        position: 'relative',
                                      }}
                                    >
                                      <div
                                        className="wistia_popover"
                                        style={{ height: '100%', position: 'relative', width: '100%' }}
                                      >
                                        <div
                                          className="wistia_poster"
                                          style={{
                                            height: '100%',
                                            left: 0,
                                            position: 'absolute',
                                            top: 0,
                                            width: '100%',
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div style={{ backgroundColor: 'transparent', flex: '0 1 auto', paddingTop: 11 }}>
                                      <h3
                                        style={{
                                          color: 'rgb(255, 255, 255)',
                                          fontFamily: '"Roboto", WistiaPlayerInter, Helvetica, sans-serif',
                                          fontWeight: 400,
                                          margin: 0,
                                          display: '-webkit-box',
                                          fontSize: 13,
                                          lineHeight: '1.25em',
                                          overflow: 'hidden',
                                          position: 'relative',
                                          MozBoxOrient: 'vertical',
                                          WebkitLineClamp: 2,
                                          whiteSpace: 'normal',
                                        }}
                                        title="Will tighter Asian policy lead to equity underperformance?"
                                      >
                                        Will tighter Asian policy lead to equity underperformance?
                                      </h3>
                                    </div>
                                    <div style={{ position: 'relative' }}>
                                      <div
                                        style={{
                                          boxSizing: 'content-box',
                                          height: '3.5em',
                                          marginTop: '0.5em',
                                          paddingBottom: '1em',
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div style={{ display: 'block', marginBottom: '15.92px', whiteSpace: 'nowrap' }}>
                            <div style={{ display: 'inline-block', marginRight: '31.84px', verticalAlign: 'top' }}>
                              <a
                                className="w-video-card"
                                href="https://www.uschinaseries.com?wchannelid=qbllwxbq04&wmediaid=ir4hs879z5"
                                style={{
                                  cursor: 'pointer',
                                  display: 'block',
                                  flex: '0 0 auto',
                                  outline: 'currentcolor none medium',
                                  position: 'relative',
                                  width: 223,
                                }}
                                tabIndex={0}
                              >
                                <div style={{ transform: 'scale(1.001)', transition: 'transform 100ms ease 0s' }}>
                                  <div
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      transform: 'translateY(0.001%)',
                                      transition: 'transform 5000ms cubic-bezier(0, 0.8, 0, 1) 100ms',
                                    }}
                                  >
                                    <div
                                      className="w-video-card__thumbnail-wrapper"
                                      style={{
                                        flex: '0 0 auto',
                                        height: 125,
                                        overflow: 'hidden',
                                        position: 'relative',
                                      }}
                                    >
                                      <div
                                        className="wistia_popover"
                                        style={{ height: '100%', position: 'relative', width: '100%' }}
                                      >
                                        <div
                                          className="wistia_poster"
                                          style={{
                                            height: '100%',
                                            left: 0,
                                            position: 'absolute',
                                            top: 0,
                                            width: '100%',
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div style={{ backgroundColor: 'transparent', flex: '0 1 auto', paddingTop: 11 }}>
                                      <h3
                                        style={{
                                          color: 'rgb(255, 255, 255)',
                                          fontFamily: '"Roboto", WistiaPlayerInter, Helvetica, sans-serif',
                                          fontWeight: 400,
                                          margin: 0,
                                          display: '-webkit-box',
                                          fontSize: 13,
                                          lineHeight: '1.25em',
                                          overflow: 'hidden',
                                          position: 'relative',
                                          MozBoxOrient: 'vertical',
                                          WebkitLineClamp: 2,
                                          whiteSpace: 'normal',
                                        }}
                                        title="Why is now the time for Asian equity to shine?"
                                      >
                                        Why is now the time for Asian equity to shine?
                                      </h3>
                                    </div>
                                    <div style={{ position: 'relative' }}>
                                      <div
                                        style={{
                                          boxSizing: 'content-box',
                                          height: '3.5em',
                                          marginTop: '0.5em',
                                          paddingBottom: '1em',
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '31.84px', verticalAlign: 'top' }}>
                              <a
                                className="w-video-card"
                                href="https://www.uschinaseries.com?wchannelid=qbllwxbq04&wmediaid=fuiaoqgfkg"
                                style={{
                                  cursor: 'pointer',
                                  display: 'block',
                                  flex: '0 0 auto',
                                  outline: 'currentcolor none medium',
                                  position: 'relative',
                                  width: 223,
                                }}
                                tabIndex={0}
                              >
                                <div style={{ transform: 'scale(1.001)', transition: 'transform 100ms ease 0s' }}>
                                  <div
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      transform: 'translateY(0.001%)',
                                      transition: 'transform 5000ms cubic-bezier(0, 0.8, 0, 1) 100ms',
                                    }}
                                  >
                                    <div
                                      className="w-video-card__thumbnail-wrapper"
                                      style={{
                                        flex: '0 0 auto',
                                        height: 125,
                                        overflow: 'hidden',
                                        position: 'relative',
                                      }}
                                    >
                                      <div
                                        className="wistia_popover"
                                        style={{ height: '100%', position: 'relative', width: '100%' }}
                                      >
                                        <div
                                          className="wistia_poster"
                                          style={{
                                            height: '100%',
                                            left: 0,
                                            position: 'absolute',
                                            top: 0,
                                            width: '100%',
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div style={{ backgroundColor: 'transparent', flex: '0 1 auto', paddingTop: 11 }}>
                                      <h3
                                        style={{
                                          color: 'rgb(255, 255, 255)',
                                          fontFamily: '"Roboto", WistiaPlayerInter, Helvetica, sans-serif',
                                          fontWeight: 400,
                                          margin: 0,
                                          display: '-webkit-box',
                                          fontSize: 13,
                                          lineHeight: '1.25em',
                                          overflow: 'hidden',
                                          position: 'relative',
                                          MozBoxOrient: 'vertical',
                                          WebkitLineClamp: 2,
                                          whiteSpace: 'normal',
                                        }}
                                        title="The bull case Chinese sovereign fixed income"
                                      >
                                        The bull case Chinese sovereign fixed income
                                      </h3>
                                    </div>
                                    <div style={{ position: 'relative' }}>
                                      <div
                                        style={{
                                          boxSizing: 'content-box',
                                          height: '3.5em',
                                          marginTop: '0.5em',
                                          paddingBottom: '1em',
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '31.84px', verticalAlign: 'top' }}>
                              <a
                                className="w-video-card"
                                href="https://www.uschinaseries.com?wchannelid=qbllwxbq04&wmediaid=elan6esytj"
                                style={{
                                  cursor: 'pointer',
                                  display: 'block',
                                  flex: '0 0 auto',
                                  outline: 'currentcolor none medium',
                                  position: 'relative',
                                  width: 223,
                                }}
                                tabIndex={0}
                              >
                                <div style={{ transform: 'scale(1.001)', transition: 'transform 100ms ease 0s' }}>
                                  <div
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      transform: 'translateY(0.001%)',
                                      transition: 'transform 5000ms cubic-bezier(0, 0.8, 0, 1) 100ms',
                                    }}
                                  >
                                    <div
                                      className="w-video-card__thumbnail-wrapper"
                                      style={{
                                        flex: '0 0 auto',
                                        height: 125,
                                        overflow: 'hidden',
                                        position: 'relative',
                                      }}
                                    >
                                      <div
                                        className="wistia_popover"
                                        style={{ height: '100%', position: 'relative', width: '100%' }}
                                      >
                                        <div
                                          className="wistia_poster"
                                          style={{
                                            height: '100%',
                                            left: 0,
                                            position: 'absolute',
                                            top: 0,
                                            width: '100%',
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div style={{ backgroundColor: 'transparent', flex: '0 1 auto', paddingTop: 11 }}>
                                      <h3
                                        style={{
                                          color: 'rgb(255, 255, 255)',
                                          fontFamily: '"Roboto", WistiaPlayerInter, Helvetica, sans-serif',
                                          fontWeight: 400,
                                          margin: 0,
                                          display: '-webkit-box',
                                          fontSize: 13,
                                          lineHeight: '1.25em',
                                          overflow: 'hidden',
                                          position: 'relative',
                                          MozBoxOrient: 'vertical',
                                          WebkitLineClamp: 2,
                                          whiteSpace: 'normal',
                                        }}
                                        title="The role of cryptocurrencies within Asian portfolios"
                                      >
                                        The role of cryptocurrencies within Asian portfolios
                                      </h3>
                                    </div>
                                    <div style={{ position: 'relative' }}>
                                      <div
                                        style={{
                                          boxSizing: 'content-box',
                                          height: '3.5em',
                                          marginTop: '0.5em',
                                          paddingBottom: '1em',
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div style={{ display: 'block', marginBottom: '15.92px', whiteSpace: 'nowrap' }}>
                            <div style={{ display: 'inline-block', marginRight: '31.84px', verticalAlign: 'top' }}>
                              <a
                                className="w-video-card"
                                href="https://www.uschinaseries.com?wchannelid=qbllwxbq04&wmediaid=47xx0qjp7b"
                                style={{
                                  cursor: 'pointer',
                                  display: 'block',
                                  flex: '0 0 auto',
                                  outline: 'currentcolor none medium',
                                  position: 'relative',
                                  width: 223,
                                }}
                                tabIndex={0}
                              >
                                <div style={{ transform: 'scale(1.001)', transition: 'transform 100ms ease 0s' }}>
                                  <div
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      transform: 'translateY(0.001%)',
                                      transition: 'transform 5000ms cubic-bezier(0, 0.8, 0, 1) 100ms',
                                    }}
                                  >
                                    <div
                                      className="w-video-card__thumbnail-wrapper"
                                      style={{
                                        flex: '0 0 auto',
                                        height: 125,
                                        overflow: 'hidden',
                                        position: 'relative',
                                      }}
                                    >
                                      <div
                                        className="wistia_popover"
                                        style={{ height: '100%', position: 'relative', width: '100%' }}
                                      >
                                        <div
                                          className="wistia_poster"
                                          style={{
                                            height: '100%',
                                            left: 0,
                                            position: 'absolute',
                                            top: 0,
                                            width: '100%',
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div style={{ backgroundColor: 'transparent', flex: '0 1 auto', paddingTop: 11 }}>
                                      <h3
                                        style={{
                                          color: 'rgb(255, 255, 255)',
                                          fontFamily: '"Roboto", WistiaPlayerInter, Helvetica, sans-serif',
                                          fontWeight: 400,
                                          margin: 0,
                                          display: '-webkit-box',
                                          fontSize: 13,
                                          lineHeight: '1.25em',
                                          overflow: 'hidden',
                                          position: 'relative',
                                          MozBoxOrient: 'vertical',
                                          WebkitLineClamp: 2,
                                          whiteSpace: 'normal',
                                        }}
                                        title="US-China Tensions: Enhances or diminishes opportunities?"
                                      >
                                        US-China Tensions: Enhances or diminishes opportunities?
                                      </h3>
                                    </div>
                                    <div style={{ position: 'relative' }}>
                                      <div
                                        style={{
                                          boxSizing: 'content-box',
                                          height: '3.5em',
                                          marginTop: '0.5em',
                                          paddingBottom: '1em',
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '31.84px', verticalAlign: 'top' }}>
                              <a
                                className="w-video-card"
                                href="https://www.uschinaseries.com?wchannelid=qbllwxbq04&wmediaid=likcd72a6g"
                                style={{
                                  cursor: 'pointer',
                                  display: 'block',
                                  flex: '0 0 auto',
                                  outline: 'currentcolor none medium',
                                  position: 'relative',
                                  width: 223,
                                }}
                                tabIndex={0}
                              >
                                <div style={{ transform: 'scale(1.001)', transition: 'transform 100ms ease 0s' }}>
                                  <div
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      transform: 'translateY(0.001%)',
                                      transition: 'transform 5000ms cubic-bezier(0, 0.8, 0, 1) 100ms',
                                    }}
                                  >
                                    <div
                                      className="w-video-card__thumbnail-wrapper"
                                      style={{
                                        flex: '0 0 auto',
                                        height: 125,
                                        overflow: 'hidden',
                                        position: 'relative',
                                      }}
                                    >
                                      <div
                                        className="wistia_popover"
                                        style={{ height: '100%', position: 'relative', width: '100%' }}
                                      >
                                        <div
                                          className="wistia_poster"
                                          style={{
                                            height: '100%',
                                            left: 0,
                                            position: 'absolute',
                                            top: 0,
                                            width: '100%',
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div style={{ backgroundColor: 'transparent', flex: '0 1 auto', paddingTop: 11 }}>
                                      <h3
                                        style={{
                                          color: 'rgb(255, 255, 255)',
                                          fontFamily: '"Roboto", WistiaPlayerInter, Helvetica, sans-serif',
                                          fontWeight: 400,
                                          margin: 0,
                                          display: '-webkit-box',
                                          fontSize: 13,
                                          lineHeight: '1.25em',
                                          overflow: 'hidden',
                                          position: 'relative',
                                          MozBoxOrient: 'vertical',
                                          WebkitLineClamp: 2,
                                          whiteSpace: 'normal',
                                        }}
                                        title="The outlook for Asian macro and multi-asset opportunities."
                                      >
                                        The outlook for Asian macro and multi-asset opportunities.
                                      </h3>
                                    </div>
                                    <div style={{ position: 'relative' }}>
                                      <div
                                        style={{
                                          boxSizing: 'content-box',
                                          height: '3.5em',
                                          marginTop: '0.5em',
                                          paddingBottom: '1em',
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="w-gallery-overlay__close-button"
          style={{
            background: 'transparent none repeat scroll 0% 0%',
            border: '0px none',
            cursor: 'pointer',
            height: 20,
            outline: 'currentcolor none medium',
            padding: 2,
            width: 20,
            display: 'block',
            position: 'absolute',
            right: 30,
            top: 30,
          }}
          type="button"
          data-test="close-button"
        >
          <svg viewBox="0 0 18 18">
            <line
              style={{ stroke: 'rgb(255, 255, 255)', strokeWidth: 3, strokeLinecap: 'round' }}
              x1="1.5"
              y1="1.5"
              x2="16.5"
              y2="16.5"
            />
            <line
              style={{ stroke: 'rgb(255, 255, 255)', strokeWidth: 3, strokeLinecap: 'round' }}
              x1="16.5"
              y1="1.5"
              x2="1.5"
              y2="16.5"
            />
          </svg>
        </button>
      </div>
      <div />
    </div>
  );
};

DialogPro.propTypes = {};
DialogPro.defaultProps = {
  titleDialog: 'The Future of Asset Management: Macro and Multi-Asset',
  coverDialog:
    'https://embed-ssl.wistia.com/deliveries/e7259a63e571710b12ace9bfaeab74ed.jpg?image_crop_resized=1920x1012',
  descriptionDialog: `China's economic dominance has been a vital input into assessments of global macro opportunities for many years. Yet, Chinese assets remain tangential in most global macro
  portfolios. Will the RMB, Chinese sovereign debt, and credit, and of course, a volatile
  equity market garner more attention as opportunities wane in the western world? Is the
  digital RMB a new frontier for the macro community? My conversation with Patrick Brenner
  (Schroders) and Adam Levinson (Graticule) focuses on opportunities sets for both macro and
  multi-asset investors',`,
};

export default DialogPro;
