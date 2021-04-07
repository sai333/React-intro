import * as React from 'react';
import './style.css';

class Movie extends React.Component {
    render(){
        return (
            <div className='movieClass'>
                <img src={this.props.banner}/>
                <label>{this.props.likes}<br/>{this.props.movieName}</label>
                <br/>{this.props.hero}
            </div>
        );
    }
}


export default Movie;