import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Col, Row } from 'react-bootstrap';
import Button from '../../Infrastructure/Button';
import dialogStyles from './dialogGallery.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faTimes } from '@fortawesome/free-solid-svg-icons';
const DialogGallery = () => {
  const router = useRouter();

  const handleMouseEvent = (e, play) => {
    e.preventDefault();
    const element = e.relatedTarget.querySelector(`.${dialogStyles['video-cover__video']}`);
    const playPromise = play ? element.play() : element.pause();
    if (playPromise !== undefined) {
      playPromise
        .then(function (res) {
          console.log('res', res);
          // Automatic playback started!
        })
        .catch(function (error) {
          console.log(error);
          // Automatic playback failed.
          // Show a UI element to let the user manually start playback.
        });
    }
  };
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
                  <Button type="button" className={dialogStyles['play-button']} handleClick={() => {}}>
                    <span className={dialogStyles['play-button__icon']}>
                      <FontAwesomeIcon icon={faPlay} />
                    </span>
                    <span className={dialogStyles['play-button__text']}>Play</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className={`${dialogStyles['gallery-list']} ${dialogStyles['global-style']}`}>
            <div className={dialogStyles['gallery-list__body']}>
              <div className={dialogStyles['gallery-list__view-section']}>
                <div className={dialogStyles['gallery-list__video-cards']}>
                  <Row className={dialogStyles['gallery-list_row-cards']}>
                    <Col xs={12} md={4} lg={3} className={dialogStyles['gallery-list_column-cards']}>
                      <a
                        href="#"
                        className={dialogStyles['video-card']}
                        onMouseEnter={(e) => handleMouseEvent(e, true)}
                        onMouseLeave={(e) => handleMouseEvent(e, false)}
                      >
                        <div className={dialogStyles['video-card-wrapper']}>
                          <div className={dialogStyles['video-card-inner']}>
                            <div className={dialogStyles['video-card_thumbnail-wrapper']}>
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
                                          className={dialogStyles['video-cover__video']}
                                          poster="https://fast.wistia.com/assets/images/blank.gif"
                                          id="wistia_simple_video_3110"
                                          aria-label="Video"
                                          defaultplaybackrate={1}
                                          src="https://www.uschinaseries.com/7acfad15-29c2-428c-868a-a4b3c9ac95c4"
                                          controlsList="nodownload"
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
                                      <div className={dialogStyles['video-play-button__wrapper']}>
                                        <div
                                          className={`${dialogStyles['video-play-button__inner-layout']} ${dialogStyles['global-style']}`}
                                        >
                                          <div className={dialogStyles['video-play-button__button-frame']} />
                                          <button
                                            className={dialogStyles['video-play-button__button']}
                                            aria-label="Play Video"
                                            tabIndex={-1}
                                          >
                                            <div className={dialogStyles['video-play-button__icon']}>
                                              <FontAwesomeIcon icon={faPlay} />
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
                    <Col xs={12} md={4} lg={3} className={dialogStyles['gallery-list_column-cards']}>
                      <a
                        href="#"
                        className={dialogStyles['video-card']}
                        onMouseEnter={(e) => handleMouseEvent(e, true)}
                        onMouseLeave={(e) => handleMouseEvent(e, false)}
                      >
                        <div className={dialogStyles['video-card-wrapper']}>
                          <div className={dialogStyles['video-card-inner']}>
                            <div className={dialogStyles['video-card_thumbnail-wrapper']}>
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
                                          className={dialogStyles['video-cover__video']}
                                          poster="https://fast.wistia.com/assets/images/blank.gif"
                                          id="wistia_simple_video_3110"
                                          aria-label="Video"
                                          defaultplaybackrate={1}
                                          src="https://www.uschinaseries.com/7acfad15-29c2-428c-868a-a4b3c9ac95c4"
                                          controlsList="nodownload"
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
                                      <div className={dialogStyles['video-play-button__wrapper']}>
                                        <div
                                          className={`${dialogStyles['video-play-button__inner-layout']} ${dialogStyles['global-style']}`}
                                        >
                                          <div className={dialogStyles['video-play-button__button-frame']} />
                                          <button
                                            className={dialogStyles['video-play-button__button']}
                                            aria-label="Play Video"
                                            tabIndex={-1}
                                          >
                                            <div className={dialogStyles['video-play-button__icon']}>
                                              <FontAwesomeIcon icon={faPlay} />
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
                    <Col xs={12} md={4} lg={3} className={dialogStyles['gallery-list_column-cards']}>
                      <a
                        href="#"
                        className={dialogStyles['video-card']}
                        onMouseEnter={(e) => handleMouseEvent(e, true)}
                        onMouseLeave={(e) => handleMouseEvent(e, false)}
                      >
                        <div className={dialogStyles['video-card-wrapper']}>
                          <div className={dialogStyles['video-card-inner']}>
                            <div className={dialogStyles['video-card_thumbnail-wrapper']}>
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
                                          className={dialogStyles['video-cover__video']}
                                          poster="https://fast.wistia.com/assets/images/blank.gif"
                                          id="wistia_simple_video_3110"
                                          aria-label="Video"
                                          defaultplaybackrate={1}
                                          src="https://www.uschinaseries.com/7acfad15-29c2-428c-868a-a4b3c9ac95c4"
                                          controlsList="nodownload"
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
                                      <div className={dialogStyles['video-play-button__wrapper']}>
                                        <div
                                          className={`${dialogStyles['video-play-button__inner-layout']} ${dialogStyles['global-style']}`}
                                        >
                                          <div className={dialogStyles['video-play-button__button-frame']} />
                                          <button
                                            className={dialogStyles['video-play-button__button']}
                                            aria-label="Play Video"
                                            tabIndex={-1}
                                          >
                                            <div className={dialogStyles['video-play-button__icon']}>
                                              <FontAwesomeIcon icon={faPlay} />
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
                    <Col xs={12} md={4} lg={3} className={dialogStyles['gallery-list_column-cards']}>
                      <a
                        href="#"
                        className={dialogStyles['video-card']}
                        onMouseEnter={(e) => handleMouseEvent(e, true)}
                        onMouseLeave={(e) => handleMouseEvent(e, false)}
                      >
                        <div className={dialogStyles['video-card-wrapper']}>
                          <div className={dialogStyles['video-card-inner']}>
                            <div className={dialogStyles['video-card_thumbnail-wrapper']}>
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
                                          className={dialogStyles['video-cover__video']}
                                          poster="https://fast.wistia.com/assets/images/blank.gif"
                                          id="wistia_simple_video_3110"
                                          aria-label="Video"
                                          defaultplaybackrate={1}
                                          src="https://www.uschinaseries.com/7acfad15-29c2-428c-868a-a4b3c9ac95c4"
                                          controlsList="nodownload"
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
                                      <div className={dialogStyles['video-play-button__wrapper']}>
                                        <div
                                          className={`${dialogStyles['video-play-button__inner-layout']} ${dialogStyles['global-style']}`}
                                        >
                                          <div className={dialogStyles['video-play-button__button-frame']} />
                                          <button
                                            className={dialogStyles['video-play-button__button']}
                                            aria-label="Play Video"
                                            tabIndex={-1}
                                          >
                                            <div className={dialogStyles['video-play-button__icon']}>
                                              <FontAwesomeIcon icon={faPlay} />
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

        <Link href={{ pathname: router?.pathname }}>
          <a className={dialogStyles['close']}>
            <FontAwesomeIcon icon={faTimes} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default DialogGallery;
