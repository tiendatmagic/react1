import React,{Component} from 'react';

class Product extends Component {
    //state = {  }
    render() { 
        return (  
            
                <div className ="col">
                    <div className ="thumbnail">
                        <img src={this.props.image} alt = "Generic placeholder thumbnail"/>
                    <div className="caption">
                    
                    <h3>{this.props.name}</h3>
                    <h4>{this.props.price}</h4>
                    <p>
                        <input type="button" className="btn btn-success" value="OK"></input>
                    </p>
                    </div>
                    </div>
                </div>
                
                
            
        );
    }
}
export default Product;