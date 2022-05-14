import React from 'react';
import ReactHTMLParser from 'react-html-parser';


export default function PageDetailDescription({data}) {
  return (
      <main>
        <h4> About the Place</h4>
        {ReactHTMLParser(data.description)}
        <div className='row' style={{ marginTop:40}}>
            {data.features.map((feature, index) => {
                return ( 
                    <div className='col-3' 
                        key={`feature-${index}`}
                        style={{ marginBottom: 20 }}>
                        <img width='38'
                            className='d-block mb-2'
                            src={feature.url}
                            alt={feature.name}>
                        </img>
                        <span>{feature.qty}</span>
                        <span className='text-gray-500 font-weight-light'>
                            {feature.name}
                        </span>
                    </div>
                )
            })}
        </div>
      </main>
  );
}
