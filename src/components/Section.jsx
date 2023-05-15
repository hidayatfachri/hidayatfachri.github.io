import './SectionStyles.css'
import Box from './Box';

function Section(props) {
    return (
        <>
        <h1 className='section-title'>{props.title}</h1>
        <div className="section">
            <Box
            className='box'
            />
            <Box
            className='box'
            />
            <Box
            className='box'
            />
        </div>   
        </> 
    )        
}

export default Section;