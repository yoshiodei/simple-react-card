import React , {Component} from 'react';

class Title extends Component {
    constructor(props){
    super(props);
    }
    
    render(){
        return(
            <>
            <h2 className="card__title">{this.props.title}</h2>
            <div className="card__line"></div>
        </>
        );
    }
}

export default Title;