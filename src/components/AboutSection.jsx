import './AboutStyles.css'

function AboutDesc(props) {
    return (
        <>
        <div className='about'>
            <h1>{props.title}</h1>
            <p>{props.info}</p>
        </div>

        <div className='visimisi'>
            <h1>Visi dan Misi</h1>
            <div className='visimisi-desc8'>
            <div className='visi'>
                <h1><i class="fa-solid fa-bullseye"></i> VISI </h1>  
                <p>{props.visi}</p>
            </div>
            <div className='misi'>
                <h1> <i class="fa-solid fa-car-side"></i> MISI</h1>
                <p>{props.misi}</p>
            </div>
            </div>
        </div>

        <div className='kontak'>
            <h2>{props.kontak}</h2>
        </div>

        </> 
    )        
}

export default AboutDesc;