import React , {Component} from 'react';

class Description extends Component {
    constructor(props){
    super(props);
    }
    
    render(){
        return(
           <>
            <p className="card__description">{this.props.description}</p>
        </>
        );
    }
}

export default Description;