import { bindExpression } from "@babel/types";

import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import store, {HANDLE_MONTHLY_MORTGAGE, HANDLE_MONTHLY_RENT, CANCEL} from './../store'



export default class StepThree extends Component {
    constructor() {
        super()
        const reduxState = store.getState()
        this.state = {
            monthlyMortgage: reduxState.monthlyMortgage,
            monthlyRent: reduxState.monthlyRent
        }
        this.addHouse = this.addHouse.bind(this)
    }

    componentDidMount = () => {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                monthlyMortgage: reduxState.monthlyMortgage,
                monthlyRent: reduxState.monthlyRent
            })
        })
    }

    handleMonthlyMortgage = (e) => {
        store.dispatch({
            type: HANDLE_MONTHLY_MORTGAGE,
            payload: e.target.value
        })
    }

    handleMonthlyRent = (e) => {
        store.dispatch({
            type: HANDLE_MONTHLY_RENT,
            payload: e.target.value
        })
    }

    addHouse() {
        const reduxState = store.getState()
        let {name, address, city, state, zip} = reduxState
        let {monthlyMortgage, monthlyRent} = this.state
        axios.post('api/house', {name, address, city, state, zip, monthlyMortgage, monthlyRent})
        store.dispatch({
            type: CANCEL
        })
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h3>Monthly Mortgage</h3>
                <input type='number' value={this.state.monthlyMortgage} placeholder='Monthly Mortgage' 
                    onChange={e => this.handleMonthlyMortgage(e)}/>
                <h3>Desired Monthly Rent</h3>
                <input type='number' value={this.state.monthlyRent} placeholder='Monthly Rent' 
                    onChange={e => this.handleMonthlyRent(e)} />
                <div className='step-buttons'>
                    <Link to='/wizard/StepTwo'><button>Previous</button></Link>
                    <button className='complete-button' onclick={() => this.addHouse()}>Complete</button>
                </div>
            </div>
        )
    }
}
