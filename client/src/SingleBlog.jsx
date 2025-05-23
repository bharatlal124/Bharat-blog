import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/blogs/${id}`)
      .then(res => res.json())
      .then(data => setBlog(data));
  }, [id]);

  if (!blog) return <div className="text-center mt-5">Loading blog...</div>;

  return (
    <div className="container py-4">
      <Link to="/" className="btn btn-secondary mb-3">← Back to Blogs</Link>

      <div className="card shadow-sm">
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="card-img-top"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        )}
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <p className="card-text">{blog.content}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
