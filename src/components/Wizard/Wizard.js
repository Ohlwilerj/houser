import React, { Component } from 'react'
import {Switch, Route} from "react-router-dom"
import StepOne from './StepOne'
import StepTwo from './StepTwo'

export default class Wizard extends Component {
    constructor() {
        super()
        this.state = {}
    }

    
    render() {
        return (
            <Switch>
            <div>
                <Route path="/wizard/step/1" component= {StepOne} />
                <Route path="/wizard/step/2" component= {StepTwo} />
            </div>

            </Switch>
        )
    }
}
