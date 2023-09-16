import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <div className='flex justify-between items-center mx-4 p-2 border-b-2'>
            <header className='text-4xl font-bold '>Knowledge Cafe</header>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;