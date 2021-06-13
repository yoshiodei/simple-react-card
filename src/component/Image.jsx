import React, {Component} from 'react';

class Image extends Component {
    constructor (props){
    super(props);
    }

    render(){
        return(
            <>
            <div className="card__img">
                <img className="card__img" src={this.props.imgUrl} alt="yoshi image" />
            </div>
        </>
        );
    }
}

export default Image;