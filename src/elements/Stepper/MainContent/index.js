import React from 'react';
import Fade from 'react-reveal/Fade';

export default function MainContent({data, current}) {
  return <Fade>
    {/* jika ada data, maka render kontennya */}
      {data[current] && data[current].content}
  </Fade>;
}
