import React from 'react'


const GifList = (props) => {
    return (<ul>
      <li><img src={props.gif.images.original.url} alt=''/></li>
    </ul>)
  }

export default GifList;
