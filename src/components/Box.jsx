import './BoxStyles.css'

function Box(props) {
    return (
        <>
        <div className={props.className}>
            <img src="/assets/hero.jpg" alt="BoxImg" />
            <div className="intro">
                <h3>Title Box</h3>
                <p>Bad at flick shots to your left? Can&rsquo;t hit strafing or jumping targets? We fix that. Our AI-based technology adapt accordingly to optimize training gains</p>
                <a href="/">Get Started</a>
            </div>
        </div>
        </> 
    )        
}

export default Box;