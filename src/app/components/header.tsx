import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between px-4 py-1 bg-gray-200">
      {/* Logo */}
      <div className="flex items-center pl-4">
        <Image src="/logoR.png" alt="Logo" width={80} height={60} />
      </div>

      {/* Menu */}
      <nav className="flex-grow">
        <ul className="flex space-x-6 ml-8">
        <li>
          <Link href="#" className="text-primary-blue font-semibold hover:text-primary-red text-lg">Shop</Link>
          </li>
          <li>
            <Link href="#" className="text-primary-blue font-semibold hover:text-primary-red text-lg">Photos</Link>
          </li>
          <li>
          <Link href="#" className="text-primary-blue font-semibold hover:text-primary-red text-lg">Illustrations</Link>
          </li>
          <li>
          <Link href="#" className="text-primary-blue font-semibold hover:text-primary-red text-lg">Vectors</Link>
          </li>
          <li>
          <Link href="#" className="text-primary-blue font-semibold hover:text-primary-red text-lg">3D Assets</Link>
          </li>
        </ul>
      </nav>
      {/* Pricing and Avatar */}
      <nav className="flex">
        <ul className="flex space-x-6 ml-8">
        <li>
          <Link href="#" className="text-primary-blue font-semibold hover:text-primary-red text-lg"><button className='bg-gray-300 px-4 rounded-md' >Sell</button></Link>
          </li>
          </ul>
          </nav>
          <FontAwesomeIcon icon={faCartShopping} className='w-16 px-4 text-primary-blue hover:text-primary-red'/>
    </header>
  );
};

export default Header;
