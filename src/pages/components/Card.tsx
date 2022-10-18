import React from 'react';

function Card(props: any) {
  return (
    <div className="card text-center mx-5 px-5 mb-3 CSTM-rounded-xl shadow-sm">
      <div className="mt-5 ml-3 mr-3 w-5">{props.children}</div>
      <div className="card-body">
        <h5 className="card-title text-nowrap text-CSTM-ep-blue">
          {props.name}
        </h5>
        <a
          href={props.onClick}
          className="btn btn-CSTM-ep-green text-nowrap text-white px-4 my-2 rounded-pill"
        >
          {props.buttonText}
        </a>
      </div>
    </div>
  );
}

export default Card;
