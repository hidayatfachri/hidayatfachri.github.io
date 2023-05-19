import './DetailStyles.css'

const Detail= (props) => {
    return(
        <div className='detail'>

            <div className='image'>
                <img alt='image' src={props.image}></img>
            </div>

            <div className='script'>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>

        </div>
    )
}

export default Detail