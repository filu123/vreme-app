import React from 'react';

const Form = props => (
    <form onSubmit={props.getVreme}>
        <input type="text" name="city" placeholder="Oras..."/>
        <input type="text" name="country" placeholder="Tara..."/>
        <button>Arata vremea</button>
    </form>
);
 
export default Form;