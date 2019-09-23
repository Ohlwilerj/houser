import React, { Component } from 'react'
import {Link, Route} from "react-router-dom"
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import store, {CANCEL} from './../store'

export default class Wizard extends Component {
    cancel = () => {
        store.dispatch({
            type: CANCEL
        })
    }

    
    render() {
        return (
            <div className="wizard-top">
                <div className="wizard">
                    <div className="wizard-header">
                        <h1>Add New Listing</h1>
                        <Link to='/'>
                            <button onClick={() => this.cancel()}>Cancel</button>
                        </Link>
                    </div>
                    <div className="steps">
                        <Route path='/wizard/StepOne' component={StepOne} />
                        <Route path='/wizard/StepTwo' component={StepTwo} />
                        <Route path='/wizard/StepThree' component={StepThree} />
                    </div>
                </div>

            </div>

        )
    }
}
