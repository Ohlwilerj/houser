import React, { Component } from 'react'

export default class House extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="house">
                <img src={this.props.img} alt=""/>
                <h3>{this.props.id}</h3>
                <h3>{this.props.name} </h3>
                <h3>{this.props.address}</h3>
                <h3>{this.props.city}</h3>
                <h3>{this.props.state}</h3>
                <h3>{this.props.zip}</h3>
                <h3>{this.props.monthlyMortgage}</h3>
                <h3>{this.props.monthlyRent}</h3>
                <button onClick={() => this.props.deleteHouse(this.props.id)}>Delete</button>
            </div>
        )
    }
}
