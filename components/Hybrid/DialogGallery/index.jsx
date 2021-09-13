import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from '../../Infrastructure/Button';
import dialogStyles from './dialogGallery.module.scss';
const DialogGallery = () => {
  return (
    <div className={dialogStyles['container']}>
      <div className={dialogStyles['overlay-content']}>
        <div className={dialogStyles['wrapper']}>
          <div className={dialogStyles['background']}>
            <div className={dialogStyles['img-wrapper']}>
              <img
                src="https://embed-ssl.wistia.com/deliveries/e7259a63e571710b12ace9bfaeab74ed.jpg?image_crop_resized=1920x1012"
                alt="video-thumbnail"
              />
            </div>
          </div>
          <div className={dialogStyles['background-cover']} />
          <div className={dialogStyles['content-wrapper']}>
            <div style={{ height: 1, left: 0, pointerEvents: 'none', position: 'absolute', top: 0, width: '100%' }} />
            <div className={dialogStyles['content']}>
              <div className={dialogStyles['title-holder']}>
                <h1>The Future of Asset Management: Macro and Multi-Asset</h1>
              </div>
              <div className={dialogStyles['desc-holder']}>
                <div className={dialogStyles['description']}>
                  <span>
                    Chinas economic dominance has been a vital input into assessments of global macro opportunities for
                    many years. Yet, Chinese assets remain tangential in most global macro portfolios. Will the RMB,
                    Chinese sovereign debt, and credit, and of course, a volatile equity market garner more attention as
                    opportunities wane in the western world? Is the digital RMB a new frontier for the macro community?
                    My conversation with Patrick Brenner (Schroders) and Adam Levinson (Graticule) focuses on
                    opportunities sets for both macro and multi-asset investors
                  </span>
                </div>
              </div>
              <div className={dialogStyles['button-holder']}>
                <div className={dialogStyles['button-wrapper']}>
                  <Button
                    type="button"
                    className={dialogStyles['play-button']}
                    innerText="Play"
                    handleClick={() => {}}
                  ></Button>
                </div>
              </div>
            </div>
          </div>
          <div className={`${dialogStyles['gallery-list']} ${dialogStyles['global-style']}`}>
            <div className={dialogStyles['gallery-list__body']}>
              <div className={dialogStyles['gallery-list__view-section']}>
                <div className={dialogStyles['gallery-list__video-cards']}>
                  <Row className={dialogStyles['gallery-list_row-cards']}>
                    <Col xs={6} md={3} className={dialogStyles['gallery-list_column-cards']}>
                      <a href="#" className={dialogStyles['video-card']}>
                        <div className={dialogStyles['video-card-wrapper']}>
                          <div className={dialogStyles['video-card-inner']}>
                            <div
                              className={dialogStyles['video-card_thumbnail-wrapper']}
                              style={{ flex: '0 0 auto', height: 147, overflow: 'hidden', position: 'relative' }}
                            >
                              <div className={dialogStyles['popover-video']}>
                                <div className={dialogStyles['popover-video__wrapper']}>
                                  <div className={dialogStyles['popover-video__poster']}>
                                    <div
                                      className={`${dialogStyles['poster-thumbnail']} ${dialogStyles['global-style']}`}
                                      data-handle="posterThumbnail"
                                    >
                                      <img
                                        alt=""
                                        className={dialogStyles['global-style']}
                                        srcSet="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-160.webp 160w, https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp 320w"
                                        src="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp"
                                      />
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-cover']} ${dialogStyles['global-style']}`}
                                      data-handle="video"
                                    >
                                      <div className={dialogStyles['video-cover-wrapper']}>
                                        <video
                                          id="wistia_simple_video_3110"
                                          crossOrigin="anonymous"
                                          poster="https://fast.wistia.com/assets/images/blank.gif"
                                          aria-label="Video"
                                          defaultplaybackrate={1}
                                          src="blob:https://www.uschinaseries.com/7acfad15-29c2-428c-868a-a4b3c9ac95c4"
                                          controlslist="nodownload"
                                          playsInline
                                          muted
                                          loop
                                          preload="metadata"
                                          type="video/m3u8"
                                          x-webkit-airplay="allow"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-slider']} ${dialogStyles['global-style']}`}
                                      data-handle="progressIndicator"
                                    >
                                      <div className={dialogStyles['video-slider-wrapper']}>
                                        <div className={dialogStyles['video-slider-white']}>
                                          <div
                                            className={dialogStyles['video-slider-blue']}
                                            style={{
                                              width: '73%',
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-button']} ${dialogStyles['global-style']}`}
                                      data-handle="playButton"
                                    >
                                      <div
                                        className={dialogStyles['video-play-button__wrapper']}
                                        style={{
                                          height: '100%',
                                          left: 0,
                                          opacity: 0,
                                          position: 'absolute',
                                          top: 0,
                                          transition: 'opacity 200ms ease 0s',
                                          width: '100%',
                                        }}
                                      >
                                        <div
                                          className={`${dialogStyles['video-play-button__inner-layout']} ${dialogStyles['global-style']}`}
                                        >
                                          <div className={dialogStyles['video-play-button__button-frame']} />
                                          <button
                                            className={dialogStyles['video-play-button__button']}
                                            aria-label="Play Video"
                                            tabIndex={-1}
                                          >
                                            <div
                                              style={{
                                                height: '52.4px',
                                                margin: 'auto',
                                                position: 'relative',
                                                width: '81.875px',
                                              }}
                                            >
                                              <svg
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 125 80"
                                                enableBackground="new 0 0 125 80"
                                                focusable="false"
                                                style={{
                                                  fill: 'rgb(255, 255, 255)',
                                                  height: '100%',
                                                  left: 0,
                                                  strokeWidth: 0,
                                                  top: 0,
                                                  width: '100%',
                                                }}
                                              >
                                                <rect
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="none"
                                                  width={125}
                                                  height={80}
                                                />
                                                <polygon
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="#FFFFFF"
                                                  points="53,22 53,58 79,40"
                                                />
                                              </svg>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-detail']} ${dialogStyles['global-style']}`}
                                      data-handle="durationIndicator"
                                    >
                                      <div className={dialogStyles['video-play-detail__wrapper']}>
                                        <div className={dialogStyles['video-play-detail__timer-box']}>
                                          <div className={dialogStyles['time-show']}>3 MIN</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={dialogStyles['video-card-detail']}>
                              <h3>Overview of Graticule Asset Management - Adam Levinson</h3>
                            </div>
                            <div className={dialogStyles['video-card-detail__desc-container']}>
                              <div className={dialogStyles['video-card-detail__desc-wrapper']}>
                                <h4>An overview of Graticule Asset Management - Adam Levinson</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Col>
                    <Col xs={6} md={3} className={dialogStyles['gallery-list_column-cards']}>
                      <a href="#" className={dialogStyles['video-card']}>
                        <div className={dialogStyles['video-card-wrapper']}>
                          <div className={dialogStyles['video-card-inner']}>
                            <div
                              className={dialogStyles['video-card_thumbnail-wrapper']}
                              style={{ flex: '0 0 auto', height: 147, overflow: 'hidden', position: 'relative' }}
                            >
                              <div className={dialogStyles['popover-video']}>
                                <div className={dialogStyles['popover-video__wrapper']}>
                                  <div className={dialogStyles['popover-video__poster']}>
                                    <div
                                      className={`${dialogStyles['poster-thumbnail']} ${dialogStyles['global-style']}`}
                                      data-handle="posterThumbnail"
                                    >
                                      <img
                                        alt=""
                                        className={dialogStyles['global-style']}
                                        srcSet="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-160.webp 160w, https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp 320w"
                                        src="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp"
                                      />
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-cover']} ${dialogStyles['global-style']}`}
                                      data-handle="video"
                                    >
                                      <div className={dialogStyles['video-cover-wrapper']}>
                                        <video
                                          id="wistia_simple_video_3110"
                                          crossOrigin="anonymous"
                                          poster="https://fast.wistia.com/assets/images/blank.gif"
                                          aria-label="Video"
                                          defaultplaybackrate={1}
                                          src="blob:https://www.uschinaseries.com/7acfad15-29c2-428c-868a-a4b3c9ac95c4"
                                          controlslist="nodownload"
                                          playsInline
                                          muted
                                          loop
                                          preload="metadata"
                                          type="video/m3u8"
                                          x-webkit-airplay="allow"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-slider']} ${dialogStyles['global-style']}`}
                                      data-handle="progressIndicator"
                                    >
                                      <div className={dialogStyles['video-slider-wrapper']}>
                                        <div className={dialogStyles['video-slider-white']}>
                                          <div
                                            className={dialogStyles['video-slider-blue']}
                                            style={{
                                              width: '73%',
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-button']} ${dialogStyles['global-style']}`}
                                      data-handle="playButton"
                                    >
                                      <div
                                        className={dialogStyles['video-play-button__wrapper']}
                                        style={{
                                          height: '100%',
                                          left: 0,
                                          opacity: 0,
                                          position: 'absolute',
                                          top: 0,
                                          transition: 'opacity 200ms ease 0s',
                                          width: '100%',
                                        }}
                                      >
                                        <div
                                          className={`${dialogStyles['video-play-button__inner-layout']} ${dialogStyles['global-style']}`}
                                        >
                                          <div className={dialogStyles['video-play-button__button-frame']} />
                                          <button
                                            className={dialogStyles['video-play-button__button']}
                                            aria-label="Play Video"
                                            tabIndex={-1}
                                          >
                                            <div
                                              style={{
                                                height: '52.4px',
                                                margin: 'auto',
                                                position: 'relative',
                                                width: '81.875px',
                                              }}
                                            >
                                              <svg
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 125 80"
                                                enableBackground="new 0 0 125 80"
                                                focusable="false"
                                                style={{
                                                  fill: 'rgb(255, 255, 255)',
                                                  height: '100%',
                                                  left: 0,
                                                  strokeWidth: 0,
                                                  top: 0,
                                                  width: '100%',
                                                }}
                                              >
                                                <rect
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="none"
                                                  width={125}
                                                  height={80}
                                                />
                                                <polygon
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="#FFFFFF"
                                                  points="53,22 53,58 79,40"
                                                />
                                              </svg>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-detail']} ${dialogStyles['global-style']}`}
                                      data-handle="durationIndicator"
                                    >
                                      <div className={dialogStyles['video-play-detail__wrapper']}>
                                        <div className={dialogStyles['video-play-detail__timer-box']}>
                                          <div className={dialogStyles['time-show']}>3 MIN</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={dialogStyles['video-card-detail']}>
                              <h3>Overview of Graticule Asset Management - Adam Levinson</h3>
                            </div>
                            <div className={dialogStyles['video-card-detail__desc-container']}>
                              <div className={dialogStyles['video-card-detail__desc-wrapper']}>
                                <h4>An overview of Graticule Asset Management - Adam Levinson</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Col>
                    <Col xs={6} md={3} className={dialogStyles['gallery-list_column-cards']}>
                      <a href="#" className={dialogStyles['video-card']}>
                        <div className={dialogStyles['video-card-wrapper']}>
                          <div className={dialogStyles['video-card-inner']}>
                            <div
                              className={dialogStyles['video-card_thumbnail-wrapper']}
                              style={{ flex: '0 0 auto', height: 147, overflow: 'hidden', position: 'relative' }}
                            >
                              <div className={dialogStyles['popover-video']}>
                                <div className={dialogStyles['popover-video__wrapper']}>
                                  <div className={dialogStyles['popover-video__poster']}>
                                    <div
                                      className={`${dialogStyles['poster-thumbnail']} ${dialogStyles['global-style']}`}
                                      data-handle="posterThumbnail"
                                    >
                                      <img
                                        alt=""
                                        className={dialogStyles['global-style']}
                                        srcSet="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-160.webp 160w, https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp 320w"
                                        src="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp"
                                      />
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-cover']} ${dialogStyles['global-style']}`}
                                      data-handle="video"
                                    >
                                      <div className={dialogStyles['video-cover-wrapper']}>
                                        <video
                                          id="wistia_simple_video_3110"
                                          crossOrigin="anonymous"
                                          poster="https://fast.wistia.com/assets/images/blank.gif"
                                          aria-label="Video"
                                          defaultplaybackrate={1}
                                          src="blob:https://www.uschinaseries.com/7acfad15-29c2-428c-868a-a4b3c9ac95c4"
                                          controlslist="nodownload"
                                          playsInline
                                          muted
                                          loop
                                          preload="metadata"
                                          type="video/m3u8"
                                          x-webkit-airplay="allow"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-slider']} ${dialogStyles['global-style']}`}
                                      data-handle="progressIndicator"
                                    >
                                      <div className={dialogStyles['video-slider-wrapper']}>
                                        <div className={dialogStyles['video-slider-white']}>
                                          <div
                                            className={dialogStyles['video-slider-blue']}
                                            style={{
                                              width: '73%',
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-button']} ${dialogStyles['global-style']}`}
                                      data-handle="playButton"
                                    >
                                      <div
                                        className={dialogStyles['video-play-button__wrapper']}
                                        style={{
                                          height: '100%',
                                          left: 0,
                                          opacity: 0,
                                          position: 'absolute',
                                          top: 0,
                                          transition: 'opacity 200ms ease 0s',
                                          width: '100%',
                                        }}
                                      >
                                        <div
                                          className={`${dialogStyles['video-play-button__inner-layout']} ${dialogStyles['global-style']}`}
                                        >
                                          <div className={dialogStyles['video-play-button__button-frame']} />
                                          <button
                                            className={dialogStyles['video-play-button__button']}
                                            aria-label="Play Video"
                                            tabIndex={-1}
                                          >
                                            <div
                                              style={{
                                                height: '52.4px',
                                                margin: 'auto',
                                                position: 'relative',
                                                width: '81.875px',
                                              }}
                                            >
                                              <svg
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 125 80"
                                                enableBackground="new 0 0 125 80"
                                                focusable="false"
                                                style={{
                                                  fill: 'rgb(255, 255, 255)',
                                                  height: '100%',
                                                  left: 0,
                                                  strokeWidth: 0,
                                                  top: 0,
                                                  width: '100%',
                                                }}
                                              >
                                                <rect
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="none"
                                                  width={125}
                                                  height={80}
                                                />
                                                <polygon
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="#FFFFFF"
                                                  points="53,22 53,58 79,40"
                                                />
                                              </svg>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-detail']} ${dialogStyles['global-style']}`}
                                      data-handle="durationIndicator"
                                    >
                                      <div className={dialogStyles['video-play-detail__wrapper']}>
                                        <div className={dialogStyles['video-play-detail__timer-box']}>
                                          <div className={dialogStyles['time-show']}>3 MIN</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={dialogStyles['video-card-detail']}>
                              <h3>Overview of Graticule Asset Management - Adam Levinson</h3>
                            </div>
                            <div className={dialogStyles['video-card-detail__desc-container']}>
                              <div className={dialogStyles['video-card-detail__desc-wrapper']}>
                                <h4>An overview of Graticule Asset Management - Adam Levinson</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Col>
                    <Col xs={6} md={3} className={dialogStyles['gallery-list_column-cards']}>
                      <a href="#" className={dialogStyles['video-card']}>
                        <div className={dialogStyles['video-card-wrapper']}>
                          <div className={dialogStyles['video-card-inner']}>
                            <div
                              className={dialogStyles['video-card_thumbnail-wrapper']}
                              style={{ flex: '0 0 auto', height: 147, overflow: 'hidden', position: 'relative' }}
                            >
                              <div className={dialogStyles['popover-video']}>
                                <div className={dialogStyles['popover-video__wrapper']}>
                                  <div className={dialogStyles['popover-video__poster']}>
                                    <div
                                      className={`${dialogStyles['poster-thumbnail']} ${dialogStyles['global-style']}`}
                                      data-handle="posterThumbnail"
                                    >
                                      <img
                                        alt=""
                                        className={dialogStyles['global-style']}
                                        srcSet="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-160.webp 160w, https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp 320w"
                                        src="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp"
                                      />
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-cover']} ${dialogStyles['global-style']}`}
                                      data-handle="video"
                                    >
                                      <div className={dialogStyles['video-cover-wrapper']}>
                                        <video
                                          id="wistia_simple_video_3110"
                                          crossOrigin="anonymous"
                                          poster="https://fast.wistia.com/assets/images/blank.gif"
                                          aria-label="Video"
                                          defaultplaybackrate={1}
                                          src="blob:https://www.uschinaseries.com/7acfad15-29c2-428c-868a-a4b3c9ac95c4"
                                          controlslist="nodownload"
                                          playsInline
                                          muted
                                          loop
                                          preload="metadata"
                                          type="video/m3u8"
                                          x-webkit-airplay="allow"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-slider']} ${dialogStyles['global-style']}`}
                                      data-handle="progressIndicator"
                                    >
                                      <div className={dialogStyles['video-slider-wrapper']}>
                                        <div className={dialogStyles['video-slider-white']}>
                                          <div
                                            className={dialogStyles['video-slider-blue']}
                                            style={{
                                              width: '73%',
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-button']} ${dialogStyles['global-style']}`}
                                      data-handle="playButton"
                                    >
                                      <div
                                        className={dialogStyles['video-play-button__wrapper']}
                                        style={{
                                          height: '100%',
                                          left: 0,
                                          opacity: 0,
                                          position: 'absolute',
                                          top: 0,
                                          transition: 'opacity 200ms ease 0s',
                                          width: '100%',
                                        }}
                                      >
                                        <div
                                          className={`${dialogStyles['video-play-button__inner-layout']} ${dialogStyles['global-style']}`}
                                        >
                                          <div className={dialogStyles['video-play-button__button-frame']} />
                                          <button
                                            className={dialogStyles['video-play-button__button']}
                                            aria-label="Play Video"
                                            tabIndex={-1}
                                          >
                                            <div
                                              style={{
                                                height: '52.4px',
                                                margin: 'auto',
                                                position: 'relative',
                                                width: '81.875px',
                                              }}
                                            >
                                              <svg
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 125 80"
                                                enableBackground="new 0 0 125 80"
                                                focusable="false"
                                                style={{
                                                  fill: 'rgb(255, 255, 255)',
                                                  height: '100%',
                                                  left: 0,
                                                  strokeWidth: 0,
                                                  top: 0,
                                                  width: '100%',
                                                }}
                                              >
                                                <rect
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="none"
                                                  width={125}
                                                  height={80}
                                                />
                                                <polygon
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="#FFFFFF"
                                                  points="53,22 53,58 79,40"
                                                />
                                              </svg>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-detail']} ${dialogStyles['global-style']}`}
                                      data-handle="durationIndicator"
                                    >
                                      <div className={dialogStyles['video-play-detail__wrapper']}>
                                        <div className={dialogStyles['video-play-detail__timer-box']}>
                                          <div className={dialogStyles['time-show']}>3 MIN</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={dialogStyles['video-card-detail']}>
                              <h3>Overview of Graticule Asset Management - Adam Levinson</h3>
                            </div>
                            <div className={dialogStyles['video-card-detail__desc-container']}>
                              <div className={dialogStyles['video-card-detail__desc-wrapper']}>
                                <h4>An overview of Graticule Asset Management - Adam Levinson</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Col>
                  </Row>
                  <Row className={dialogStyles['gallery-list_row-cards']}>
                    <Col xs={6} md={3} className={dialogStyles['gallery-list_column-cards']}>
                      <a href="#" className={dialogStyles['video-card']}>
                        <div className={dialogStyles['video-card-wrapper']}>
                          <div className={dialogStyles['video-card-inner']}>
                            <div
                              className={dialogStyles['video-card_thumbnail-wrapper']}
                              style={{ flex: '0 0 auto', height: 147, overflow: 'hidden', position: 'relative' }}
                            >
                              <div className={dialogStyles['popover-video']}>
                                <div className={dialogStyles['popover-video__wrapper']}>
                                  <div className={dialogStyles['popover-video__poster']}>
                                    <div
                                      className={`${dialogStyles['poster-thumbnail']} ${dialogStyles['global-style']}`}
                                      data-handle="posterThumbnail"
                                    >
                                      <img
                                        alt=""
                                        className={dialogStyles['global-style']}
                                        srcSet="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-160.webp 160w, https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp 320w"
                                        src="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp"
                                      />
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-cover']} ${dialogStyles['global-style']}`}
                                      data-handle="video"
                                    >
                                      <div className={dialogStyles['video-cover-wrapper']}>
                                        <video
                                          id="wistia_simple_video_3110"
                                          crossOrigin="anonymous"
                                          poster="https://fast.wistia.com/assets/images/blank.gif"
                                          aria-label="Video"
                                          defaultplaybackrate={1}
                                          src="blob:https://www.uschinaseries.com/7acfad15-29c2-428c-868a-a4b3c9ac95c4"
                                          controlslist="nodownload"
                                          playsInline
                                          muted
                                          loop
                                          preload="metadata"
                                          type="video/m3u8"
                                          x-webkit-airplay="allow"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-slider']} ${dialogStyles['global-style']}`}
                                      data-handle="progressIndicator"
                                    >
                                      <div className={dialogStyles['video-slider-wrapper']}>
                                        <div className={dialogStyles['video-slider-white']}>
                                          <div
                                            className={dialogStyles['video-slider-blue']}
                                            style={{
                                              width: '73%',
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-button']} ${dialogStyles['global-style']}`}
                                      data-handle="playButton"
                                    >
                                      <div
                                        className={dialogStyles['video-play-button__wrapper']}
                                        style={{
                                          height: '100%',
                                          left: 0,
                                          opacity: 0,
                                          position: 'absolute',
                                          top: 0,
                                          transition: 'opacity 200ms ease 0s',
                                          width: '100%',
                                        }}
                                      >
                                        <div
                                          className={`${dialogStyles['video-play-button__inner-layout']} ${dialogStyles['global-style']}`}
                                        >
                                          <div className={dialogStyles['video-play-button__button-frame']} />
                                          <button
                                            className={dialogStyles['video-play-button__button']}
                                            aria-label="Play Video"
                                            tabIndex={-1}
                                          >
                                            <div
                                              style={{
                                                height: '52.4px',
                                                margin: 'auto',
                                                position: 'relative',
                                                width: '81.875px',
                                              }}
                                            >
                                              <svg
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 125 80"
                                                enableBackground="new 0 0 125 80"
                                                focusable="false"
                                                style={{
                                                  fill: 'rgb(255, 255, 255)',
                                                  height: '100%',
                                                  left: 0,
                                                  strokeWidth: 0,
                                                  top: 0,
                                                  width: '100%',
                                                }}
                                              >
                                                <rect
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="none"
                                                  width={125}
                                                  height={80}
                                                />
                                                <polygon
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="#FFFFFF"
                                                  points="53,22 53,58 79,40"
                                                />
                                              </svg>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-detail']} ${dialogStyles['global-style']}`}
                                      data-handle="durationIndicator"
                                    >
                                      <div className={dialogStyles['video-play-detail__wrapper']}>
                                        <div className={dialogStyles['video-play-detail__timer-box']}>
                                          <div className={dialogStyles['time-show']}>3 MIN</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={dialogStyles['video-card-detail']}>
                              <h3>Overview of Graticule Asset Management - Adam Levinson</h3>
                            </div>
                            <div className={dialogStyles['video-card-detail__desc-container']}>
                              <div className={dialogStyles['video-card-detail__desc-wrapper']}>
                                <h4>An overview of Graticule Asset Management - Adam Levinson</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Col>
                    <Col xs={6} md={3} className={dialogStyles['gallery-list_column-cards']}>
                      <a href="#" className={dialogStyles['video-card']}>
                        <div className={dialogStyles['video-card-wrapper']}>
                          <div className={dialogStyles['video-card-inner']}>
                            <div
                              className={dialogStyles['video-card_thumbnail-wrapper']}
                              style={{ flex: '0 0 auto', height: 147, overflow: 'hidden', position: 'relative' }}
                            >
                              <div className={dialogStyles['popover-video']}>
                                <div className={dialogStyles['popover-video__wrapper']}>
                                  <div className={dialogStyles['popover-video__poster']}>
                                    <div
                                      className={`${dialogStyles['poster-thumbnail']} ${dialogStyles['global-style']}`}
                                      data-handle="posterThumbnail"
                                    >
                                      <img
                                        alt=""
                                        className={dialogStyles['global-style']}
                                        srcSet="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-160.webp 160w, https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp 320w"
                                        src="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp"
                                      />
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-cover']} ${dialogStyles['global-style']}`}
                                      data-handle="video"
                                    >
                                      <div className={dialogStyles['video-cover-wrapper']}>
                                        <video
                                          id="wistia_simple_video_3110"
                                          crossOrigin="anonymous"
                                          poster="https://fast.wistia.com/assets/images/blank.gif"
                                          aria-label="Video"
                                          defaultplaybackrate={1}
                                          src="blob:https://www.uschinaseries.com/7acfad15-29c2-428c-868a-a4b3c9ac95c4"
                                          controlslist="nodownload"
                                          playsInline
                                          muted
                                          loop
                                          preload="metadata"
                                          type="video/m3u8"
                                          x-webkit-airplay="allow"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-slider']} ${dialogStyles['global-style']}`}
                                      data-handle="progressIndicator"
                                    >
                                      <div className={dialogStyles['video-slider-wrapper']}>
                                        <div className={dialogStyles['video-slider-white']}>
                                          <div
                                            className={dialogStyles['video-slider-blue']}
                                            style={{
                                              width: '73%',
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-button']} ${dialogStyles['global-style']}`}
                                      data-handle="playButton"
                                    >
                                      <div
                                        className={dialogStyles['video-play-button__wrapper']}
                                        style={{
                                          height: '100%',
                                          left: 0,
                                          opacity: 0,
                                          position: 'absolute',
                                          top: 0,
                                          transition: 'opacity 200ms ease 0s',
                                          width: '100%',
                                        }}
                                      >
                                        <div
                                          className={`${dialogStyles['video-play-button__inner-layout']} ${dialogStyles['global-style']}`}
                                        >
                                          <div className={dialogStyles['video-play-button__button-frame']} />
                                          <button
                                            className={dialogStyles['video-play-button__button']}
                                            aria-label="Play Video"
                                            tabIndex={-1}
                                          >
                                            <div
                                              style={{
                                                height: '52.4px',
                                                margin: 'auto',
                                                position: 'relative',
                                                width: '81.875px',
                                              }}
                                            >
                                              <svg
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 125 80"
                                                enableBackground="new 0 0 125 80"
                                                focusable="false"
                                                style={{
                                                  fill: 'rgb(255, 255, 255)',
                                                  height: '100%',
                                                  left: 0,
                                                  strokeWidth: 0,
                                                  top: 0,
                                                  width: '100%',
                                                }}
                                              >
                                                <rect
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="none"
                                                  width={125}
                                                  height={80}
                                                />
                                                <polygon
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="#FFFFFF"
                                                  points="53,22 53,58 79,40"
                                                />
                                              </svg>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-detail']} ${dialogStyles['global-style']}`}
                                      data-handle="durationIndicator"
                                    >
                                      <div className={dialogStyles['video-play-detail__wrapper']}>
                                        <div className={dialogStyles['video-play-detail__timer-box']}>
                                          <div className={dialogStyles['time-show']}>3 MIN</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={dialogStyles['video-card-detail']}>
                              <h3>Overview of Graticule Asset Management - Adam Levinson</h3>
                            </div>
                            <div className={dialogStyles['video-card-detail__desc-container']}>
                              <div className={dialogStyles['video-card-detail__desc-wrapper']}>
                                <h4>An overview of Graticule Asset Management - Adam Levinson</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Col>
                    <Col xs={6} md={3} className={dialogStyles['gallery-list_column-cards']}>
                      <a href="#" className={dialogStyles['video-card']}>
                        <div className={dialogStyles['video-card-wrapper']}>
                          <div className={dialogStyles['video-card-inner']}>
                            <div
                              className={dialogStyles['video-card_thumbnail-wrapper']}
                              style={{ flex: '0 0 auto', height: 147, overflow: 'hidden', position: 'relative' }}
                            >
                              <div className={dialogStyles['popover-video']}>
                                <div className={dialogStyles['popover-video__wrapper']}>
                                  <div className={dialogStyles['popover-video__poster']}>
                                    <div
                                      className={`${dialogStyles['poster-thumbnail']} ${dialogStyles['global-style']}`}
                                      data-handle="posterThumbnail"
                                    >
                                      <img
                                        alt=""
                                        className={dialogStyles['global-style']}
                                        srcSet="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-160.webp 160w, https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp 320w"
                                        src="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp"
                                      />
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-cover']} ${dialogStyles['global-style']}`}
                                      data-handle="video"
                                    >
                                      <div className={dialogStyles['video-cover-wrapper']}>
                                        <video
                                          id="wistia_simple_video_3110"
                                          crossOrigin="anonymous"
                                          poster="https://fast.wistia.com/assets/images/blank.gif"
                                          aria-label="Video"
                                          defaultplaybackrate={1}
                                          src="blob:https://www.uschinaseries.com/7acfad15-29c2-428c-868a-a4b3c9ac95c4"
                                          controlslist="nodownload"
                                          playsInline
                                          muted
                                          loop
                                          preload="metadata"
                                          type="video/m3u8"
                                          x-webkit-airplay="allow"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-slider']} ${dialogStyles['global-style']}`}
                                      data-handle="progressIndicator"
                                    >
                                      <div className={dialogStyles['video-slider-wrapper']}>
                                        <div className={dialogStyles['video-slider-white']}>
                                          <div
                                            className={dialogStyles['video-slider-blue']}
                                            style={{
                                              width: '73%',
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-button']} ${dialogStyles['global-style']}`}
                                      data-handle="playButton"
                                    >
                                      <div
                                        className={dialogStyles['video-play-button__wrapper']}
                                        style={{
                                          height: '100%',
                                          left: 0,
                                          opacity: 0,
                                          position: 'absolute',
                                          top: 0,
                                          transition: 'opacity 200ms ease 0s',
                                          width: '100%',
                                        }}
                                      >
                                        <div
                                          className={`${dialogStyles['video-play-button__inner-layout']} ${dialogStyles['global-style']}`}
                                        >
                                          <div className={dialogStyles['video-play-button__button-frame']} />
                                          <button
                                            className={dialogStyles['video-play-button__button']}
                                            aria-label="Play Video"
                                            tabIndex={-1}
                                          >
                                            <div
                                              style={{
                                                height: '52.4px',
                                                margin: 'auto',
                                                position: 'relative',
                                                width: '81.875px',
                                              }}
                                            >
                                              <svg
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 125 80"
                                                enableBackground="new 0 0 125 80"
                                                focusable="false"
                                                style={{
                                                  fill: 'rgb(255, 255, 255)',
                                                  height: '100%',
                                                  left: 0,
                                                  strokeWidth: 0,
                                                  top: 0,
                                                  width: '100%',
                                                }}
                                              >
                                                <rect
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="none"
                                                  width={125}
                                                  height={80}
                                                />
                                                <polygon
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="#FFFFFF"
                                                  points="53,22 53,58 79,40"
                                                />
                                              </svg>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-detail']} ${dialogStyles['global-style']}`}
                                      data-handle="durationIndicator"
                                    >
                                      <div className={dialogStyles['video-play-detail__wrapper']}>
                                        <div className={dialogStyles['video-play-detail__timer-box']}>
                                          <div className={dialogStyles['time-show']}>3 MIN</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={dialogStyles['video-card-detail']}>
                              <h3>Overview of Graticule Asset Management - Adam Levinson</h3>
                            </div>
                            <div className={dialogStyles['video-card-detail__desc-container']}>
                              <div className={dialogStyles['video-card-detail__desc-wrapper']}>
                                <h4>An overview of Graticule Asset Management - Adam Levinson</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Col>
                    <Col xs={6} md={3} className={dialogStyles['gallery-list_column-cards']}>
                      <a href="#" className={dialogStyles['video-card']}>
                        <div className={dialogStyles['video-card-wrapper']}>
                          <div className={dialogStyles['video-card-inner']}>
                            <div
                              className={dialogStyles['video-card_thumbnail-wrapper']}
                              style={{ flex: '0 0 auto', height: 147, overflow: 'hidden', position: 'relative' }}
                            >
                              <div className={dialogStyles['popover-video']}>
                                <div className={dialogStyles['popover-video__wrapper']}>
                                  <div className={dialogStyles['popover-video__poster']}>
                                    <div
                                      className={`${dialogStyles['poster-thumbnail']} ${dialogStyles['global-style']}`}
                                      data-handle="posterThumbnail"
                                    >
                                      <img
                                        alt=""
                                        className={dialogStyles['global-style']}
                                        srcSet="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-160.webp 160w, https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp 320w"
                                        src="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp"
                                      />
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-cover']} ${dialogStyles['global-style']}`}
                                      data-handle="video"
                                    >
                                      <div className={dialogStyles['video-cover-wrapper']}>
                                        <video
                                          id="wistia_simple_video_3110"
                                          crossOrigin="anonymous"
                                          poster="https://fast.wistia.com/assets/images/blank.gif"
                                          aria-label="Video"
                                          defaultplaybackrate={1}
                                          src="blob:https://www.uschinaseries.com/7acfad15-29c2-428c-868a-a4b3c9ac95c4"
                                          controlslist="nodownload"
                                          playsInline
                                          muted
                                          loop
                                          preload="metadata"
                                          type="video/m3u8"
                                          x-webkit-airplay="allow"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-slider']} ${dialogStyles['global-style']}`}
                                      data-handle="progressIndicator"
                                    >
                                      <div className={dialogStyles['video-slider-wrapper']}>
                                        <div className={dialogStyles['video-slider-white']}>
                                          <div
                                            className={dialogStyles['video-slider-blue']}
                                            style={{
                                              width: '73%',
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-button']} ${dialogStyles['global-style']}`}
                                      data-handle="playButton"
                                    >
                                      <div
                                        className={dialogStyles['video-play-button__wrapper']}
                                        style={{
                                          height: '100%',
                                          left: 0,
                                          opacity: 0,
                                          position: 'absolute',
                                          top: 0,
                                          transition: 'opacity 200ms ease 0s',
                                          width: '100%',
                                        }}
                                      >
                                        <div
                                          className={`${dialogStyles['video-play-button__inner-layout']} ${dialogStyles['global-style']}`}
                                        >
                                          <div className={dialogStyles['video-play-button__button-frame']} />
                                          <button
                                            className={dialogStyles['video-play-button__button']}
                                            aria-label="Play Video"
                                            tabIndex={-1}
                                          >
                                            <div
                                              style={{
                                                height: '52.4px',
                                                margin: 'auto',
                                                position: 'relative',
                                                width: '81.875px',
                                              }}
                                            >
                                              <svg
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 125 80"
                                                enableBackground="new 0 0 125 80"
                                                focusable="false"
                                                style={{
                                                  fill: 'rgb(255, 255, 255)',
                                                  height: '100%',
                                                  left: 0,
                                                  strokeWidth: 0,
                                                  top: 0,
                                                  width: '100%',
                                                }}
                                              >
                                                <rect
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="none"
                                                  width={125}
                                                  height={80}
                                                />
                                                <polygon
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="#FFFFFF"
                                                  points="53,22 53,58 79,40"
                                                />
                                              </svg>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-detail']} ${dialogStyles['global-style']}`}
                                      data-handle="durationIndicator"
                                    >
                                      <div className={dialogStyles['video-play-detail__wrapper']}>
                                        <div className={dialogStyles['video-play-detail__timer-box']}>
                                          <div className={dialogStyles['time-show']}>3 MIN</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={dialogStyles['video-card-detail']}>
                              <h3>Overview of Graticule Asset Management - Adam Levinson</h3>
                            </div>
                            <div className={dialogStyles['video-card-detail__desc-container']}>
                              <div className={dialogStyles['video-card-detail__desc-wrapper']}>
                                <h4>An overview of Graticule Asset Management - Adam Levinson</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Col>
                  </Row>
                  <Row className={dialogStyles['gallery-list_row-cards']}>
                    <Col xs={6} md={3} className={dialogStyles['gallery-list_column-cards']}>
                      <a href="#" className={dialogStyles['video-card']}>
                        <div className={dialogStyles['video-card-wrapper']}>
                          <div className={dialogStyles['video-card-inner']}>
                            <div
                              className={dialogStyles['video-card_thumbnail-wrapper']}
                              style={{ flex: '0 0 auto', height: 147, overflow: 'hidden', position: 'relative' }}
                            >
                              <div className={dialogStyles['popover-video']}>
                                <div className={dialogStyles['popover-video__wrapper']}>
                                  <div className={dialogStyles['popover-video__poster']}>
                                    <div
                                      className={`${dialogStyles['poster-thumbnail']} ${dialogStyles['global-style']}`}
                                      data-handle="posterThumbnail"
                                    >
                                      <img
                                        alt=""
                                        className={dialogStyles['global-style']}
                                        srcSet="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-160.webp 160w, https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp 320w"
                                        src="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp"
                                      />
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-cover']} ${dialogStyles['global-style']}`}
                                      data-handle="video"
                                    >
                                      <div className={dialogStyles['video-cover-wrapper']}>
                                        <video
                                          id="wistia_simple_video_3110"
                                          crossOrigin="anonymous"
                                          poster="https://fast.wistia.com/assets/images/blank.gif"
                                          aria-label="Video"
                                          defaultplaybackrate={1}
                                          src="blob:https://www.uschinaseries.com/7acfad15-29c2-428c-868a-a4b3c9ac95c4"
                                          controlslist="nodownload"
                                          playsInline
                                          muted
                                          loop
                                          preload="metadata"
                                          type="video/m3u8"
                                          x-webkit-airplay="allow"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-slider']} ${dialogStyles['global-style']}`}
                                      data-handle="progressIndicator"
                                    >
                                      <div className={dialogStyles['video-slider-wrapper']}>
                                        <div className={dialogStyles['video-slider-white']}>
                                          <div
                                            className={dialogStyles['video-slider-blue']}
                                            style={{
                                              width: '73%',
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-button']} ${dialogStyles['global-style']}`}
                                      data-handle="playButton"
                                    >
                                      <div
                                        className={dialogStyles['video-play-button__wrapper']}
                                        style={{
                                          height: '100%',
                                          left: 0,
                                          opacity: 0,
                                          position: 'absolute',
                                          top: 0,
                                          transition: 'opacity 200ms ease 0s',
                                          width: '100%',
                                        }}
                                      >
                                        <div
                                          className={`${dialogStyles['video-play-button__inner-layout']} ${dialogStyles['global-style']}`}
                                        >
                                          <div className={dialogStyles['video-play-button__button-frame']} />
                                          <button
                                            className={dialogStyles['video-play-button__button']}
                                            aria-label="Play Video"
                                            tabIndex={-1}
                                          >
                                            <div
                                              style={{
                                                height: '52.4px',
                                                margin: 'auto',
                                                position: 'relative',
                                                width: '81.875px',
                                              }}
                                            >
                                              <svg
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 125 80"
                                                enableBackground="new 0 0 125 80"
                                                focusable="false"
                                                style={{
                                                  fill: 'rgb(255, 255, 255)',
                                                  height: '100%',
                                                  left: 0,
                                                  strokeWidth: 0,
                                                  top: 0,
                                                  width: '100%',
                                                }}
                                              >
                                                <rect
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="none"
                                                  width={125}
                                                  height={80}
                                                />
                                                <polygon
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="#FFFFFF"
                                                  points="53,22 53,58 79,40"
                                                />
                                              </svg>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-detail']} ${dialogStyles['global-style']}`}
                                      data-handle="durationIndicator"
                                    >
                                      <div className={dialogStyles['video-play-detail__wrapper']}>
                                        <div className={dialogStyles['video-play-detail__timer-box']}>
                                          <div className={dialogStyles['time-show']}>3 MIN</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={dialogStyles['video-card-detail']}>
                              <h3>Overview of Graticule Asset Management - Adam Levinson</h3>
                            </div>
                            <div className={dialogStyles['video-card-detail__desc-container']}>
                              <div className={dialogStyles['video-card-detail__desc-wrapper']}>
                                <h4>An overview of Graticule Asset Management - Adam Levinson</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Col>
                    <Col xs={6} md={3} className={dialogStyles['gallery-list_column-cards']}>
                      <a href="#" className={dialogStyles['video-card']}>
                        <div className={dialogStyles['video-card-wrapper']}>
                          <div className={dialogStyles['video-card-inner']}>
                            <div
                              className={dialogStyles['video-card_thumbnail-wrapper']}
                              style={{ flex: '0 0 auto', height: 147, overflow: 'hidden', position: 'relative' }}
                            >
                              <div className={dialogStyles['popover-video']}>
                                <div className={dialogStyles['popover-video__wrapper']}>
                                  <div className={dialogStyles['popover-video__poster']}>
                                    <div
                                      className={`${dialogStyles['poster-thumbnail']} ${dialogStyles['global-style']}`}
                                      data-handle="posterThumbnail"
                                    >
                                      <img
                                        alt=""
                                        className={dialogStyles['global-style']}
                                        srcSet="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-160.webp 160w, https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp 320w"
                                        src="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp"
                                      />
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-cover']} ${dialogStyles['global-style']}`}
                                      data-handle="video"
                                    >
                                      <div className={dialogStyles['video-cover-wrapper']}>
                                        <video
                                          id="wistia_simple_video_3110"
                                          crossOrigin="anonymous"
                                          poster="https://fast.wistia.com/assets/images/blank.gif"
                                          aria-label="Video"
                                          defaultplaybackrate={1}
                                          src="blob:https://www.uschinaseries.com/7acfad15-29c2-428c-868a-a4b3c9ac95c4"
                                          controlslist="nodownload"
                                          playsInline
                                          muted
                                          loop
                                          preload="metadata"
                                          type="video/m3u8"
                                          x-webkit-airplay="allow"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-slider']} ${dialogStyles['global-style']}`}
                                      data-handle="progressIndicator"
                                    >
                                      <div className={dialogStyles['video-slider-wrapper']}>
                                        <div className={dialogStyles['video-slider-white']}>
                                          <div
                                            className={dialogStyles['video-slider-blue']}
                                            style={{
                                              width: '73%',
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-button']} ${dialogStyles['global-style']}`}
                                      data-handle="playButton"
                                    >
                                      <div
                                        className={dialogStyles['video-play-button__wrapper']}
                                        style={{
                                          height: '100%',
                                          left: 0,
                                          opacity: 0,
                                          position: 'absolute',
                                          top: 0,
                                          transition: 'opacity 200ms ease 0s',
                                          width: '100%',
                                        }}
                                      >
                                        <div
                                          className={`${dialogStyles['video-play-button__inner-layout']} ${dialogStyles['global-style']}`}
                                        >
                                          <div className={dialogStyles['video-play-button__button-frame']} />
                                          <button
                                            className={dialogStyles['video-play-button__button']}
                                            aria-label="Play Video"
                                            tabIndex={-1}
                                          >
                                            <div
                                              style={{
                                                height: '52.4px',
                                                margin: 'auto',
                                                position: 'relative',
                                                width: '81.875px',
                                              }}
                                            >
                                              <svg
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 125 80"
                                                enableBackground="new 0 0 125 80"
                                                focusable="false"
                                                style={{
                                                  fill: 'rgb(255, 255, 255)',
                                                  height: '100%',
                                                  left: 0,
                                                  strokeWidth: 0,
                                                  top: 0,
                                                  width: '100%',
                                                }}
                                              >
                                                <rect
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="none"
                                                  width={125}
                                                  height={80}
                                                />
                                                <polygon
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="#FFFFFF"
                                                  points="53,22 53,58 79,40"
                                                />
                                              </svg>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-detail']} ${dialogStyles['global-style']}`}
                                      data-handle="durationIndicator"
                                    >
                                      <div className={dialogStyles['video-play-detail__wrapper']}>
                                        <div className={dialogStyles['video-play-detail__timer-box']}>
                                          <div className={dialogStyles['time-show']}>3 MIN</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={dialogStyles['video-card-detail']}>
                              <h3>Overview of Graticule Asset Management - Adam Levinson</h3>
                            </div>
                            <div className={dialogStyles['video-card-detail__desc-container']}>
                              <div className={dialogStyles['video-card-detail__desc-wrapper']}>
                                <h4>An overview of Graticule Asset Management - Adam Levinson</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Col>
                    <Col xs={6} md={3} className={dialogStyles['gallery-list_column-cards']}>
                      <a href="#" className={dialogStyles['video-card']}>
                        <div className={dialogStyles['video-card-wrapper']}>
                          <div className={dialogStyles['video-card-inner']}>
                            <div
                              className={dialogStyles['video-card_thumbnail-wrapper']}
                              style={{ flex: '0 0 auto', height: 147, overflow: 'hidden', position: 'relative' }}
                            >
                              <div className={dialogStyles['popover-video']}>
                                <div className={dialogStyles['popover-video__wrapper']}>
                                  <div className={dialogStyles['popover-video__poster']}>
                                    <div
                                      className={`${dialogStyles['poster-thumbnail']} ${dialogStyles['global-style']}`}
                                      data-handle="posterThumbnail"
                                    >
                                      <img
                                        alt=""
                                        className={dialogStyles['global-style']}
                                        srcSet="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-160.webp 160w, https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp 320w"
                                        src="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp"
                                      />
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-cover']} ${dialogStyles['global-style']}`}
                                      data-handle="video"
                                    >
                                      <div className={dialogStyles['video-cover-wrapper']}>
                                        <video
                                          id="wistia_simple_video_3110"
                                          crossOrigin="anonymous"
                                          poster="https://fast.wistia.com/assets/images/blank.gif"
                                          aria-label="Video"
                                          defaultplaybackrate={1}
                                          src="blob:https://www.uschinaseries.com/7acfad15-29c2-428c-868a-a4b3c9ac95c4"
                                          controlslist="nodownload"
                                          playsInline
                                          muted
                                          loop
                                          preload="metadata"
                                          type="video/m3u8"
                                          x-webkit-airplay="allow"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-slider']} ${dialogStyles['global-style']}`}
                                      data-handle="progressIndicator"
                                    >
                                      <div className={dialogStyles['video-slider-wrapper']}>
                                        <div className={dialogStyles['video-slider-white']}>
                                          <div
                                            className={dialogStyles['video-slider-blue']}
                                            style={{
                                              width: '73%',
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-button']} ${dialogStyles['global-style']}`}
                                      data-handle="playButton"
                                    >
                                      <div
                                        className={dialogStyles['video-play-button__wrapper']}
                                        style={{
                                          height: '100%',
                                          left: 0,
                                          opacity: 0,
                                          position: 'absolute',
                                          top: 0,
                                          transition: 'opacity 200ms ease 0s',
                                          width: '100%',
                                        }}
                                      >
                                        <div
                                          className={`${dialogStyles['video-play-button__inner-layout']} ${dialogStyles['global-style']}`}
                                        >
                                          <div className={dialogStyles['video-play-button__button-frame']} />
                                          <button
                                            className={dialogStyles['video-play-button__button']}
                                            aria-label="Play Video"
                                            tabIndex={-1}
                                          >
                                            <div
                                              style={{
                                                height: '52.4px',
                                                margin: 'auto',
                                                position: 'relative',
                                                width: '81.875px',
                                              }}
                                            >
                                              <svg
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 125 80"
                                                enableBackground="new 0 0 125 80"
                                                focusable="false"
                                                style={{
                                                  fill: 'rgb(255, 255, 255)',
                                                  height: '100%',
                                                  left: 0,
                                                  strokeWidth: 0,
                                                  top: 0,
                                                  width: '100%',
                                                }}
                                              >
                                                <rect
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="none"
                                                  width={125}
                                                  height={80}
                                                />
                                                <polygon
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="#FFFFFF"
                                                  points="53,22 53,58 79,40"
                                                />
                                              </svg>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-detail']} ${dialogStyles['global-style']}`}
                                      data-handle="durationIndicator"
                                    >
                                      <div className={dialogStyles['video-play-detail__wrapper']}>
                                        <div className={dialogStyles['video-play-detail__timer-box']}>
                                          <div className={dialogStyles['time-show']}>3 MIN</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={dialogStyles['video-card-detail']}>
                              <h3>Overview of Graticule Asset Management - Adam Levinson</h3>
                            </div>
                            <div className={dialogStyles['video-card-detail__desc-container']}>
                              <div className={dialogStyles['video-card-detail__desc-wrapper']}>
                                <h4>An overview of Graticule Asset Management - Adam Levinson</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Col>
                    <Col xs={6} md={3} className={dialogStyles['gallery-list_column-cards']}>
                      <a href="#" className={dialogStyles['video-card']}>
                        <div className={dialogStyles['video-card-wrapper']}>
                          <div className={dialogStyles['video-card-inner']}>
                            <div
                              className={dialogStyles['video-card_thumbnail-wrapper']}
                              style={{ flex: '0 0 auto', height: 147, overflow: 'hidden', position: 'relative' }}
                            >
                              <div className={dialogStyles['popover-video']}>
                                <div className={dialogStyles['popover-video__wrapper']}>
                                  <div className={dialogStyles['popover-video__poster']}>
                                    <div
                                      className={`${dialogStyles['poster-thumbnail']} ${dialogStyles['global-style']}`}
                                      data-handle="posterThumbnail"
                                    >
                                      <img
                                        alt=""
                                        className={dialogStyles['global-style']}
                                        srcSet="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-160.webp 160w, https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp 320w"
                                        src="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp"
                                      />
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-cover']} ${dialogStyles['global-style']}`}
                                      data-handle="video"
                                    >
                                      <div className={dialogStyles['video-cover-wrapper']}>
                                        <video
                                          id="wistia_simple_video_3110"
                                          crossOrigin="anonymous"
                                          poster="https://fast.wistia.com/assets/images/blank.gif"
                                          aria-label="Video"
                                          defaultplaybackrate={1}
                                          src="blob:https://www.uschinaseries.com/7acfad15-29c2-428c-868a-a4b3c9ac95c4"
                                          controlslist="nodownload"
                                          playsInline
                                          muted
                                          loop
                                          preload="metadata"
                                          type="video/m3u8"
                                          x-webkit-airplay="allow"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-slider']} ${dialogStyles['global-style']}`}
                                      data-handle="progressIndicator"
                                    >
                                      <div className={dialogStyles['video-slider-wrapper']}>
                                        <div className={dialogStyles['video-slider-white']}>
                                          <div
                                            className={dialogStyles['video-slider-blue']}
                                            style={{
                                              width: '73%',
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-button']} ${dialogStyles['global-style']}`}
                                      data-handle="playButton"
                                    >
                                      <div
                                        className={dialogStyles['video-play-button__wrapper']}
                                        style={{
                                          height: '100%',
                                          left: 0,
                                          opacity: 0,
                                          position: 'absolute',
                                          top: 0,
                                          transition: 'opacity 200ms ease 0s',
                                          width: '100%',
                                        }}
                                      >
                                        <div
                                          className={`${dialogStyles['video-play-button__inner-layout']} ${dialogStyles['global-style']}`}
                                        >
                                          <div className={dialogStyles['video-play-button__button-frame']} />
                                          <button
                                            className={dialogStyles['video-play-button__button']}
                                            aria-label="Play Video"
                                            tabIndex={-1}
                                          >
                                            <div
                                              style={{
                                                height: '52.4px',
                                                margin: 'auto',
                                                position: 'relative',
                                                width: '81.875px',
                                              }}
                                            >
                                              <svg
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 125 80"
                                                enableBackground="new 0 0 125 80"
                                                focusable="false"
                                                style={{
                                                  fill: 'rgb(255, 255, 255)',
                                                  height: '100%',
                                                  left: 0,
                                                  strokeWidth: 0,
                                                  top: 0,
                                                  width: '100%',
                                                }}
                                              >
                                                <rect
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="none"
                                                  width={125}
                                                  height={80}
                                                />
                                                <polygon
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="#FFFFFF"
                                                  points="53,22 53,58 79,40"
                                                />
                                              </svg>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-detail']} ${dialogStyles['global-style']}`}
                                      data-handle="durationIndicator"
                                    >
                                      <div className={dialogStyles['video-play-detail__wrapper']}>
                                        <div className={dialogStyles['video-play-detail__timer-box']}>
                                          <div className={dialogStyles['time-show']}>3 MIN</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={dialogStyles['video-card-detail']}>
                              <h3>Overview of Graticule Asset Management - Adam Levinson</h3>
                            </div>
                            <div className={dialogStyles['video-card-detail__desc-container']}>
                              <div className={dialogStyles['video-card-detail__desc-wrapper']}>
                                <h4>An overview of Graticule Asset Management - Adam Levinson</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Col>
                  </Row>
                  <Row className={dialogStyles['gallery-list_row-cards']}>
                    <Col xs={6} md={3} className={dialogStyles['gallery-list_column-cards']}>
                      <a href="#" className={dialogStyles['video-card']}>
                        <div className={dialogStyles['video-card-wrapper']}>
                          <div className={dialogStyles['video-card-inner']}>
                            <div
                              className={dialogStyles['video-card_thumbnail-wrapper']}
                              style={{ flex: '0 0 auto', height: 147, overflow: 'hidden', position: 'relative' }}
                            >
                              <div className={dialogStyles['popover-video']}>
                                <div className={dialogStyles['popover-video__wrapper']}>
                                  <div className={dialogStyles['popover-video__poster']}>
                                    <div
                                      className={`${dialogStyles['poster-thumbnail']} ${dialogStyles['global-style']}`}
                                      data-handle="posterThumbnail"
                                    >
                                      <img
                                        alt=""
                                        className={dialogStyles['global-style']}
                                        srcSet="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-160.webp 160w, https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp 320w"
                                        src="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp"
                                      />
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-cover']} ${dialogStyles['global-style']}`}
                                      data-handle="video"
                                    >
                                      <div className={dialogStyles['video-cover-wrapper']}>
                                        <video
                                          id="wistia_simple_video_3110"
                                          crossOrigin="anonymous"
                                          poster="https://fast.wistia.com/assets/images/blank.gif"
                                          aria-label="Video"
                                          defaultplaybackrate={1}
                                          src="blob:https://www.uschinaseries.com/7acfad15-29c2-428c-868a-a4b3c9ac95c4"
                                          controlslist="nodownload"
                                          playsInline
                                          muted
                                          loop
                                          preload="metadata"
                                          type="video/m3u8"
                                          x-webkit-airplay="allow"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-slider']} ${dialogStyles['global-style']}`}
                                      data-handle="progressIndicator"
                                    >
                                      <div className={dialogStyles['video-slider-wrapper']}>
                                        <div className={dialogStyles['video-slider-white']}>
                                          <div
                                            className={dialogStyles['video-slider-blue']}
                                            style={{
                                              width: '73%',
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-button']} ${dialogStyles['global-style']}`}
                                      data-handle="playButton"
                                    >
                                      <div
                                        className={dialogStyles['video-play-button__wrapper']}
                                        style={{
                                          height: '100%',
                                          left: 0,
                                          opacity: 0,
                                          position: 'absolute',
                                          top: 0,
                                          transition: 'opacity 200ms ease 0s',
                                          width: '100%',
                                        }}
                                      >
                                        <div
                                          className={`${dialogStyles['video-play-button__inner-layout']} ${dialogStyles['global-style']}`}
                                        >
                                          <div className={dialogStyles['video-play-button__button-frame']} />
                                          <button
                                            className={dialogStyles['video-play-button__button']}
                                            aria-label="Play Video"
                                            tabIndex={-1}
                                          >
                                            <div
                                              style={{
                                                height: '52.4px',
                                                margin: 'auto',
                                                position: 'relative',
                                                width: '81.875px',
                                              }}
                                            >
                                              <svg
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 125 80"
                                                enableBackground="new 0 0 125 80"
                                                focusable="false"
                                                style={{
                                                  fill: 'rgb(255, 255, 255)',
                                                  height: '100%',
                                                  left: 0,
                                                  strokeWidth: 0,
                                                  top: 0,
                                                  width: '100%',
                                                }}
                                              >
                                                <rect
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="none"
                                                  width={125}
                                                  height={80}
                                                />
                                                <polygon
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="#FFFFFF"
                                                  points="53,22 53,58 79,40"
                                                />
                                              </svg>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-detail']} ${dialogStyles['global-style']}`}
                                      data-handle="durationIndicator"
                                    >
                                      <div className={dialogStyles['video-play-detail__wrapper']}>
                                        <div className={dialogStyles['video-play-detail__timer-box']}>
                                          <div className={dialogStyles['time-show']}>3 MIN</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={dialogStyles['video-card-detail']}>
                              <h3>Overview of Graticule Asset Management - Adam Levinson</h3>
                            </div>
                            <div className={dialogStyles['video-card-detail__desc-container']}>
                              <div className={dialogStyles['video-card-detail__desc-wrapper']}>
                                <h4>An overview of Graticule Asset Management - Adam Levinson</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Col>
                    <Col xs={6} md={3} className={dialogStyles['gallery-list_column-cards']}>
                      <a href="#" className={dialogStyles['video-card']}>
                        <div className={dialogStyles['video-card-wrapper']}>
                          <div className={dialogStyles['video-card-inner']}>
                            <div
                              className={dialogStyles['video-card_thumbnail-wrapper']}
                              style={{ flex: '0 0 auto', height: 147, overflow: 'hidden', position: 'relative' }}
                            >
                              <div className={dialogStyles['popover-video']}>
                                <div className={dialogStyles['popover-video__wrapper']}>
                                  <div className={dialogStyles['popover-video__poster']}>
                                    <div
                                      className={`${dialogStyles['poster-thumbnail']} ${dialogStyles['global-style']}`}
                                      data-handle="posterThumbnail"
                                    >
                                      <img
                                        alt=""
                                        className={dialogStyles['global-style']}
                                        srcSet="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-160.webp 160w, https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp 320w"
                                        src="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp"
                                      />
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-cover']} ${dialogStyles['global-style']}`}
                                      data-handle="video"
                                    >
                                      <div className={dialogStyles['video-cover-wrapper']}>
                                        <video
                                          id="wistia_simple_video_3110"
                                          crossOrigin="anonymous"
                                          poster="https://fast.wistia.com/assets/images/blank.gif"
                                          aria-label="Video"
                                          defaultplaybackrate={1}
                                          src="blob:https://www.uschinaseries.com/7acfad15-29c2-428c-868a-a4b3c9ac95c4"
                                          controlslist="nodownload"
                                          playsInline
                                          muted
                                          loop
                                          preload="metadata"
                                          type="video/m3u8"
                                          x-webkit-airplay="allow"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-slider']} ${dialogStyles['global-style']}`}
                                      data-handle="progressIndicator"
                                    >
                                      <div className={dialogStyles['video-slider-wrapper']}>
                                        <div className={dialogStyles['video-slider-white']}>
                                          <div
                                            className={dialogStyles['video-slider-blue']}
                                            style={{
                                              width: '73%',
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-button']} ${dialogStyles['global-style']}`}
                                      data-handle="playButton"
                                    >
                                      <div
                                        className={dialogStyles['video-play-button__wrapper']}
                                        style={{
                                          height: '100%',
                                          left: 0,
                                          opacity: 0,
                                          position: 'absolute',
                                          top: 0,
                                          transition: 'opacity 200ms ease 0s',
                                          width: '100%',
                                        }}
                                      >
                                        <div
                                          className={`${dialogStyles['video-play-button__inner-layout']} ${dialogStyles['global-style']}`}
                                        >
                                          <div className={dialogStyles['video-play-button__button-frame']} />
                                          <button
                                            className={dialogStyles['video-play-button__button']}
                                            aria-label="Play Video"
                                            tabIndex={-1}
                                          >
                                            <div
                                              style={{
                                                height: '52.4px',
                                                margin: 'auto',
                                                position: 'relative',
                                                width: '81.875px',
                                              }}
                                            >
                                              <svg
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 125 80"
                                                enableBackground="new 0 0 125 80"
                                                focusable="false"
                                                style={{
                                                  fill: 'rgb(255, 255, 255)',
                                                  height: '100%',
                                                  left: 0,
                                                  strokeWidth: 0,
                                                  top: 0,
                                                  width: '100%',
                                                }}
                                              >
                                                <rect
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="none"
                                                  width={125}
                                                  height={80}
                                                />
                                                <polygon
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="#FFFFFF"
                                                  points="53,22 53,58 79,40"
                                                />
                                              </svg>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-detail']} ${dialogStyles['global-style']}`}
                                      data-handle="durationIndicator"
                                    >
                                      <div className={dialogStyles['video-play-detail__wrapper']}>
                                        <div className={dialogStyles['video-play-detail__timer-box']}>
                                          <div className={dialogStyles['time-show']}>3 MIN</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={dialogStyles['video-card-detail']}>
                              <h3>Overview of Graticule Asset Management - Adam Levinson</h3>
                            </div>
                            <div className={dialogStyles['video-card-detail__desc-container']}>
                              <div className={dialogStyles['video-card-detail__desc-wrapper']}>
                                <h4>An overview of Graticule Asset Management - Adam Levinson</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Col>
                    <Col xs={6} md={3} className={dialogStyles['gallery-list_column-cards']}>
                      <a href="#" className={dialogStyles['video-card']}>
                        <div className={dialogStyles['video-card-wrapper']}>
                          <div className={dialogStyles['video-card-inner']}>
                            <div
                              className={dialogStyles['video-card_thumbnail-wrapper']}
                              style={{ flex: '0 0 auto', height: 147, overflow: 'hidden', position: 'relative' }}
                            >
                              <div className={dialogStyles['popover-video']}>
                                <div className={dialogStyles['popover-video__wrapper']}>
                                  <div className={dialogStyles['popover-video__poster']}>
                                    <div
                                      className={`${dialogStyles['poster-thumbnail']} ${dialogStyles['global-style']}`}
                                      data-handle="posterThumbnail"
                                    >
                                      <img
                                        alt=""
                                        className={dialogStyles['global-style']}
                                        srcSet="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-160.webp 160w, https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp 320w"
                                        src="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp"
                                      />
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-cover']} ${dialogStyles['global-style']}`}
                                      data-handle="video"
                                    >
                                      <div className={dialogStyles['video-cover-wrapper']}>
                                        <video
                                          id="wistia_simple_video_3110"
                                          crossOrigin="anonymous"
                                          poster="https://fast.wistia.com/assets/images/blank.gif"
                                          aria-label="Video"
                                          defaultplaybackrate={1}
                                          src="blob:https://www.uschinaseries.com/7acfad15-29c2-428c-868a-a4b3c9ac95c4"
                                          controlslist="nodownload"
                                          playsInline
                                          muted
                                          loop
                                          preload="metadata"
                                          type="video/m3u8"
                                          x-webkit-airplay="allow"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-slider']} ${dialogStyles['global-style']}`}
                                      data-handle="progressIndicator"
                                    >
                                      <div className={dialogStyles['video-slider-wrapper']}>
                                        <div className={dialogStyles['video-slider-white']}>
                                          <div
                                            className={dialogStyles['video-slider-blue']}
                                            style={{
                                              width: '73%',
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-button']} ${dialogStyles['global-style']}`}
                                      data-handle="playButton"
                                    >
                                      <div
                                        className={dialogStyles['video-play-button__wrapper']}
                                        style={{
                                          height: '100%',
                                          left: 0,
                                          opacity: 0,
                                          position: 'absolute',
                                          top: 0,
                                          transition: 'opacity 200ms ease 0s',
                                          width: '100%',
                                        }}
                                      >
                                        <div
                                          className={`${dialogStyles['video-play-button__inner-layout']} ${dialogStyles['global-style']}`}
                                        >
                                          <div className={dialogStyles['video-play-button__button-frame']} />
                                          <button
                                            className={dialogStyles['video-play-button__button']}
                                            aria-label="Play Video"
                                            tabIndex={-1}
                                          >
                                            <div
                                              style={{
                                                height: '52.4px',
                                                margin: 'auto',
                                                position: 'relative',
                                                width: '81.875px',
                                              }}
                                            >
                                              <svg
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 125 80"
                                                enableBackground="new 0 0 125 80"
                                                focusable="false"
                                                style={{
                                                  fill: 'rgb(255, 255, 255)',
                                                  height: '100%',
                                                  left: 0,
                                                  strokeWidth: 0,
                                                  top: 0,
                                                  width: '100%',
                                                }}
                                              >
                                                <rect
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="none"
                                                  width={125}
                                                  height={80}
                                                />
                                                <polygon
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="#FFFFFF"
                                                  points="53,22 53,58 79,40"
                                                />
                                              </svg>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-detail']} ${dialogStyles['global-style']}`}
                                      data-handle="durationIndicator"
                                    >
                                      <div className={dialogStyles['video-play-detail__wrapper']}>
                                        <div className={dialogStyles['video-play-detail__timer-box']}>
                                          <div className={dialogStyles['time-show']}>3 MIN</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={dialogStyles['video-card-detail']}>
                              <h3>Overview of Graticule Asset Management - Adam Levinson</h3>
                            </div>
                            <div className={dialogStyles['video-card-detail__desc-container']}>
                              <div className={dialogStyles['video-card-detail__desc-wrapper']}>
                                <h4>An overview of Graticule Asset Management - Adam Levinson</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Col>
                    <Col xs={6} md={3} className={dialogStyles['gallery-list_column-cards']}>
                      <a href="#" className={dialogStyles['video-card']}>
                        <div className={dialogStyles['video-card-wrapper']}>
                          <div className={dialogStyles['video-card-inner']}>
                            <div
                              className={dialogStyles['video-card_thumbnail-wrapper']}
                              style={{ flex: '0 0 auto', height: 147, overflow: 'hidden', position: 'relative' }}
                            >
                              <div className={dialogStyles['popover-video']}>
                                <div className={dialogStyles['popover-video__wrapper']}>
                                  <div className={dialogStyles['popover-video__poster']}>
                                    <div
                                      className={`${dialogStyles['poster-thumbnail']} ${dialogStyles['global-style']}`}
                                      data-handle="posterThumbnail"
                                    >
                                      <img
                                        alt=""
                                        className={dialogStyles['global-style']}
                                        srcSet="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-160.webp 160w, https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp 320w"
                                        src="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp"
                                      />
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-cover']} ${dialogStyles['global-style']}`}
                                      data-handle="video"
                                    >
                                      <div className={dialogStyles['video-cover-wrapper']}>
                                        <video
                                          id="wistia_simple_video_3110"
                                          crossOrigin="anonymous"
                                          poster="https://fast.wistia.com/assets/images/blank.gif"
                                          aria-label="Video"
                                          defaultplaybackrate={1}
                                          src="blob:https://www.uschinaseries.com/7acfad15-29c2-428c-868a-a4b3c9ac95c4"
                                          controlslist="nodownload"
                                          playsInline
                                          muted
                                          loop
                                          preload="metadata"
                                          type="video/m3u8"
                                          x-webkit-airplay="allow"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-slider']} ${dialogStyles['global-style']}`}
                                      data-handle="progressIndicator"
                                    >
                                      <div className={dialogStyles['video-slider-wrapper']}>
                                        <div className={dialogStyles['video-slider-white']}>
                                          <div
                                            className={dialogStyles['video-slider-blue']}
                                            style={{
                                              width: '73%',
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-button']} ${dialogStyles['global-style']}`}
                                      data-handle="playButton"
                                    >
                                      <div
                                        className={dialogStyles['video-play-button__wrapper']}
                                        style={{
                                          height: '100%',
                                          left: 0,
                                          opacity: 0,
                                          position: 'absolute',
                                          top: 0,
                                          transition: 'opacity 200ms ease 0s',
                                          width: '100%',
                                        }}
                                      >
                                        <div
                                          className={`${dialogStyles['video-play-button__inner-layout']} ${dialogStyles['global-style']}`}
                                        >
                                          <div className={dialogStyles['video-play-button__button-frame']} />
                                          <button
                                            className={dialogStyles['video-play-button__button']}
                                            aria-label="Play Video"
                                            tabIndex={-1}
                                          >
                                            <div
                                              style={{
                                                height: '52.4px',
                                                margin: 'auto',
                                                position: 'relative',
                                                width: '81.875px',
                                              }}
                                            >
                                              <svg
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 125 80"
                                                enableBackground="new 0 0 125 80"
                                                focusable="false"
                                                style={{
                                                  fill: 'rgb(255, 255, 255)',
                                                  height: '100%',
                                                  left: 0,
                                                  strokeWidth: 0,
                                                  top: 0,
                                                  width: '100%',
                                                }}
                                              >
                                                <rect
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="none"
                                                  width={125}
                                                  height={80}
                                                />
                                                <polygon
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="#FFFFFF"
                                                  points="53,22 53,58 79,40"
                                                />
                                              </svg>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-detail']} ${dialogStyles['global-style']}`}
                                      data-handle="durationIndicator"
                                    >
                                      <div className={dialogStyles['video-play-detail__wrapper']}>
                                        <div className={dialogStyles['video-play-detail__timer-box']}>
                                          <div className={dialogStyles['time-show']}>3 MIN</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={dialogStyles['video-card-detail']}>
                              <h3>Overview of Graticule Asset Management - Adam Levinson</h3>
                            </div>
                            <div className={dialogStyles['video-card-detail__desc-container']}>
                              <div className={dialogStyles['video-card-detail__desc-wrapper']}>
                                <h4>An overview of Graticule Asset Management - Adam Levinson</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Col>
                  </Row>
                  <Row className={dialogStyles['gallery-list_row-cards']}>
                    <Col xs={6} md={3} className={dialogStyles['gallery-list_column-cards']}>
                      <a href="#" className={dialogStyles['video-card']}>
                        <div className={dialogStyles['video-card-wrapper']}>
                          <div className={dialogStyles['video-card-inner']}>
                            <div
                              className={dialogStyles['video-card_thumbnail-wrapper']}
                              style={{ flex: '0 0 auto', height: 147, overflow: 'hidden', position: 'relative' }}
                            >
                              <div className={dialogStyles['popover-video']}>
                                <div className={dialogStyles['popover-video__wrapper']}>
                                  <div className={dialogStyles['popover-video__poster']}>
                                    <div
                                      className={`${dialogStyles['poster-thumbnail']} ${dialogStyles['global-style']}`}
                                      data-handle="posterThumbnail"
                                    >
                                      <img
                                        alt=""
                                        className={dialogStyles['global-style']}
                                        srcSet="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-160.webp 160w, https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp 320w"
                                        src="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp"
                                      />
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-cover']} ${dialogStyles['global-style']}`}
                                      data-handle="video"
                                    >
                                      <div className={dialogStyles['video-cover-wrapper']}>
                                        <video
                                          id="wistia_simple_video_3110"
                                          crossOrigin="anonymous"
                                          poster="https://fast.wistia.com/assets/images/blank.gif"
                                          aria-label="Video"
                                          defaultplaybackrate={1}
                                          src="blob:https://www.uschinaseries.com/7acfad15-29c2-428c-868a-a4b3c9ac95c4"
                                          controlslist="nodownload"
                                          playsInline
                                          muted
                                          loop
                                          preload="metadata"
                                          type="video/m3u8"
                                          x-webkit-airplay="allow"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-slider']} ${dialogStyles['global-style']}`}
                                      data-handle="progressIndicator"
                                    >
                                      <div className={dialogStyles['video-slider-wrapper']}>
                                        <div className={dialogStyles['video-slider-white']}>
                                          <div
                                            className={dialogStyles['video-slider-blue']}
                                            style={{
                                              width: '73%',
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-button']} ${dialogStyles['global-style']}`}
                                      data-handle="playButton"
                                    >
                                      <div
                                        className={dialogStyles['video-play-button__wrapper']}
                                        style={{
                                          height: '100%',
                                          left: 0,
                                          opacity: 0,
                                          position: 'absolute',
                                          top: 0,
                                          transition: 'opacity 200ms ease 0s',
                                          width: '100%',
                                        }}
                                      >
                                        <div
                                          className={`${dialogStyles['video-play-button__inner-layout']} ${dialogStyles['global-style']}`}
                                        >
                                          <div className={dialogStyles['video-play-button__button-frame']} />
                                          <button
                                            className={dialogStyles['video-play-button__button']}
                                            aria-label="Play Video"
                                            tabIndex={-1}
                                          >
                                            <div
                                              style={{
                                                height: '52.4px',
                                                margin: 'auto',
                                                position: 'relative',
                                                width: '81.875px',
                                              }}
                                            >
                                              <svg
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 125 80"
                                                enableBackground="new 0 0 125 80"
                                                focusable="false"
                                                style={{
                                                  fill: 'rgb(255, 255, 255)',
                                                  height: '100%',
                                                  left: 0,
                                                  strokeWidth: 0,
                                                  top: 0,
                                                  width: '100%',
                                                }}
                                              >
                                                <rect
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="none"
                                                  width={125}
                                                  height={80}
                                                />
                                                <polygon
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="#FFFFFF"
                                                  points="53,22 53,58 79,40"
                                                />
                                              </svg>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-detail']} ${dialogStyles['global-style']}`}
                                      data-handle="durationIndicator"
                                    >
                                      <div className={dialogStyles['video-play-detail__wrapper']}>
                                        <div className={dialogStyles['video-play-detail__timer-box']}>
                                          <div className={dialogStyles['time-show']}>3 MIN</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={dialogStyles['video-card-detail']}>
                              <h3>Overview of Graticule Asset Management - Adam Levinson</h3>
                            </div>
                            <div className={dialogStyles['video-card-detail__desc-container']}>
                              <div className={dialogStyles['video-card-detail__desc-wrapper']}>
                                <h4>An overview of Graticule Asset Management - Adam Levinson</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Col>
                    <Col xs={6} md={3} className={dialogStyles['gallery-list_column-cards']}>
                      <a href="#" className={dialogStyles['video-card']}>
                        <div className={dialogStyles['video-card-wrapper']}>
                          <div className={dialogStyles['video-card-inner']}>
                            <div
                              className={dialogStyles['video-card_thumbnail-wrapper']}
                              style={{ flex: '0 0 auto', height: 147, overflow: 'hidden', position: 'relative' }}
                            >
                              <div className={dialogStyles['popover-video']}>
                                <div className={dialogStyles['popover-video__wrapper']}>
                                  <div className={dialogStyles['popover-video__poster']}>
                                    <div
                                      className={`${dialogStyles['poster-thumbnail']} ${dialogStyles['global-style']}`}
                                      data-handle="posterThumbnail"
                                    >
                                      <img
                                        alt=""
                                        className={dialogStyles['global-style']}
                                        srcSet="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-160.webp 160w, https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp 320w"
                                        src="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp"
                                      />
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-cover']} ${dialogStyles['global-style']}`}
                                      data-handle="video"
                                    >
                                      <div className={dialogStyles['video-cover-wrapper']}>
                                        <video
                                          id="wistia_simple_video_3110"
                                          crossOrigin="anonymous"
                                          poster="https://fast.wistia.com/assets/images/blank.gif"
                                          aria-label="Video"
                                          defaultplaybackrate={1}
                                          src="blob:https://www.uschinaseries.com/7acfad15-29c2-428c-868a-a4b3c9ac95c4"
                                          controlslist="nodownload"
                                          playsInline
                                          muted
                                          loop
                                          preload="metadata"
                                          type="video/m3u8"
                                          x-webkit-airplay="allow"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-slider']} ${dialogStyles['global-style']}`}
                                      data-handle="progressIndicator"
                                    >
                                      <div className={dialogStyles['video-slider-wrapper']}>
                                        <div className={dialogStyles['video-slider-white']}>
                                          <div
                                            className={dialogStyles['video-slider-blue']}
                                            style={{
                                              width: '73%',
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-button']} ${dialogStyles['global-style']}`}
                                      data-handle="playButton"
                                    >
                                      <div
                                        className={dialogStyles['video-play-button__wrapper']}
                                        style={{
                                          height: '100%',
                                          left: 0,
                                          opacity: 0,
                                          position: 'absolute',
                                          top: 0,
                                          transition: 'opacity 200ms ease 0s',
                                          width: '100%',
                                        }}
                                      >
                                        <div
                                          className={`${dialogStyles['video-play-button__inner-layout']} ${dialogStyles['global-style']}`}
                                        >
                                          <div className={dialogStyles['video-play-button__button-frame']} />
                                          <button
                                            className={dialogStyles['video-play-button__button']}
                                            aria-label="Play Video"
                                            tabIndex={-1}
                                          >
                                            <div
                                              style={{
                                                height: '52.4px',
                                                margin: 'auto',
                                                position: 'relative',
                                                width: '81.875px',
                                              }}
                                            >
                                              <svg
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 125 80"
                                                enableBackground="new 0 0 125 80"
                                                focusable="false"
                                                style={{
                                                  fill: 'rgb(255, 255, 255)',
                                                  height: '100%',
                                                  left: 0,
                                                  strokeWidth: 0,
                                                  top: 0,
                                                  width: '100%',
                                                }}
                                              >
                                                <rect
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="none"
                                                  width={125}
                                                  height={80}
                                                />
                                                <polygon
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="#FFFFFF"
                                                  points="53,22 53,58 79,40"
                                                />
                                              </svg>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-detail']} ${dialogStyles['global-style']}`}
                                      data-handle="durationIndicator"
                                    >
                                      <div className={dialogStyles['video-play-detail__wrapper']}>
                                        <div className={dialogStyles['video-play-detail__timer-box']}>
                                          <div className={dialogStyles['time-show']}>3 MIN</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={dialogStyles['video-card-detail']}>
                              <h3>Overview of Graticule Asset Management - Adam Levinson</h3>
                            </div>
                            <div className={dialogStyles['video-card-detail__desc-container']}>
                              <div className={dialogStyles['video-card-detail__desc-wrapper']}>
                                <h4>An overview of Graticule Asset Management - Adam Levinson</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Col>
                    <Col xs={6} md={3} className={dialogStyles['gallery-list_column-cards']}>
                      <a href="#" className={dialogStyles['video-card']}>
                        <div className={dialogStyles['video-card-wrapper']}>
                          <div className={dialogStyles['video-card-inner']}>
                            <div
                              className={dialogStyles['video-card_thumbnail-wrapper']}
                              style={{ flex: '0 0 auto', height: 147, overflow: 'hidden', position: 'relative' }}
                            >
                              <div className={dialogStyles['popover-video']}>
                                <div className={dialogStyles['popover-video__wrapper']}>
                                  <div className={dialogStyles['popover-video__poster']}>
                                    <div
                                      className={`${dialogStyles['poster-thumbnail']} ${dialogStyles['global-style']}`}
                                      data-handle="posterThumbnail"
                                    >
                                      <img
                                        alt=""
                                        className={dialogStyles['global-style']}
                                        srcSet="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-160.webp 160w, https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp 320w"
                                        src="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp"
                                      />
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-cover']} ${dialogStyles['global-style']}`}
                                      data-handle="video"
                                    >
                                      <div className={dialogStyles['video-cover-wrapper']}>
                                        <video
                                          id="wistia_simple_video_3110"
                                          crossOrigin="anonymous"
                                          poster="https://fast.wistia.com/assets/images/blank.gif"
                                          aria-label="Video"
                                          defaultplaybackrate={1}
                                          src="blob:https://www.uschinaseries.com/7acfad15-29c2-428c-868a-a4b3c9ac95c4"
                                          controlslist="nodownload"
                                          playsInline
                                          muted
                                          loop
                                          preload="metadata"
                                          type="video/m3u8"
                                          x-webkit-airplay="allow"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-slider']} ${dialogStyles['global-style']}`}
                                      data-handle="progressIndicator"
                                    >
                                      <div className={dialogStyles['video-slider-wrapper']}>
                                        <div className={dialogStyles['video-slider-white']}>
                                          <div
                                            className={dialogStyles['video-slider-blue']}
                                            style={{
                                              width: '73%',
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-button']} ${dialogStyles['global-style']}`}
                                      data-handle="playButton"
                                    >
                                      <div
                                        className={dialogStyles['video-play-button__wrapper']}
                                        style={{
                                          height: '100%',
                                          left: 0,
                                          opacity: 0,
                                          position: 'absolute',
                                          top: 0,
                                          transition: 'opacity 200ms ease 0s',
                                          width: '100%',
                                        }}
                                      >
                                        <div
                                          className={`${dialogStyles['video-play-button__inner-layout']} ${dialogStyles['global-style']}`}
                                        >
                                          <div className={dialogStyles['video-play-button__button-frame']} />
                                          <button
                                            className={dialogStyles['video-play-button__button']}
                                            aria-label="Play Video"
                                            tabIndex={-1}
                                          >
                                            <div
                                              style={{
                                                height: '52.4px',
                                                margin: 'auto',
                                                position: 'relative',
                                                width: '81.875px',
                                              }}
                                            >
                                              <svg
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 125 80"
                                                enableBackground="new 0 0 125 80"
                                                focusable="false"
                                                style={{
                                                  fill: 'rgb(255, 255, 255)',
                                                  height: '100%',
                                                  left: 0,
                                                  strokeWidth: 0,
                                                  top: 0,
                                                  width: '100%',
                                                }}
                                              >
                                                <rect
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="none"
                                                  width={125}
                                                  height={80}
                                                />
                                                <polygon
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="#FFFFFF"
                                                  points="53,22 53,58 79,40"
                                                />
                                              </svg>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-detail']} ${dialogStyles['global-style']}`}
                                      data-handle="durationIndicator"
                                    >
                                      <div className={dialogStyles['video-play-detail__wrapper']}>
                                        <div className={dialogStyles['video-play-detail__timer-box']}>
                                          <div className={dialogStyles['time-show']}>3 MIN</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={dialogStyles['video-card-detail']}>
                              <h3>Overview of Graticule Asset Management - Adam Levinson</h3>
                            </div>
                            <div className={dialogStyles['video-card-detail__desc-container']}>
                              <div className={dialogStyles['video-card-detail__desc-wrapper']}>
                                <h4>An overview of Graticule Asset Management - Adam Levinson</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Col>
                    <Col xs={6} md={3} className={dialogStyles['gallery-list_column-cards']}>
                      <a href="#" className={dialogStyles['video-card']}>
                        <div className={dialogStyles['video-card-wrapper']}>
                          <div className={dialogStyles['video-card-inner']}>
                            <div
                              className={dialogStyles['video-card_thumbnail-wrapper']}
                              style={{ flex: '0 0 auto', height: 147, overflow: 'hidden', position: 'relative' }}
                            >
                              <div className={dialogStyles['popover-video']}>
                                <div className={dialogStyles['popover-video__wrapper']}>
                                  <div className={dialogStyles['popover-video__poster']}>
                                    <div
                                      className={`${dialogStyles['poster-thumbnail']} ${dialogStyles['global-style']}`}
                                      data-handle="posterThumbnail"
                                    >
                                      <img
                                        alt=""
                                        className={dialogStyles['global-style']}
                                        srcSet="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-160.webp 160w, https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp 320w"
                                        src="https://fast.wistia.com/embed/medias/fjn6nendr7/thumbnail-320.webp"
                                      />
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-cover']} ${dialogStyles['global-style']}`}
                                      data-handle="video"
                                    >
                                      <div className={dialogStyles['video-cover-wrapper']}>
                                        <video
                                          id="wistia_simple_video_3110"
                                          crossOrigin="anonymous"
                                          poster="https://fast.wistia.com/assets/images/blank.gif"
                                          aria-label="Video"
                                          defaultplaybackrate={1}
                                          src="blob:https://www.uschinaseries.com/7acfad15-29c2-428c-868a-a4b3c9ac95c4"
                                          controlslist="nodownload"
                                          playsInline
                                          muted
                                          loop
                                          preload="metadata"
                                          type="video/m3u8"
                                          x-webkit-airplay="allow"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-slider']} ${dialogStyles['global-style']}`}
                                      data-handle="progressIndicator"
                                    >
                                      <div className={dialogStyles['video-slider-wrapper']}>
                                        <div className={dialogStyles['video-slider-white']}>
                                          <div
                                            className={dialogStyles['video-slider-blue']}
                                            style={{
                                              width: '73%',
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-button']} ${dialogStyles['global-style']}`}
                                      data-handle="playButton"
                                    >
                                      <div
                                        className={dialogStyles['video-play-button__wrapper']}
                                        style={{
                                          height: '100%',
                                          left: 0,
                                          opacity: 0,
                                          position: 'absolute',
                                          top: 0,
                                          transition: 'opacity 200ms ease 0s',
                                          width: '100%',
                                        }}
                                      >
                                        <div
                                          className={`${dialogStyles['video-play-button__inner-layout']} ${dialogStyles['global-style']}`}
                                        >
                                          <div className={dialogStyles['video-play-button__button-frame']} />
                                          <button
                                            className={dialogStyles['video-play-button__button']}
                                            aria-label="Play Video"
                                            tabIndex={-1}
                                          >
                                            <div
                                              style={{
                                                height: '52.4px',
                                                margin: 'auto',
                                                position: 'relative',
                                                width: '81.875px',
                                              }}
                                            >
                                              <svg
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 125 80"
                                                enableBackground="new 0 0 125 80"
                                                focusable="false"
                                                style={{
                                                  fill: 'rgb(255, 255, 255)',
                                                  height: '100%',
                                                  left: 0,
                                                  strokeWidth: 0,
                                                  top: 0,
                                                  width: '100%',
                                                }}
                                              >
                                                <rect
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="none"
                                                  width={125}
                                                  height={80}
                                                />
                                                <polygon
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  fill="#FFFFFF"
                                                  points="53,22 53,58 79,40"
                                                />
                                              </svg>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={`${dialogStyles['video-play-detail']} ${dialogStyles['global-style']}`}
                                      data-handle="durationIndicator"
                                    >
                                      <div className={dialogStyles['video-play-detail__wrapper']}>
                                        <div className={dialogStyles['video-play-detail__timer-box']}>
                                          <div className={dialogStyles['time-show']}>3 MIN</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={dialogStyles['video-card-detail']}>
                              <h3>Overview of Graticule Asset Management - Adam Levinson</h3>
                            </div>
                            <div className={dialogStyles['video-card-detail__desc-container']}>
                              <div className={dialogStyles['video-card-detail__desc-wrapper']}>
                                <h4>An overview of Graticule Asset Management - Adam Levinson</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogGallery;
