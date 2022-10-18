import React from 'react';

export interface ThirdSectionProps {
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

const ThirdSection: React.FC<ThirdSectionProps> = ({ content }) => {
  return (
    <div>
      <div className="container-fluid bg-CSTM-teaGreen">
        <div className="container py-5">
          <div className="row p-5">
            <div className="col-lg-6 d-flex justify-content-around flex-column text-center">
              <h1 className="CSTM-font-size-frontPage-heading text-lg-left text-CSTM-ep-blue pb-lg-0 pb-5">
                {content?.headline}
              </h1>
              <div className="text-lg-left text-CSTM-ep-blue pb-lg-0 pb-5">
                {content?.subheading.subheading}
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <img
                alt=""
                src={content?.image.file.url}
                className="mx-sm-0 mx-md-5 mx-lg-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
