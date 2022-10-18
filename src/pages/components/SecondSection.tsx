import React from 'react';
import Card from './Card';

export interface SecondSectionProps {
  content: {
    headline: string;
    subheading1: string;
    subheading2: string;
    subheading3: string;
    subimage1: {
      file: {
        url: string;
      };
    };
    subimage2: {
      file: {
        url: string;
      };
    };
    subimage3: {
      file: {
        url: string;
      };
    };
  };
}

const SecondSection: React.FC<SecondSectionProps> = ({ content }) => {
  return (
    <div>
      <div className="p-1 bg-white slantRightTopOverlay">&nbsp;</div>
      <div className="p-1 bg-CSTM-athensGrey slantRightTopUnderlay">&nbsp;</div>
      <div className="p-5 bg-CSTM-athensGrey">
        <div className="row justify-content-center m-0 p-0">
          <h1 className="CSTM-font-size-frontPage-heading text-center text-CSTM-ep-blue pb-5 pt-1">
            {content?.headline}
          </h1>
        </div>
        <div className="d-flex flex-column flex-lg-row justify-content-around">
          <div>
            <Card name={content?.subheading1} buttonText={'Start'}>
              <img
                alt=""
                src={content?.subimage1.file.url}
                className="card-img-top"
              />
            </Card>
          </div>
          <div>
            <Card name={content?.subheading2} buttonText={'Start'}>
              <img
                alt=""
                src={content?.subimage2.file.url}
                className="card-img-top"
              />
            </Card>
          </div>
          <div>
            <Card name={content?.subheading3} buttonText={'Start'}>
              <img
                alt=""
                src={content?.subimage3.file.url}
                className="card-img-top"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
