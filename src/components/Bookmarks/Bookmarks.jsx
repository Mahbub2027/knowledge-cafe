import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {

    return (
        <div className="md:w-1/3 text-center ml-10">
            <div>
                <h2 className='text-xl font-bold mb-3 text-purple-700'>Reading time: {readingTime} min</h2>
            </div>
            <h2 className='text-xl font-bold mb-3'>Bookmarks Blog: {bookmarks.length}</h2>
            <div className='bg-gray-300 py-1'>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            </div>
            
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;