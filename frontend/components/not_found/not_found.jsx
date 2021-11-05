import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
      <div className="notfound_div">
        <img
          src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg"
          alt=""
          className="notfound__image"
        />
        <Link className="btn" to="/">
          Go back
        </Link>
      </div>
    );
}
export default NotFound;