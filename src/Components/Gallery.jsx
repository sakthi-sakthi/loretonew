import React, { useState } from 'react';

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'business',
      image: 'https://cms.loreto.in/storage/7/65fc053f6bce6_Photo_4558207.jpg',
      title: 'Business',
      description: 'Mayor of Arsonia',
    },
    {
      id: 2,
      category: 'government',
      image: 'https://cms.loreto.in/storage/6/65fc053f3d39c_Photo_4557122.jpg',
      title: 'Government',
      description: 'Town of Maximonia',
    },
    {
      id: 3,
      category: 'culture',
      image: 'https://cms.loreto.in/storage/5/65fc053f07efd_Photo_4553239.jpg',
      title: 'Culture',
      description: 'Melton Art Museum',
    },
    {
      id: 4,
      category: 'events',
      image: 'https://cms.loreto.in/uploads/66336bb3c96a4_about.jpg',
      title: 'Events',
      description: 'Summer Conference',
    },
    {
      id: 5,
      category: 'pubpla',
      image: 'https://cms.loreto.in/uploads/66336bb44d120_plt.jpg',
      title: 'Public Places',
      description: 'Metro Train Station',
    },
    {
      id: 6,
      category: 'business',
      image: 'https://cms.loreto.in/uploads/66336bb45e874_ilt.jpg',
      title: 'Business',
      description: 'Modern Buildings',
    },
  ];

  const filteredItems =
    filter === 'all'
      ? galleryItems
      : galleryItems.filter(item => item.category === filter);

  return (
    <section className="exploreDepartmentsBlock py-8 py-md-10 py-lg-14 py-xl-22">
      <div className="container">
        <header className="headingHead text-center cdTitle mb-7 mb-md-13">
          <h2 className="fwSemiBold mb-4">Our Gallery</h2>
          <p>The images about recent activities for our province.</p>
        </header>
        <ul className="list-unstyled ifbFiltersList d-flex isoFiltersList mb-lg-12 fontAlter flex-wrap justify-content-center">
          <li className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
            <a href="/">All</a>
          </li>
          <li className={filter === 'government' ? 'active' : ''} onClick={() => setFilter('government')}>
            <a href="/">Government</a>
          </li>
          <li className={filter === 'business' ? 'active' : ''} onClick={() => setFilter('business')}>
            <a href="/">Business</a>
          </li>
          <li className={filter === 'culture' ? 'active' : ''} onClick={() => setFilter('culture')}>
            <a href="/">Culture</a>
          </li>
          <li className={filter === 'pubpla' ? 'active' : ''} onClick={() => setFilter('pubpla')}>
            <a href="/">Public Places</a>
          </li>
          <li className={filter === 'events' ? 'active' : ''} onClick={() => setFilter('events')}>
            <a href="/">Events</a>
          </li>
        </ul>
        <div className="row justify-content-center isoContentHolder mb-8">
          {filteredItems.map(item => (
            <div key={item.id} className={`col-12 col-md-6 col-lg-4 isoCol ${item.category}`}>
              <div
                className="echColumn echColumnii d-block w-100 bgCover position-relative mb-6"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <a
                  href={item.image}
                  className="echCountTag position-absolute fwSemiBold text-white px-3 py-1 lightbox"
                  data-fancybox="true"
                  tabIndex={-1}
                >
                  <i className="far fa-image icn" aria-hidden="true">
                    <span className="sr-only">icon</span>
                  </i>
                  6
                </a>
                <div className="echcCaptionWrap position-absolute w-100 text-white px-3 py-2 px-sm-5 py-sm-4">
                  <h3 className="mb-0 text-white">
                    <strong className="d-block font-weight-normal fontBase echCatTitle mb-1">
                      {item.title}
                    </strong>
                    <span className="d-block">{item.description}</span>
                  </h3>
                  <a href="portfolioSingle-1.html">
                    <i className="rounded-circle icomoon-arrowRight d-flex align-items-center justify-content-center spanLinkGo">
                      <span className="sr-only">icon</span>
                    </i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
