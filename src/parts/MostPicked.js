import React from 'react';

import Button from 'elements/Button';
import Fade from 'react-reveal/Fade';

export default function MostPicked(props) {
  return (
  <section className='container' ref={props.refMostPicked}>
      <h4 className='mb-3'>Most Picked</h4>
      <div className='container-grid'>

        {
            //index : array per colom
            //mapping perulangan kolom
            props.data.map( (item, index) => {
                return <div key={`mostpicked-${index}`} className={`item column-4 ${index === 0 ? " row-2":" row-1"}`}>

                    {/* Menambah Fade dengan delay */}
                    <Fade bottom delay={500 * index}>
                    <div className='card card-featured'>Card {index+1}
                        <div className='tag'>
                            $ {item.price}
                            <span className='font-weight-light'> /{item.unit}</span>
                        </div>
                        <figure className='img-wrapper'>
                            <img className='img-cover' src={item.imageUrl} alt={item.name}></img>
                        </figure>
                        <div className='meta-wrapper'>
                            <Button type='link' className='streched-link d-block text-white' href={`properties/${item._id}`}>
                                <h5>{item.name}</h5>
                            </Button>
                            <span>{item.city}, {item.country}</span>
                        </div>
                    </div>
                    </Fade>
                </div>   
            })
        }

      </div>
  </section>
  )
}
