import React from 'react'
import Carousel from 'react-multi-carousel';
import { useEffect,useState } from 'react';
import axios from 'axios';


const New_App = () => {

    const [products, setProducts] = useState([]);
    const options = {
        method: 'GET',
        url: 'https://netflix54.p.rapidapi.com/search/aaa',
        params: {
            query: 'stranger',
            offset: '0',
            limit_titles: '50',
            limit_suggestions: '20',
            lang: 'en'
        },
        headers: {
            'X-RapidAPI-Key': 'd46ce10e16mshbc316b6599a60fep1b489fjsnf7813c117cc3',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }

        
    };
    const fetchData = async () => {
        try {
          const response = await axios.request(options);
          setProducts(response.data.titles);
          // flickityRef.current = new Flickity('.carousel', {
          //   contain: true,
          //   prevNextButtons: true,
          //   pageDots: false,
          //   groupCells: true,
          //   cellAlign: 'left',
          //   adaptiveHeight: true,
          //   wrapAround: true,
          //   draggable: true
          // });
          console.log(response.data)
          
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };
      // Next and Previous Button Handlers
      // const next = () => {
      //   if (flickityRef.current) {
      //     flickityRef.current.next();
      //   }
      // };
    
      // const previous = () => {
      //   if (flickityRef.current) {
      //     flickityRef.current.previous();
      //   }
      // };
    
      useEffect(() => {
    
    
        fetchData();
      }, []);
    return (
        <div className='min-h-screen flex justify-center items-center bg-slate-400 max-w-lg
        w-full'>
            <Carousel responsive={responsive}
            swipeable={true}
            draggable={false }
            >
                {products.map((product,index)=>(
                    <div key={index} className=' mr-5  object-contain'>
                        <img className='rounded-lg'
                        height={500}
                        width={500}
                        src={product.jawSummary.backgroundImage.url}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default New_App