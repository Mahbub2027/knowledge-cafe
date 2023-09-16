import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    //console.log(blog);
    const {cover_img,authors_img, authors_name,  posted_date, reading_time,title, hashtags} = blog;
    return (
        <div>
            <img className='' src={cover_img} alt="" />
            <div className='flex justify-between items-center'>
                
                <div className='flex items-center'>
                    <img className='w-16 h-16 my-5 mr-3 rounded-full' src={authors_img} alt="" />
                    <div>
                        <h2 className='text-xl font-bold'>{authors_name}</h2>
                        <p>{posted_date}</p>
                    </div>
                    
                </div>
                <div>
                    <p>{reading_time} min read</p>
                </div>
            </div>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <p className='text-gray-500'>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href=""> #{hash}</a></span>)
                }
            </p>
            <p>Mark as read</p>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;