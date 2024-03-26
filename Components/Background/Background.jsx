import './Background.css'

import video1 from '../../assets/video1.mp4';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';

const Background = ({ playstatus, herocount }) => {
    if(playstatus) {
      return (
        <div>
          <video className='background fade-in' autoPlay loop muted>
            <source src={video1} type='video/mp4'/>
          </video>
        </div>
      )
    } else if(herocount===0) {
      return (
        <div>
          <img src={image1} className='background fade-in' />
        </div>
      );
    } else if(herocount===1) {
      return (
        <div>
          <img src={image2} className='background fade-in' />
        </div>
      );
    } else if(herocount===2) {
      return (
        <div>
          <img src={image3} className='background fade-in' />
        </div>
      );
    }
  }
  

export default Background
