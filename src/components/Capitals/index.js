import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {capital: countryAndCapitalsList[0].id}

  handleChange = event => {
    this.setState({capital: event.target.value})
  }

  render() {
    const {capital} = this.state
    const countryObject = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === capital,
    )
    const {country} = countryObject

    return (
      <div className="bg-container">
        <div className="capitals-container">
          <h1 className="heading">Countries And Capitals</h1>
          <select
            value={capital}
            className="option-style"
            onChange={this.handleChange}
          >
            {countryAndCapitalsList.map(option => (
              <option
                key={option.capitalDisplayText}
                value={option.id}
                className="option-style"
              >
                {option.capitalDisplayText}
              </option>
            ))}
          </select>
          <p className="label-style">is capital of which country</p>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
