import css from 'components/ContactList/ContactList.module.css';
import React from 'react';
import PropTypes from 'prop-types';

export const ContactList =({contact, deleteList}) => (

            <ol>
              {contact.map(({id, name, number }) => {
                // console.log(viewList);
                return (
                  <li className={css.list} key={id}>
                    <span>{name}: </span>
                    <span> {number}</span>
                    <button className={css.clickDel} type="button" onClick={() => deleteList(id)}>Delete</button>
                  </li>
                );
              })}
            </ol>
)
ContactList.protoType = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id:  PropTypes.number,
      name:  PropTypes.string,
      number:  PropTypes.number,
    })
  )
}
