import './FooterStyles.css'

function Footer() {
    return (
        <>
        <div className='footer'>
            <div className='footer-box'>
                <div className='footer-box-social'>
                    <img src='logo.jpg' alt='logo' />
                    <p>
                        The world&rsquo;s first and largest digital for collecting collectibles and non-fungible tokens (NFTs). Buy, sell, and trad on exclusive digital items
                    </p>
                    <div className="footer-social">
                        <a href="#">
                        <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#">
                        <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#">
                        <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#">
                        <i className="fa-brands fa-facebook"></i>
                        </a>
                    </div>
                </div>

                <div className="footer-box-discover">
                    <h3>Discover</h3>
                    <div className="footer-box-discover-item">
                        <a href="#">
                            Collection
                        </a>
                        <a href="#">
                            Collection
                        </a>
                        <a href="#">
                            Collection
                        </a>
                    </div>
                </div>
                <div className="footer-box-help">
                    <h3>Help Center</h3>
                    <div className="footer-box-discover-item">
                        <a href="#">
                            Collection
                        </a>
                        <a href="#">
                            Collection
                        </a>
                        <a href="#">
                            Collection
                        </a>
                    </div>
                </div>
                <div className="subscribe-box">
                    <a href="#">
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
        </> 
    )        
}

export default Footer;