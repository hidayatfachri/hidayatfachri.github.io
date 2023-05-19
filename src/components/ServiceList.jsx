import "./ServiceListData";
import ServiceListData from "./ServiceListData";
import "./ServiceListStyles.css";

function ServiceList(){
    return(
        <div className="servicelist">
            <h1> Layanan Kami</h1>
            <p>Solusindo menyediakan layanan lorem ipsum</p>
            <div className="servicecard">
                <ServiceListData
                image="https://images.unsplash.com/photo-1495435229349-e86db7bfa013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1377&q=80"
                title="Pelayanan Rental Mobil VIP"
                text= "Pemijaman jangka panjang adalah Lorem Ipsum ..."
                url= "/vip-car-rental"
                />

                <ServiceListData
                image= "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                title="Pelayanan Sewa Mobil Kontrak Bulanan"
                text= "Pemijaman jangka panjang adalah Lorem Ipsum ..."
                url= "/longterm-car-rental"
                />

                <ServiceListData    
                image="https://images.unsplash.com/photo-1616455164974-dd1c84624216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                title="Pelayanan Sewa Mobil Reguler"
                text= "Pemijaman jangka panjang adalah Lorem Ipsum ..."
                url="/shortterm-car-rental"
                />
            </div>

            <div className="servicecard">
                <ServiceListData
                image="https://images.unsplash.com/photo-1495435229349-e86db7bfa013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1377&q=80"
                title="Pelayanan Sewa Kendaraan Pariwisata"
                text= "Pemijaman jangka panjang adalah Lorem Ipsum ..."
                url="/tourism-vehicle-rental"
                />

                <ServiceListData
                image= "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                title="Tour Domestik"
                text= "Pemijaman jangka panjang adalah Lorem Ipsum ..."
                url="/domestic-tour"
                />

                <ServiceListData    
                image="https://images.unsplash.com/photo-1616455164974-dd1c84624216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"    
                title="Kunjungan Kerja/ Dinas dan Company Gathering"
                text= "Pemijaman jangka panjang adalah Lorem Ipsum ..."
                url="/company-gathering"
                />
            </div>

            <div className="servicecard">
                <ServiceListData
                image="https://images.unsplash.com/photo-1495435229349-e86db7bfa013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1377&q=80"
                title="Study Tour/ Study Banding"
                text= "Pemijaman jangka panjang adalah Lorem Ipsum ..."
                url="/study-tour"
                />

                <ServiceListData
                image= "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                title="Paket Mobil Pengantin"
                text= "Pemijaman jangka panjang adalah Lorem Ipsum ..."
                url="/wedding-car-package"
                />

                <ServiceListData    
                image="https://images.unsplash.com/photo-1616455164974-dd1c84624216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                title="Transfer Bandara Hotel"
                text= "Pemijaman jangka panjang adalah Lorem Ipsum ..."
                url="/airport-hotel-transfer"
                />
            </div>
        </div>
    )
}

export default ServiceList