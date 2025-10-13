import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    // console.log(news)

  return (
    <div className='p-5'>
        <img className='w-full h-[350px] object-cover' src={news.image_url} alt="" />
        <h2>{news.title}</h2>
        <p>{news.details}</p>
        <Link className='btn btn-secondary mt-4' to={`/category/${news.category_id}`}>Back to Category</Link>
    </div>
  );
};

export default NewsDetailsCard;
