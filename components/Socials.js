import Link from "next/link";
import { 
  RiTwitterXLine, 
  RiInstagramLine, 
  RiFacebookLine, 
  RiDribbbleLine,
  RiBloggerLine,
  RiLinkedinLine
 } from 'react-icons/ri'
const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link href='https://twitter.com/mchelleOkonicha/' className="hover:text-accent transition-all duration-300" target="_blank">
      <RiTwitterXLine />
    </Link>
    <Link href='https://www.instagram.com/michelle_okonicha/' className="hover:text-accent transition-all duration-300" target="_blank">
      <RiInstagramLine />
    </Link>
    <Link href='https://web.facebook.com/michelle.okonicha/' className="hover:text-accent transition-all duration-300" target="_blank">
      <RiFacebookLine />
    </Link>
    <Link href='https://dribbble.com/Buchi_Michelle/'  className="hover:text-accent transition-all duration-300" target="_blank">
      <RiDribbbleLine/>
    </Link>
     <Link href='https://www.linkedin.com/in/buchi-michelle-okonicha-0a3b2b194/' className="hover:text-accent transition-all duration-300" target="_blank">
      <RiLinkedinLine />
    </Link>
    {/* <Link href='https://dev.to/michellebuchiokonicha/' className="hover:text-accent transition-all duration-300" target="_blank">
      <RiBloggerLine />
    </Link>  */}
  </div>;
};

export default Socials;
