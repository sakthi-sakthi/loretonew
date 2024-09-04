import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import './css/gallerystyle.css';
import './css/newstyle.css';
import axios from 'axios';
import moment from 'moment';
import { ApiUrl, ReligioUrl } from '../Api/ApiUrl';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [birthday, setBirthday] = useState([]);

  useEffect(() => {
    axios.get(`${ApiUrl}/get/gallery_images`)
      .then(res => {
        const fetchedImages = res?.data?.data?.map(img => ({
          original: img.image,
          thumbnail: img.image,
        }));
        setImages(fetchedImages);
      })
      .catch(error => console.error('Error fetching gallery images:', error));

    // Fetch birthdays
    axios.get(`${ReligioUrl}/member/province/birthday/this_month/1`)
      .then(res => {
        const currentDate = moment();
        const filteredBirthdays = res?.data?.data?.filter((item) => {
          const birthdayDate = moment(item.dob, 'DD - MMMM');
          return birthdayDate.isSameOrAfter(currentDate, 'day');
        });
        setBirthday(filteredBirthdays.slice(0, 5));
      })
      .catch(error => console.error('Error fetching birthdays:', error));
  }, []);

  const today = moment().startOf('day');

  const handleMouseEnter = () => {
    document.getElementById('scroll_this').classList.add('scroll-visible');
  };

  const handleMouseLeave = () => {
    document.getElementById('scroll_this').classList.remove('scroll-visible');
  };

  return (
    <>
      <section className="exploreDepartmentsBlock py-8 py-md-10 py-lg-14 py-xl-22">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <header className="headingHead cdTitle mb-7 mb-md-13">
                <h2 className="fwSemiBold mb-4">Our Gallery</h2>
              </header>
              <ImageGallery items={images} />
            </div>
            <div className="col-lg-6">
              <header className="headingHead cdTitle mb-7 mb-md-13">
                <h2 className="fwSemiBold mb-4">Upcoming Birthdays</h2>
              </header>
              {birthday?.length === 0 && (
                <div className="row">
                  <div className="col-12">
                    <p><b>No Birthday Available</b></p>
                  </div>
                </div>
              )}
              <div
                className="mousescroll"
                id="scroll_this"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {birthday?.map((item, index) => {
                  const birthdayDate = moment(item.dob, 'DD - MMMM').startOf('day');
                  const isToday = birthdayDate.isSame(today, 'day');
                  return (
                    <div key={index}>
                      <div className="birthday-box">
                        <img className="img-responsive img-style" id="imgstyles" src={item?.image || 'assets/images/noimage.avif'} alt="img" />
                        <div className="emp_details">
                          <p style={{ color: '#337ab7' }}>{item?.member_name || 'No Name'}</p>
                          <p>{item?.dob || 'No DOB'}</p>
                        </div>
                        {isToday && (
                          <div style={{ marginTop: '-16%', marginLeft: '65%' }}>
                            <div className="birth_style">
                              <div style={{ position: 'relative' }}>
                                <img
                                  src="assets/images/bday.gif"
                                  style={{
                                    height: 'auto',
                                    width: '100px',
                                    maxHeight: '100%',
                                    maxWidth: '100%',
                                    marginLeft: '30px',
                                  }}
                                  alt="nodata"
                                />
                                <img
                                  src="assets/images/popper.gif"
                                  style={{
                                    position: 'absolute',
                                    top: '17px',
                                    left: '50%',
                                    transform: 'translateX(-67%)',
                                    height: 'auto',
                                    width: '119px',
                                    maxHeight: '100%',
                                    maxWidth: '100%',
                                  }}
                                  alt="nodata"
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
                {birthday?.length >= 5 && (
                  <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '12px' }}>
                    <a href="/birthday-calendar" className="btn btn-primary btn-sm" style={{ borderRadius: '50px' }}>View All</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;