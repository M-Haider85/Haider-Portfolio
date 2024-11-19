import Link from "next/link"
import Image from "next/image";


export default function Logo() {
  return (
    // <h1 className='text-purple-600 text-[30px] font-bold'>Haider

    //  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-600">
    //            {" "}
    //            Asghar
    //            {" "}
    //          </span>
    //          </h1>

    <Link href='/'>
      <Image src='/Haider-no-bg.png' width={60} height={60} priority alt='' />
    </Link>
  )
}
