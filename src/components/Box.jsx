import './BoxStyles.css'

function Box(props) {
    return (
        <>
        <div className="box">
            <img src={props.img} alt="BoxImg" />
            <div className="intro">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <a href="/">Get Started</a>
            </div>
        </div>
        </> 
    )        
}

export default Box;