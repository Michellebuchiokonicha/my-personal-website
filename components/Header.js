import Image from "next/image";

import Link from "next/link";

// components
import Socials from '../components/Socials';
const Header = () => {
  return (
  <header className="absolute w-full z-30 flex items-center px-16
  xl:px-0 xl:h-[90px]">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6">
        {/* logo */}
        <Link href={' '}>
        <Image 
        src={'/logo.svg'}
         width={220}
          height={48} alt=""  
          priority={true}/>
        </Link>
        <Socials />
      </div>
    </div>
  </header>
  );
};

export default Header;
