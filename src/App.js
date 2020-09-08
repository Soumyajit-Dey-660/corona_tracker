import React, { Component } from 'react'

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchdata } from './api'
import coronaImage from './images/image.png'

class App extends Component {

    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchdata()
        this.setState({ data: fetchedData }) 
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchdata(country)
        this.setState({ data: fetchedData, country: country })

        // console.log(country)
        // console.log(fetchedData)
    }

    render() {
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19" />
                <Cards data={this.state.data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={this.state.data} country={this.state.country}/>
            </div>
        )
    }
}

export default App