import { FaStar, FaEye, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {
    _id,
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl border-0 rounded-2xl overflow-hidden mt-5">
      {/* Author Section */}
      <div className="flex justify-between items-center p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-600">
          <FaRegBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Thumbnail */}
      <figure>
        <img src={thumbnail_url} alt={title} className="w-full h-52 object-cover" />
      </figure>

      {/* Card Body */}
      <div className="card-body space-y-2">
        <h2 className="card-title text-lg font-bold">{title}</h2>
        <p className="text-sm text-gray-600 line-clamp-3">{details}</p>

        {/* Read More */}
        <Link
          to={`/news/${_id}`}
          className="text-primary text-sm font-semibold hover:underline"
        >
          Read More
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="badge badge-outline text-xs">
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer Info */}
        <div className="flex justify-between items-center pt-2 border-t mt-2">
          <div className="flex items-center gap-2 text-yellow-500">
            <FaStar />
            <span className="text-sm font-semibold">{rating.number}</span>
            <span className="badge badge-warning badge-sm uppercase">
              {rating.badge}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <FaEye />
            <span className="text-sm">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

