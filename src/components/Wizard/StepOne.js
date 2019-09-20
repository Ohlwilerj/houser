
import Header from './../Header/Header'
import React, { Component } from 'react'
import store, {STEP_ONE} from './../../redux/store'
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
                city: reduxState.address,
                state: reduxState.state,
                zip: reduxState.zip
            })
        })
    }

    handleNext = () => {
        store.dispatch({
            type: STEP_ONE,
            payload: this.state
            
        })
    }

    handleChange = (e) => {
        
        this.setState({[e.target.name]: e.target.value})
    }



    render() {
        return (
            <div>
                <header>
                    <Header />
                </header>
                <main>
                    <form>
                        <input type="text" name="name" placeholder="name" value={this.state.name} 
                            onChange={this.handleChange} />
                        <input type="text" name="address" placeholder="address" value={this.state.address}
                            onChange={this.handleChange} />
                        <input type="text" name="city" placeholder="city" value={this.state.city}
                            onChange={this.handleChange} />
                        <input type="text" name="state" placeholder="state" value={this.state.state}
                            onChange={this.handleChange} />
                        <input type="number" name="zip" placeholder="zip" value={this.state.zip}
                            onChange={this.handleChange} />
                        <Link to="/">
                            <button onClick={this.handleNext}>Complete</button>
                        </Link>
                    </form>
                </main>
            </div>
        )
    }
}
