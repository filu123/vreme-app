//react
import React, { Component } from 'react';
//componente
import Titles from './components/Titles';
import Form from './components/Form';
import Vreme from './components/Vreme';

class App extends Component {
  
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  //API fetch method
  getVreme = async (e) => {
    e.preventDefault();
    
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country},&units=metric&appid=67426db0bd9dc4f9e046e30362db45c3`);
    const data = await api_call.json();
    console.log(data);
    if(city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Pune ba ceva in casutele alea"
      });
    }
  }
  render() { 
    return ( 
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
                <div className="row">
                  <div className="col-xs-5 title-container">
                    <Titles />
                  </div>
                  <div className="col-xs-7 form-container">
                    <Form getVreme={this.getVreme}/>
                    <Vreme 
                      temperature={this.state.temperature}
                      city={this.state.city}
                      country={this.state.country}
                      humidity={this.state.humidity}
                      description={this.state.description}
                      error={this.state.error}
                    />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};


 
export default App;