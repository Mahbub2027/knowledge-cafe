import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {

    return (
        <div className="md:w-1/3 text-center ml-10">
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
    bookmarks: PropTypes.array
}
export default Bookmarks;