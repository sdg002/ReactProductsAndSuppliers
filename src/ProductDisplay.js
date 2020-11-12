import React, { Component ,useState}  from 'react';
import {ProductTable} from './ProductTable'
import { connect } from "react-redux";
import {ProductEditor} from './ProductEditor'
//import { Button } from 'bootstrap';


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
        //const [uiState, setUIState] = useState(0); //Will not work in Class components - function components only
        //React Hook "useState" cannot be called in a class component.
        this.state=
        {
            uiState:0,
            currentItem:null
        }
    }
    OnEditItemClick(product)
    {
        console.log(`Edit callback name=${product.name}`)
        this.setState(
            {
                uiState:1,
                currentItem:product
            }
        )
    }
    OnDeleteItemClick(product)
    {
        console.log(`Delete callback name=${product.name}`)
    }
    render()
    {
        if (this.state.uiState == 0)
        {
            return this.renderMainTable();
        }
        else if (this.state.uiState ==1)
        {
            return this.renderProductEditor();
        }
        else
        {
            throw 'Invalid ui state'
        }
    }
    renderMainTable() {
        return (
            <div>
                <h2>Product display - connect the table via table connector - HOC component (read about this). Count of products={this.products.length}</h2> 
                <hr/>
                <ProductTable 
                products={this.products}
                editCallback={(item)=>{this.OnEditItemClick(item)}}
                deleteCallback={this.OnDeleteItemClick}
                ></ProductTable>           
            </div>
        );
    }
    OnGoBackFromEditing()
    {
        this.setState(
            {
                uiState:0,
            }
        )

    }
    renderProductEditor()
    {
        return (
        <div>
            <h2>Edit product:{this.state.currentItem.name}</h2>
            <button 
                className='btn-primary active' 
                onClick={()=>this.OnGoBackFromEditing()}>Back</button>
        </div>)
    }
}

//export default  ProductDisplay;
export default connect(mapStateToProps, mapDispatchToProps)(ProductDisplay)