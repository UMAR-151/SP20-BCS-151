import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

function CardItem(props) {
  return (
    <>
      <li className='card_item'>
        <Link className='card_item_link' to={props.path}>
          <figure className='card_item_pic-wrap' data-category={props.label}>
            <img
              className='card_item_img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='card_item_info'>
            <h5 className='card_item_text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;