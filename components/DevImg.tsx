import Image from "next/image"

// Define props for the DevImg component
type DevImgProps = {
  containerStyles?: string; // Tailwind classes or other string-based styles
  imgSrc: string;           // The source of the image
};

const DevImg = ({containerStyles, imgSrc}:DevImgProps) => {
  return (
    <div className={`${containerStyles}`}>
    <Image src={imgSrc} width={350} height={350} priority alt='' />
    </div>
  )
};

export default DevImg;
