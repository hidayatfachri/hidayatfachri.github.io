import './FooterStyles.css'

function Footer() {
    return (
        <>
        <div className='footer'>
            <div className='footer-box'>
                <div className='footer-box-social'>
                    <img className='footer-logo' src='logo.jpg' alt='Solusindo' />
                    <p>
                        The world&rsquo;s first and largest digital for collecting collectibles and non-fungible tokens (NFTs). Buy, sell, and trad on exclusive digital items
                    </p>
                    <div className="footer-social">
                        <a href="#">
                        <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="#">
                        <i className="fa-brands fa-youtube"></i>
                        </a>
                        <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>

                <div className="footer-box-discover">
                    <h3>Browse</h3>
                    <div className="footer-box-discover-item">
                        <a href="#">
                            Home
                        </a>
                        <a href="#">
                            About
                        </a>
                        <a href="#">
                            Service
                        </a>
                        <a href="#">
                            Gallery
                        </a>
                    </div>
                </div>
                <div className="footer-box-help">
                    <h3>Services</h3>
                    <div className="footer-box-discover-item">
                        <a href="#">
                            Sewa Mobil VIP
                        </a>
                        <a href="#">
                            Sewa Mobil Reguler / Harian
                        </a>
                        <a href="#">
                            Sewa Mobil Kontrak Bulanan
                        </a>
                        <a href="#">
                            Sewa Kendaraan Pariwisata
                        </a>
                        <a href="#">
                            Paket Tour Domestik
                        </a>
                        <a href="#">
                            Paket Kunjungan Kerja
                        </a>
                        <a href="#">
                            Paket Study Tour
                        </a>
                        <a href="#">
                            Paket Mobil Pengantin
                        </a>
                        <a href="#">
                            Transfer Bandara Hotel
                        </a>
                    </div>
                </div>
                <div className="footer-box-help">
                    <h3>Contact</h3>
                    <div className="footer-box-discover-item">
                        <a href="#">
                        <i className="fa-solid fa-location-dot"></i> Puri Gunung Anyar Regency E-18, Gunung Anyar, Surabaya
                        </a>
                        <a href="#">
                            <i className="fa-solid fa-phone"></i> 031-879-6129
                        </a>
                        <a href="#">
                            <i className="fa-solid fa-mobile-screen-button"></i> 0812-3139-0060
                        </a>
                        <a href="#">
                            <i className="fa-solid fa-mobile-screen"></i> 0812-3234-8003
                        </a>
                        <a href="#">
                            <i className="fa-regular fa-envelope"></i> sinergisolusindoofficial@gmail.com
                        </a>
                    </div>
                </div>
            </div>
            <h4>Copyright 2023 | Sinergi Solusindo</h4>
        </div>
        </> 
    )        
}

export default Footer;