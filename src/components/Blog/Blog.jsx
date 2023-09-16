import PropTypes from 'prop-types';
import { FaBookmark} from "react-icons/fa";

const Blog = ({blog, handleAddtobookmarks,handleAddToMarkAsRead}) => {
    //console.log(blog);
    const {cover_img,authors_img, authors_name,  posted_date, reading_time,title, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full' src={cover_img} alt="" />
            <div className='flex justify-between items-center'>
                
                <div className='flex items-center'>
                    <img className='w-16 h-16 my-5 mr-3 rounded-full' src={authors_img} alt="" />
                    <div>
                        <h2 className='text-xl font-bold'>{authors_name}</h2>
                        <p>{posted_date}</p>
                    </div>
                    
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>

                    <button onClick={()=>handleAddtobookmarks(blog)} 
                    className='ml-2'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <p className='text-gray-500 my-3'>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href=""> #{hash}</a></span>)
                }
            </p>
            <button className='text-purple-800 underline' onClick={() =>handleAddToMarkAsRead(reading_time)}>Mark as read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddtobookmarks: PropTypes.func,
    handleAddToMarkAsRead: PropTypes.func
}
export default Blog;