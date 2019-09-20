import React, { Component } from 'react'
import House from '../House/House'
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div className="dashboard">
                <header className="dashboard-header">
                    <h1>Dashboard</h1>
                    <Link to="wizard/step/1">
                        <button>Add New Property</button>
                    </Link>
                </header>
              <House />  
            </div>
        )
    }
}
