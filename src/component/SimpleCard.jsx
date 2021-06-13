import Image from './Image';
import Title from './Title';
import Description from './Description';
import './css/Styles.css';
import img from './yoshi.png';

const SimpleCard = () => {
    
    let description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non perferendis a consequatur reiciendis, asperiores voluptates sint, eos similique odio sit.";
    let title = "Yoshi's Card";
        
    return (
        <div className="card">
            <Image imgUrl={img} />
            <div className="card__div">
                <Title title={title} />
                <Description description={description} />
            </div>
        </div>
    );
}

export default SimpleCard;