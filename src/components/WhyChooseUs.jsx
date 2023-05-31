import './WhyChooseUsStyles.css'

function WhyChooseUs() {
    return (
        <>
            <div className='wcu-wrapper'>
                <h1 className='wcu-title'>Why Choose Us?</h1>
                <div className='wcu-section'>
                    <div className='wcu-card'>
                        <i className="fa-solid fa-tags fa-2xl"></i>
                        <h2>Reason 1</h2>
                        <p>SwipedOn is the only premium workplace sign in system that works on Apple and Android devices or no device at all with a QR-only option.</p>
                    </div>
                    <div className='wcu-card'>
                        <i className="fa-solid fa-headset fa-2xl"></i>
                        <h2>Reason 2</h2>
                        <p>SwipedOn is the only premium workplace sign in system that works on Apple and Android devices or no device at all with a QR-only option.</p>
                    </div>
                    <div className='wcu-card'>
                    <i className="fa-solid fa-medal fa-2xl"></i>
                        <h2>Reason 3</h2>
                        <p>SwipedOn is the only premium workplace sign in system that works on Apple and Android devices or no device at all with a QR-only option.</p>
                    </div>
                </div>
            </div>
        </> 
    )        
}

export default WhyChooseUs;