
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-gray-50 m-4 p-3 rounded-xl'>
            <h2 className='text-lg font-medium'>{title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;