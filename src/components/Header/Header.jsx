import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <div className='max-w-6xl mx-auto flex justify-between items-center p-2 border-b-2 mb-5'>
            <header className='text-4xl font-bold '>Knowledge Cafe</header>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;