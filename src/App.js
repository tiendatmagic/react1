import React, { Component } from 'react';

import './App.css';
import Product from './Components/Product';

class App extends Component {
  state = {  }
  render() { 
    var arr = [
      {
      name:"SSamsungarr",
      price: 15000000,
      image: "https://cdn.tgdd.vn/Products/Images/42/161554/sieu-pham-galaxy-s-black-400x460.png"
  
    },
    {
      name:"OOppoarr",
      price: 18000000,
      image: "https://cdn.tgdd.vn/Products/Images/42/161554/sieu-pham-galaxy-s-black-400x460.png"
  
    },
  ];
    var elementarr = arr.map((arr,index)=> {
      return <Product 
      name={arr.name}
      price={arr.price}
      image={arr.image}
      />
    });
    return ( 
      <div className="Appp">
          <div className="container-fluid">
            <div className="row">
            <div className="col-sm-4">
        <Product 
        name="Apple"
        price="15000000"
        image="https://cdn.tgdd.vn/Products/Images/42/161554/sieu-pham-galaxy-s-black-400x460.png"
        />
            </div>

            <div className="col-sm-4">
            <Product 
        name="Samsung"
        price="10000000"
        image="https://cdn.tgdd.vn/Products/Images/42/161554/sieu-pham-galaxy-s-black-400x460.png"
        />
            </div>

            <div className="col-sm-4">
            <Product 
        name="Oppo"
        price="8000000"
        image="https://cdn.tgdd.vn/Products/Images/42/161554/sieu-pham-galaxy-s-black-400x460.png"
        
        />
        
            </div>

            <div className="col-sm-4">
              {/* hiển thị kiểu mảng */}
                {elementarr}
                <input type="button" className="btn btn-success" onClick={ this.clickbutton } value="OK"></input>
            </div>
          </div>
          </div>
    </div>
     
     );
  }
}
 
export default App;

