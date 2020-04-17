import React, { Component } from 'react'
import '../Tours/tours.scss'

export default class Tours extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showInfo: false
        }
    }

    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {
        const { id, img, city, name, info } = this.props.tour;
        const { removeTour } = this.props;
        return (
            <article className='tour'>
                <div className='img-container'>
                    <img src={img} alt="tour views" />
                    <span className='close-btn' onClick={() => removeTour(id)}>
                        <i className="fas fa-window-close"></i>
                    </span>
                </div>
                <div className='tour-info'>
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>Info {''} <span onClick={this.handleInfo}><i className='fas fa-caret-square-down'></i></span> </h5>
                    {this.state.showInfo && <p>{info}</p>}
                </div>
            </article>
        )
    }
}
