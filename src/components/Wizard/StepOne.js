import React, { Component } from 'react'
import store, {HANDLE_NAME, HANDLE_ADDRESS, HANDLE_CITY, HANDLE_STATE, HANDLE_ZIP} from './../store'
import {Link} from 'react-router-dom'

export default class StepOne extends Component {
    constructor() {
        super() 
        const reduxState = store.getState()
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip 
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                name: reduxState.name,
                address: reduxState.address,
                city: reduxState.city,
                state: reduxState.state,
                zip: reduxState.zip
            })
        })
    }

    handleName = (e) => {
        store.dispatch({
            type: HANDLE_NAME,
            payload: e.target.value
            
        })
    }

    handleAddress = (e) => {
        store.dispatch({
            type: HANDLE_ADDRESS,
            payload: e.target.value
        })
    }

    handleCity = (e) => {
        store.dispatch({
            type: HANDLE_CITY,
            payload: e.target.value
        })
    }

    handleState = (e) => {
        store.dispatch({
            type: HANDLE_STATE,
            payload: e.target.value
        })
    }

    handleZip = (e) => {
        store.dispatch({
            type: HANDLE_ZIP,
            payload: e.target.value 
        })
    }



    render() {
        return (
            <div>
                <main>
                    <form>
                        <h4>Name:</h4>
                        <input type="text" placeholder="name" value={this.state.name} 
                            onChange={e => this.handleName(e)} />
                        <h4>Address:</h4>
                        <input type="text" placeholder="address" value={this.state.address}
                            onChange={e => this.handleAddress(e)} />
                        <h4>City:</h4>
                        <input type="text" placeholder="city" value={this.state.city}
                            onChange={e => this.handleCity(e)} />
                        <h4>State:</h4>
                        <input type="text" placeholder="state" value={this.state.state}
                            onChange={e => this.handleState(e)} />
                        <h4>Zip:</h4>
                        <input type="number" placeholder="zip" value={this.state.zip}
                            onChange={e => this.handleZip(e)} />
                    </form>
                        <div className="step-buttons">
                        <Link to="/wizard/StepTwo">
                            <button onClick={this.handleNext}>Next</button>
                        </Link>
                        </div>
                </main>
            </div>
        )
    }
}
