import css from 'components/ContactForm/ContactForm.module.css';
import React from 'react';


export class ContactForm extends React.Component {
    state = {
    contacts: [],
    // filter: '',
    name: '',
    number: '',
    }


  proverka = evt => {
    const { name, value } = evt.currentTarget
    this.setState({ [name]: value });
    // console.log([evt.target.name]);
    // console.log(evt.target.value);
    // console.log(evt.target);
    // this.setState({ name: evt.target.value });
    // this.setState({ number: evt.target.value });
  };

    formSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({name: '', number: ''})
  }
 
    render() {
      return (
          
          <div className={css.boxInput}>
            <form className={css.formBox} onSubmit={this.formSubmit}>
                <label htmlFor="">
                  Name:
                  <input
                name="name" 
                value={this.state.name}
                    onChange={this.proverka}
                    type="text"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                  />
                </label>
                <label htmlFor="">
                  Number:
                  <input
                type="tel"
                value={this.state.number}
                    onChange={this.proverka}
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                  />
            </label>
          
                <button className={css.clickInput} type="submit">
                  Add contact
            </button>
           </form>
          </div>
          
        )
    }
}

