import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const App = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/blogs/all')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center text-primary">All Blogs</h1>
      
      <div className="row g-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="col-md-4">
            <Link to={`/blog/${blog._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="card h-100 shadow-sm">
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="card-img-top"
                    style={{ maxHeight: '250px', objectFit: 'cover' }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  {/* <p className="card-text">{blog.content.slice(0, 100)}...</p> */}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
