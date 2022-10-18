import React from 'react';

export interface FooterProps {
  content: {
    logo: {
      file: {
        url: string;
      };
    };
    rightImage: {
      file: {
        url: string;
      };
    };
  };
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <div
      className="container-fluid py-2"
      style={{ backgroundColor: '#01295b' }}
    >
      <div className="container p-5">
        <div className="row">
          <div className="col-sm-4 text-white text-center text-sm-left pb-4">
            <div className="pt-lg-2 pt-0">Corporate</div>
            <div className="CSTM-font-size-smaller pt-lg-2 pt-0">About us</div>
            <div className="CSTM-font-size-smaller pt-lg-2 pt-0">
              Our clients
            </div>
          </div>
          <div className="col-sm-4 text-white text-center text-sm-left pb-4">
            <div className="pt-lg-2 pt-0">Users</div>
            <div className="CSTM-font-size-smaller pt-lg-2 pt-0">Pay bills</div>
            <div className="CSTM-font-size-smaller pt-lg-2 pt-0">
              Buy prepaid
            </div>
          </div>
          <div className="col-sm-4 text-white text-center text-sm-left pb-4">
            <div className="pt-lg-2 pt-0">Other</div>
            <div className="CSTM-font-size-smaller pt-lg-2 pt-0">
              Contact us
            </div>
            <div className="CSTM-font-size-smaller pt-lg-2 pt-0">Address</div>
          </div>
        </div>
        <div className="d-flex flex-column flex-lg-row justify-content-lg-between justify-content-med-around justify-content-around">
          <div className="col-sm-2 pb-4 pb-sm-0 text-center text-sm-left nopadding nomargin">
            <img alt="" src={content?.logo.file.url} />
          </div>
          <div className="col-sm-2 text-white text-center text-sm-left CSTM-font-size-smaller pt-lg-2 pt-0">
            &copy; GreenPay, Terms and conditions apply
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
