import qZone1 from '../assets/qZone1.png'
import qZone2 from '../assets/qZone2.png'
import qZone3 from '../assets/qZone3.png'
const QZone = () => {
  return (
    <div className='my-4 bg-secondary-subtle
 p-3 '>
      <h2>Q-Zone</h2>
      <img className='img-fluid' src={qZone1}/>
      <img className='img-fluid' src={qZone2}/>
      <img className='img-fluid' src={qZone3}/>
    </div>
  )
}

export default QZone
