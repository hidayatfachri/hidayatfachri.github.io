import './FeatureStyles.css'
import Carousel from 'react-multi-carousel';
import Box from './Box';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 690 },
      items: 2,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 1,
      partialVisibilityGutter: 20 // this is needed to tell the amount of px that should be visible.
    }
}

function Feature() {
    return (
        <>
        <div className='feature-wrapper'>
        <h1>Experience Comfort With Our Services</h1>
            <Carousel partialVisible={true} responsive={responsive}>
                <Box
                img='/assets/hero.jpg'
                title='Sewa Mobil VIP'
                text='Bad at flick shots to your left? Can&rsquo;t hit strafing or jumping targets? We fix that. Our AI-based technology adapt accordingly to optimize training gains'
                />
                <Box
                img='/assets/hero.jpg'
                title='Sewa Mobil Harian'
                text='Bad at flick shots to your left? Can&rsquo;t hit strafing or jumping targets? We fix that. Our AI-based technology adapt accordingly to optimize training gains'
                />
                <Box
                img='/assets/hero.jpg'
                title='Sewa Mobil Bulanan'
                text='Bad at flick shots to your left? Can&rsquo;t hit strafing or jumping targets? We fix that. Our AI-based technology adapt accordingly to optimize training gains'
                />
                <Box
                img='/assets/hero.jpg'
                title='Sewa Kendaraan Pariwisata'
                text='Bad at flick shots to your left? Can&rsquo;t hit strafing or jumping targets? We fix that. Our AI-based technology adapt accordingly to optimize training gains'
                />
                <Box
                img='/assets/hero.jpg'
                title='Paket Tour Domestik'
                />
                <Box
                img='/assets/hero.jpg'
                title='Paket Kunjungan Kerja'
                />
                <Box
                img='/assets/hero.jpg'
                title='Paket Study Tour'
                />
                <Box
                img='/assets/hero.jpg'
                title='Sewa Mobil Pengantin'
                />
                <Box
                img='/assets/hero.jpg'
                title='Transfer Bandara Hotel'
                />
            </Carousel>
        </div>
        </> 
    )        
}

export default Feature;