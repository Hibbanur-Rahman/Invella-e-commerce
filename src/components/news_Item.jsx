import React from 'react';


const NewsItem = (props) => {
  return (
    <div className="News-Item col-12 col-md-3 pb-2">
      <div className="card rounded-0  border-1  border-top-0 border-end-0 border-start-0  ">
        <img className="rounded-2 rounded-bottom-0 " src={props.image} alt="" />

        <h6 className="m-0 p-0 mt-4">{props.heading}</h6>
        <p className="date m-0 p-0 mt-3 mb-2">
          <span>{props.date}</span>/<span>{props.NoComments} Comments</span>
        </p>

        <p className="m-0 p-0 mb-5">{props.description}</p>

        <a className="text-black text-decoration-none bg-none pb-1" href="/Invella-e-commerce">
          Read More <i class="fa-solid fa-angles-right"></i>
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
