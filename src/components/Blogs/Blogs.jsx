import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddtobookmarks}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
            {/* <h3>Blogs: {blogs.length}</h3> */}
            <div>
                {
                    blogs.map(blog => <Blog 
                        key={blog.id} 
                        blog={blog} 
                        handleAddtobookmarks={handleAddtobookmarks}
                        ></Blog>)
                }
            </div>
        </div>
    );
};

Blogs.propTypes={
    handleAddtobookmarks: PropTypes.func
}

export default Blogs;