import React from 'react';

export interface FourthSectionProps {
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

const FourthSection: React.FC<FourthSectionProps> = ({ content }) => {
  return (
    <div className="container-fluid bg-CSTM-prussianBlue">
      <div className="container py-5">
        <div className="row p-5">
          <div className="col-lg-5 text-align-center">
            <img
              alt=""
              src={content?.image.file.url}
              className="mx-sm-0 mx-md-5 mx-lg-0"
            />
          </div>
          <div className="col-lg-1 text-align-center"></div>
          <div className="col-lg-6 d-flex justify-content-around flex-column text-center">
            <h1 className="CSTM-font-size-frontPage-heading text-lg-right text-white pt-lg-0 pt-5">
              {content?.headline}
            </h1>
            <div className="text-lg-right text-white pt-lg-0 pt-5">
              {content?.subheading.subheading}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
