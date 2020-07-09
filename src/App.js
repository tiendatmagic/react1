import React, { Component } from 'react';

import './App.css';
import Product from './Components/Product';

class App extends Component {
  //state = {  }
  /*
  constructor(props){
    super(props);
    this.namee= this.namee.bind(this);
  }
  */
  clickbutton() {
    alert("hello");
  }

  clickbutton2(text) {
    alert(text);
  }

  namee =()=>{
    alert(this.refs.nameee.value);
  }
  render() { 
    var arr = [
      {
      id: 1,
      name:"SSamsungarr",
      price: 15000000,
      image: "https://cdn.tgdd.vn/Products/Images/42/161554/sieu-pham-galaxy-s-black-400x460.png",
      status: true
  
    },
    {
      id: 2,
      name:"OOppoarr",
      price: 18000000,
      image: "https://cdn.tgdd.vn/Products/Images/42/161554/sieu-pham-galaxy-s-black-400x460.png",
      status: false
  
    },
  ];
    var elementarr = arr.map((arr,index)=> {
      let result='';
      if (arr.status){
        result = <Product 
        key= {arr.id}
        name={arr.name}
        price={arr.price}
        image={arr.image}
        />
      }
      return result
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
                <input type="button" className="btn btn-success" onClick={ () =>{ this.clickbutton2("Tiến Đạt")} } value="OKC"></input>
            </div>
          </div>
          </div>
          <label>Thêm thông tin</label>
          <input type="text" className="form-control" ref="nameee"></input>
          <input type="submit" className="btn btn-warning" onClick={ this.namee } value="Lưu"></input>
    </div>
     
     );
  }
}
 
export default App;

