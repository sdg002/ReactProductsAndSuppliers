import React, { Component ,useState}  from 'react';
import {ProductTable} from './ProductTable'
import { connect } from "react-redux";
import {ProductEditor} from './ProductEditor'
//import { Button } from 'bootstrap';
import {startCreatingProduct,cancelCreatingProduct,createdProductComplete} from "./mystore/productActions"


/*
This is where we map the properties of the Store to the individual properties of the "props"
*/
const mapStateToProps = (storeData) => ({
    editing:storeData.productData.editing,
    creating:storeData.productData.creating,
    myproducts: storeData.productData.products
})

const mapDispatchToProps =(dispatch)=>( {
    createProduct: ()=> dispatch(startCreatingProduct()), 
    cancelProductCreation: ()=>dispatch(cancelCreatingProduct()),
    saveNewProductCallBack: (newProduct)=>{
        dispatch(createdProductComplete(newProduct));
        //dispatch(cancelCreatingProduct());
    }
    
});

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
        console.log(`Inside function renderMainTable of Productdispay creating=${this.props.creating}, count of products=${this.props.myproducts.length}`)
        let creating=(this.props.creating===true)?"Creation mode":"Noncreatoin mode";
        return (
            <div>
                <h2>Product display - connect the table via table connector - HOC component (read about this). Count of products={this.products.length}</h2> 
                <hr/>
                <ol>
                    <li>Wire up the Save handler of the new product click</li>
                    <li>The ProductDisplay page must NOT have to update the Store - the mapping should do that</li>
                </ol>
                <hr/>
                <div style={this.GetProductTableStyle()}>
                    <ProductTable                     
                        products={this.products}
                        key={this.products.length}
                        editCallback={(item)=>{this.OnEditItemClick(item)}}
                        deleteCallback={this.OnDeleteItemClick}></ProductTable>
                    <div className="text-center">
                        <button className="btn btn-primary m-1" 
                            onClick={ ()=>this.OnCreateProduct() }>
                            Create Product
                        </button>
                    </div>                        
                </div>
                <hr/>
                <div style={this.GetProductEditorStyle()}>
                <ProductEditor  
                    product={{}}
                    saveCallback={(formData)=>this.OnProductEditorSaveCallBack(formData)} 
                    cancelCallback={()=>this.OnProductEditorCancelCallBack()}></ProductEditor>
                    
                </div>
                <hr/>

            </div>
        );
    }
    OnProductEditorSaveCallBack(formData)
    {
        console.log("On Save new product save call back")
        this.props.saveNewProductCallBack(formData);
    }
    OnProductEditorCancelCallBack()
    {
        this.props.cancelProductCreation();
    }
    GetProductEditorStyle()
    {
        let display= (this.props.creating)? "block":"none"
        let style= {"display":display};
        return style;
    }
    GetProductTableStyle()
    {
        let display= (this.props.creating)? "none":"block"
        let style= {"display":display};
        return style;
    }
    OnCreateProduct()
    {
        console.log("create product click")
        this.props.createProduct();
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
