import React, { Component } from 'react';
import {ProductTable} from './ProductTable'
import { connect } from "react-redux";


/*
This is where we map the properties of the Store to the individual properties of the "props"
*/
const mapStateToProps = (storeData) => ({
    myproducts: storeData.modelData.products
})

const mapDispatchToProps = {
    createProduct: null,  //to be filled in later on
}

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

class ProductDisplay extends Component {
    constructor(props)
    {
        super(props);
        this.products=this.props.myproducts;
    }
    render() {
        return (
            <div>
                <h2>Product display - connect the table via table connector - HOC component (read about this). Count of products={this.products.length}</h2> 
                <hr/>
                <ProductTable products={this.products}></ProductTable>           
            </div>
        );
    }
}

//export default  ProductDisplay;
export default connect(mapStateToProps, mapDispatchToProps)(ProductDisplay)