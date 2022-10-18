import React from 'react';

export interface receiverLogoItem {
  id;
  file: {
    url: string;
  };
}

export interface FifthSectionProps {
  content: {
    receiverLogo: receiverLogoItem[];
  };
}

const FifthSection: React.FC<FifthSectionProps> = ({ content }) => {
  const receiverLogos = content?.receiverLogo.map((el) => (
    <div
      key={el.id}
      className="col-md-2 justify-content-center align-self-center pt-md-0 pt-lg-0 pt-5 mx-sm-5 mx-md-0 mx-lg-0"
    >
      <img src={el.file.url} alt="Logo" className="img-fluid" />
    </div>
  ));

  return (
    <div className="container-fluid bg-white">
      <div className="container p-5">
        <div className="row justify-content-between text-center">
          {receiverLogos}
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
