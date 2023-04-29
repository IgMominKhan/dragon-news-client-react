import QZone from '../shared/QZone';
import ListGroup from 'react-bootstrap/ListGroup'
import {FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'
import Button from 'react-bootstrap/Button'
const bgImage = {
  backgroundImage:"url(/bg.png)",
  backgroundSize:"cover",

}

const RightSide = () => {
  return (
    <div>
      <div>
        <h2 className='mb-4'>Login with</h2>

          <Button className='mb-2' variant='outline-primary'><FaGoogle/> Login with Google</Button>
      <Button variant='outline-dark'><FaGithub/> Login with Github</Button>
    </div>
      <div className='my-3'>
    <h2 className='mb-4 mt-5'>Find Us On</h2>

    <ListGroup>
      <ListGroup.Item>
        <FaFacebook/> Facebook
      </ListGroup.Item>
      <ListGroup.Item>
        <FaTwitter/> Twitter
      </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram/> Instagram
          </ListGroup.Item>
    </ListGroup>
   </div>
        <QZone>
        </QZone>

        <div style={bgImage} className='my-4 px-4 py-5 text-center text-white'>
          <h1>Create an Amazing Newspaper</h1>
        <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
        <Button variant='danger'>Learn More</Button>
        </div>
    </div>

  )
}

export default RightSide
