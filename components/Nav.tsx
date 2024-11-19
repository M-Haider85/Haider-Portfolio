//link (next js)
import Link from "next/link"

//next hooks
import { usePathname } from "next/navigation";

//framer motion
import { motion } from "framer-motion";

// Define the props type for the Nav component
type NavProps = {
    containerStyles?: string;  // Optional container styles
    linkStyles?: string;       // Optional link styles
    underlineStyles?: string;  // Optional underline styles
  };

const links = [
    {path: '/', name: 'Home'},
    {path: '/projects', name: 'Projects' },
    {path: '/contact', name: 'Contact'}
];

export default function Nav({linkStyles='', underlineStyles=''}:NavProps) {
  const path = usePathname();
    return (
    <nav className='{`${containerStyles}`}'>
        {links.map((link, index) => {
            return (
                <Link
                href={link.path}
                key={index}
                className={`capitalize ${linkStyles} px-5 font-bold`}
                
                >
                    {link.path === path && (
                        <motion.span
                        initial={{ y: '-100%'}}
                        animate={{ y: 0 }}
                        transition={{ type: 'tween'}}
                        layoutId='underline'
                        className={`${underlineStyles}`}
                        />
                    )}
                    {link.name}
                </Link>
            );
            })}
        </nav>
  )
}
