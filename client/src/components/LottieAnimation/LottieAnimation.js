import React ,{useEffect ,useRef} from 'react';
import lottie from "lottie-web"
import { Container } from 'react-bootstrap';
import "./LottieAnimation.css";

function LottieAnimation({animationData}) {
  
    const containerRef = useRef(null);

    useEffect(() => {
        const anim = lottie.loadAnimation({
          container: containerRef.current,
          loop: true,
          autoplay: true,
          animationData: animationData,
        });
    
        return () => anim.destroy();
      }, [animationData]);
    

    return (
        <Container ref={containerRef} className='lottie'>
        </Container>
  )
}

export default LottieAnimation;