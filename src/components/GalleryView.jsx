import './GalleryViewStyles.css'
import { useState } from 'react';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';


function GalleryView() {
    const [data, setData] = useState({img:'', i:0})

    const images = [
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80"
    ]
    const viewImage = (img, i) => {
        setData({img, i})
    }
    const imgAction = (action) => {
        let i = data.i
        if(action === 'next-img'){
            setData({img: images(i+1), i: i+1})
        }
        if(action === 'previous-img'){
            setData({img: images(i-1), i: i-1})
        }
        if(!action){
            setData({img: '', i: 0})
        }
    }
    return (
        <>
        {
            data.img && 
            <div className= 'gallery-image'>
              <button onClick={() => imgAction()} className='close-button gallery-button'>
                <i className='fas fa-times'></i>
              </button>
              <button onClick={() => imgAction('previous-img')} className='previous-button gallery-button'>
                <i className='fa-solid fa-chevron-left'></i>
              </button>
              <img src={data.img}/>
              <button onClick={() => imgAction('next-img')} className='next-button gallery-button'>
                <i className='fa-solid fa-chevron-right'></i>
              </button>
            </div>
        }
        <div className='gallery-main'>
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
          <Masonry gutter='0.6rem'>
            {images.map((image, i) => (
              <img  
                key={i}
                src={image}
                style={{width: "100%", display: "block"}}
                alt=''
                onClick={ () => viewImage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
        </> 
    )        
}

export default GalleryView;