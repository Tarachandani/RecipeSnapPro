import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
function CardImage({term}){
    const [renderedImages, setRendered]= useState('');
    const findimage=async(term)=>{
        const response = await axios.get('https://api.unsplash.com/search/photos', {
                    headers: {
                        Authorization: 'Client-ID FJXGqT_nNPSCsbcQQ5OTSQdUyDz-1irsSisUQYD7OAM'
                    },
                    params:{
                        query: term,
                    }
                });
            return response.data.results;
        }

    const secondfunct = async()=>{
            try {
              const results = await findimage(term);
              const rendered = results.map((image, index)=>{
                    return <img src={image.urls.small} alt ={image.alt_description} key={index}/>
               });
               setRendered(rendered);

            } catch (error) {
              console.error("An error occurred:", error);
            }
          }
    
    useEffect(() => {
        secondfunct();
    }, [term]);
          

    return(
        <div>
            {renderedImages}
        </div>
    )

}

export default CardImage;