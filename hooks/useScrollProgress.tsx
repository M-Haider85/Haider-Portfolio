import React, {useState, useEffect} from 'react'

const useScrollProgress = () => {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
      const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight > 0) { //Ensure scrollHeight is valid
        const progress = (currentProgress / scrollHeight) * 100;
        setCompletion(Number(progress.toFixed(2))); // Ensure completion is a number
      }
    };
    //event
    window.addEventListener("scroll", updateScrollCompletion);
    //clear event
    return () => window.removeEventListener("scroll", updateScrollCompletion);
}, []);

  return (
    completion
  )
}

export default useScrollProgress