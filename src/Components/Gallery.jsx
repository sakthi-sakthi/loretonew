import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import './css/gallerystyle.css';
import './css/newstyle.css';
import axios from 'axios';
import moment from 'moment';

const Gallery = () => {
  const images = [
    {
      original: 'https://cms.loreto.in/storage/7/65fc053f6bce6_Photo_4558207.jpg',
      thumbnail: 'https://cms.loreto.in/storage/7/65fc053f6bce6_Photo_4558207.jpg',
    },
    {
      original: 'https://cms.loreto.in/storage/6/65fc053f3d39c_Photo_4557122.jpg',
      thumbnail: 'https://cms.loreto.in/storage/6/65fc053f3d39c_Photo_4557122.jpg',
    },
    {
      original: 'https://cms.loreto.in/storage/5/65fc053f07efd_Photo_4553239.jpg',
      thumbnail: 'https://cms.loreto.in/storage/5/65fc053f07efd_Photo_4553239.jpg',
    },
  ];

  const [birthday, setBirthday] = useState([]);

  useEffect(() => {
    axios
      .get('https://app.loreto.in/api/member/province/birthday/this_month/1')
      .then((res) => {
        const currentDate = moment();
        const filteredBirthdays = res.data.data.filter((item) => {
          const birthdayDate = moment(item.dob, 'DD - MMMM');
          return birthdayDate.isSameOrAfter(currentDate, 'day');
        });
        setBirthday(filteredBirthdays.slice(0, 5));
      });
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
                <p>"The images about recent activities for our province"</p>
              </header>
              <ImageGallery items={images} />
            </div>
            <div className="col-lg-6">
              <header className="headingHead cdTitle mb-7 mb-md-13">
                <h2 className="fwSemiBold mb-4">Upcoming Birthdays</h2>
                <p>"Don't forget to wish them on their birthday!"</p>
              </header>
              <div
                className="mousescroll"
                id="scroll_this"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {birthday.map((item, index) => {
                  const birthdayDate = moment(item.dob, 'DD - MMMM').startOf('day');
                  const isToday = birthdayDate.isSame(today, 'day');
                  return (
                    <div key={index}>
                      <div className="birthday-box">
                        <img className="img-responsive img-style" id="imgstyles" src={item.image} alt="img" />
                        <div className="emp_details">
                          <p style={{ color: '#337ab7' }}>{item.member_name}</p>
                          <p>{item.community_id}</p>
                          <p>{item.dob}</p>
                        </div>
                        {isToday && (
                          <div style={{ marginTop: '-16%', marginLeft: '65%' }}>
                            <div className="birth_style">
                              <div style={{ position: 'relative' }}>
                                <img
                                  src="https://bsofterp.boscosofttech.com/bsf_website/static/src/img/graphics-happy-birthday.gif"
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
                                  src="https://img1.picmix.com/output/stamp/normal/8/1/8/0/1540818_fa9b6.gif"
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
                {birthday.length >= 5 && (
                  <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '12px' }}>
                    <a href="https://app.loreto.in/member/birthdays" className="btn btn-primary btn-sm" style={{ borderRadius: '50px' }}>View All</a>
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
