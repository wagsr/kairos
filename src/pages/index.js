import * as React from "react"
import { Slider } from '../components';
import { BasicLayout } from '../layouts';
import { Link } from 'gatsby';
import './index.css';

const sliderImages = [
  'https://picsum.photos/seed/picsum1/984/400',
  'https://picsum.photos/seed/something/984/400',
  'https://picsum.photos/seed/test/984/400',
  'https://picsum.photos/seed/another/984/400',
  'https://picsum.photos/seed/picsum5/984/400'
];

const blurb = [
  () => <div><span>Kairos Church</span> is located in south Kansas City. We exist</div>,
  () => <div>to wholeheartedly pursue deep relationship with God the Father</div>,
  () => <div>through the Spirit of His Son Jesus Christ and to lift stregthen</div>,
  () => <div>others as they come into the identiy God has called them to.</div>,
];

// markup
const IndexPage = () => {
  return <BasicLayout>
      <div className ="hero-slider">
        <Slider images={sliderImages } />
      </div>
      <div className="main-tiles">
        <Link to="/events" className="main-tiles__tile">Upcoming Events</Link>
        <Link to="/welcome" className="main-tiles__tile">Are you new? Welcome! Let us introduce ourselves.</Link>
        <Link to="/prayer" className="main-tiles__tile">Request Prayer</Link>
        <Link to="/planningcenter" className="main-tiles__tile">Planning Center</Link>
        <Link to="/give" className="main-tiles__tile">Give</Link>
        <Link to="/ministries" className="main-tiles__tile">Ministries</Link>
        <Link to="/media" className="main-tiles__tile">Media</Link>
      </div>
      <div className = { 'main_blurb-wrapper' }>
        <div className={'main_blurb-title'}>Kairos Church is located in south Kansas City</div>
        <p className={'main_blurb-text'}>
          We exist to wholeheartedly pursue deep relationship with God the Father
          through the Spirit of His Son Jesus Christ and to lift stregthen
          others as they come into the identiy God has called them to.
        </p>
      <Link className={'main_blurb-link'} to='/about'>Read Our Story</Link>
      </div>
  </BasicLayout>
}

export default IndexPage
