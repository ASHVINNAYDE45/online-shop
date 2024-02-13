import MySVGComponent2 from '@/mySvg/svg2';
import MySVGComponent3 from '@/mySvg/svg3';
import React from 'react'

function ShopUs() {
  return (
      <section className="why_section layout_padding">
          <div className="container">
              <div className="heading_container heading_center">
                  <h2>
                      Why Shop With Us
                  </h2>
              </div>
              <div className="row">
                  <div className="col-md-4">
                      <div className="box ">
                          <div className="img-box">
                              <MySVGComponent2/>
                          </div>
                          <div className="detail-box">
                              <h5>
                                  Fast Delivery
                              </h5>
                              <p>
                                  variations of passages of Lorem Ipsum available
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="box ">
                          <div className="img-box">
                            <MySVGComponent3/>
                             
                          </div>
                          <div className="detail-box">
                              <h5>
                                  Free Shiping
                              </h5>
                              <p>
                                  variations of passages of Lorem Ipsum available
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="box ">
                          <div className="img-box">
                              <svg id="_30_Premium" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" data-name="30_Premium">
                                  <g id="filled">
                                      <path d="m252.92 300h3.08a124.245 124.245 0 1 0 -4.49-.09c.075.009.15.023.226.03.394.039.789.06 1.184.06zm-96.92-124a100 100 0 1 1 100 100 100.113 100.113 0 0 1 -100-100z" />
                                      <path d="m447.445 387.635-80.4-80.4a171.682 171.682 0 0 0 60.955-131.235c0-94.841-77.159-172-172-172s-172 77.159-172 172c0 73.747 46.657 136.794 112 161.2v158.8c-.3 9.289 11.094 15.384 18.656 9.984l41.344-27.562 41.344 27.562c7.574 5.4 18.949-.7 18.656-9.984v-70.109l46.6 46.594c6.395 6.789 18.712 3.025 20.253-6.132l9.74-48.724 48.725-9.742c9.163-1.531 12.904-13.893 6.127-20.252zm-339.445-211.635c0-81.607 66.393-148 148-148s148 66.393 148 148-66.393 148-148 148-148-66.393-148-148zm154.656 278.016a12 12 0 0 0 -13.312 0l-29.344 19.562v-129.378a172.338 172.338 0 0 0 72 0v129.38zm117.381-58.353a12 12 0 0 0 -9.415 9.415l-6.913 34.58-47.709-47.709v-54.749a171.469 171.469 0 0 0 31.467-15.6l67.151 67.152z" />
                                      <path d="m287.62 236.985c8.349 4.694 19.251-3.212 17.367-12.618l-5.841-35.145 25.384-25c7.049-6.5 2.89-19.3-6.634-20.415l-35.23-5.306-15.933-31.867c-4.009-8.713-17.457-8.711-21.466 0l-15.933 31.866-35.23 5.306c-9.526 1.119-13.681 13.911-6.634 20.415l25.384 25-5.841 35.145c-1.879 9.406 9 17.31 17.367 12.618l31.62-16.414zm-53-32.359 2.928-17.615a12 12 0 0 0 -3.417-10.516l-12.721-12.531 17.658-2.66a12 12 0 0 0 8.947-6.5l7.985-15.971 7.985 15.972a12 12 0 0 0 8.947 6.5l17.658 2.66-12.723 12.535a12 12 0 0 0 -3.417 10.516l2.928 17.615-15.849-8.231a12 12 0 0 0 -11.058 0z" />
                                  </g>
                              </svg>
                          </div>
                          <div className="detail-box">
                              <h5>
                                  Best Quality
                              </h5>
                              <p>
                                  variations of passages of Lorem Ipsum available
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default ShopUs;