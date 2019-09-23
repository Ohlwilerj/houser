import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import store, {HANDLE_IMG} from './../store'

export default class StepTwo extends Component {

    constructor() {
        super()
        const reduxState = store.getState()
        this.state = {
            img: reduxState.img
        }
    }

    componentDidMount = () => {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                img: reduxState.img
            })
        })
    }

    handleImg = (e) => {
        store.dispatch({
            type: HANDLE_IMG,
            payload: e.target.value
        })
    }



    render() {
        return (
            <div>
                <h3>URL</h3>
                <input type="text" value={this.state.img} placeholder='URL img' onChange={e => {this.handleImg(e)}}/>
                <div className="step-buttons">
                    <Link to='/wizard/StepOne'><button>Previous</button></Link>
                    <Link to='/wizard/StepThree'><button>Next</button></Link>
                </div>
                
            </div>
        )
    }
}

