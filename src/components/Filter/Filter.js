import css from 'components/Filter/Filter.module.css';
import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({filter, onChange}) => (
 
            <div className={css.boxDown}>
              <p>Find contacts by name:</p>
              <input
                name={filter}
                onChange={onChange}
                type="text"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                />
                </div>
        
    )

Filter.protoType = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
    }