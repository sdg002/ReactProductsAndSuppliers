import React, { Component ,useState}  from 'react';
import {ProductTable} from './ProductTable'
import { connect } from "react-redux";
import {ProductEditor} from './ProductEditor'
//import { Button } from 'bootstrap';


/*
This is where we map the properties of the Store to the individual properties of the "props"
*/
const mapStateToProps = (storeData) => ({
    myproducts: storeData.productData
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
    OnSaveItemClick(product)
    {
        console.log(`Save product callback name=${product.name}`)
        this.setState(
            {
                uiState:0,
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
            return this.renderNewProductEditor();
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
                <ol>
                    <li>You have wired up the supply side of the data using mapStateToProps</li>
                    <li>You should now map the dispatch - The product editor should be able to make a change and persist to the store directly</li>
                    <li>The ProductDisplay page must NOT have to update the Store - the mapping should do that</li>
                </ol>
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
    renderNewProductEditor()
    {
        return (<ProductEditor 
                    product={this.state.currentItem}
                    cancelCallback={()=>this.OnGoBackFromEditing()}
                    saveCallback={(item)=>this.OnSaveItemClick(item)}
                    >

                    </ProductEditor>)
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

/*
What is happening below?
We are exporting a default function 
    which is wrapping up ProductDisplay component
    props are initialized using Connect function
    The original ProductDisplay continues to work with props
*/
export default connect(mapStateToProps, mapDispatchToProps)(ProductDisplay)



/*
Demonstrates how to export a simple function which emits HTML

function blah()
{
    return (<h1>this is from a very simple functional component</h1>)
}
export default blah;
*/

/*
Demonstrates how to export a function which emits another Component with all the props supplied
class BlahComponent extends Component
{
    constructor(props)
    {
        super(props)
        this.firstname=this.props.firstname;
        this.lastname=this.props.lastname;
        this.banner=this.props.banner;
    }
    render()
    {
        return (<h1> Inside component, banner:{this.banner} :{this.firstname}  lastname:{this.lastname} </h1>)    
    }
}

function wrapperOverComponent()
{
    return <BlahComponent firstname='john' lastname='Doe' banner='This is from a function which wraps up a component'></BlahComponent>
}

export default wrapperOverComponent;
*/
