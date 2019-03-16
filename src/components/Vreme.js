import React from 'react';

const Vreme = props => (
    <div className="weather__info">
        {
            props.city && props.country && <p className="weather__key">Locatie: 
                <span className="weather__value"> {props.city}, {props.country}</span>
            </p>
        }
        {
            props.temperature && <p className="weather__key">Temperatura: 
                <span className="weather__value"> {props.temperature}C</span>
            </p>
        }
        {
            props.humidity && <p className="weather__key">Umiditate: 
                <span className="weather__value"> {props.humidity}</span>
            </p>
        }
        {
            props.description && <p className="weather__key">Descriere: 
           <span className="weather__value"> {props.description}</span>
            </p>
        }
        {
            props.error && <p class="weather__error">{props.error}</p>
        }
    </div>
);
 
export default Vreme;