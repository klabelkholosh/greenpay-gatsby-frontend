import React from 'react';

export interface FirstSectionProps {
  content: {
    headline: string;
    subheading: {
      subheading: string;
    };
    image: {
      file: {
        url: string;
      };
    };
  };
}

const FirstSection: React.FC<FirstSectionProps> = ({ content }) => {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-lg-5">
          <img
            alt=""
            src={content?.image.file.url}
            className="mx-sm-0 mx-md-5 mx-lg-0"
          />
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6 d-flex justify-content-around flex-column text-center">
          <h1 className="CSTM-font-size-frontPage-heading text-lg-right text-CSTM-ep-blue pt-lg-0 pt-5">
            {content?.headline}
          </h1>
          <div className="text-lg-right text-CSTM-ep-blue pt-lg-0 pt-5">
            {content?.subheading.subheading}
          </div>
          <div className="text-lg-right text-CSTM-ep-blue pt-lg-0 pt-5">
            <a className="btn btn-CSTM-ep-green text-nowrap text-white px-4 my-2 rounded">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
