import React, { Component } from 'react'
import Tours from '../Tours/Tours'
import './tourList.scss'
import { tourData } from '../../tourData'

export default class TourList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tours: tourData
        };
    };

    removeTour = id => {
        const { tours } = this.state
        const sortedTours = tours.filter(tour => tour.id !== id)
        this.setState({
            tours: sortedTours
        })
    }

    render() {
        // console.log(this.state.tours);
        const { tours } = this.state
        return (
            <section className='tourList'>
                {
                    tours.map(tour => (<Tours key={tour.id} tour={tour} removeTour={this.removeTour} />))
                }
            </section>
        )
    }
}
