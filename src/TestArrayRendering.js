import React, { Component } from 'react';
import { connect } from "react-redux";
import {startCreatingProduct,cancelCreatingProduct,createdProductComplete, deleteProductComplete, editProductComplete} from "./mystore/productActions"
import {ProductTable} from './ProductTable'
import Modal from "react-modal"
import {ProductEditor} from "./ProductEditor"

const mapStateToProps = (storeData) => ({
    myproducts: storeData.productData.products
})

const mapDispatchToProps =(dispatch)=>( {
    saveNewProductCallBack:(newProduct)=>{dispatch(createdProductComplete(newProduct));}   ,
    deleteProductCallBack:(existingProduct)=>{dispatch(deleteProductComplete(existingProduct));},
    editExistingProductCallBack:(existingProduct)=>{dispatch(editProductComplete(existingProduct));}
});

class TestArrayRendering extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            isEditorOpen:false,
            currentProduct:null
        }
    }
    render() {
        console.log("Render of TestArrayRendering")
        return (
            <div>
                <h1>Test array rendering- Handle delete click by adding to </h1>
                <button onClick={()=>this.OnAddNewItem()}>Add new item</button><span>Count of products={this.props.myproducts.length}</span>
                <button onClick={()=>this.OnEditFirstItem()}>Edit first item</button>
                <hr></hr>
                <ProductTable                     
                        products={this.props.myproducts}
                        editCallback={(item)=>this.OnEditItem(item)}
                        deleteCallback={(item)=>this.props.deleteProductCallBack(item)}>
                </ProductTable>
                <Modal isOpen={this.state.isEditorOpen}>
                    <ProductEditor 
                    product={this.state.currentProduct}
                    cancelCallback={()=>this.OnProductEditorCancelCallBack()}
                    saveCallback={(formData)=>this.OnProductEditorSaveCallBack(formData)} 
                    ></ProductEditor>
                </Modal>
            </div>
        );
    }
    OnProductEditorSaveCallBack(item)
    {
        this.props.editExistingProductCallBack(item);
        this.setState({
            isEditorOpen:false
        })
    }
    OnProductEditorCancelCallBack(item)
    {
        this.setState({
            isEditorOpen:false
        })
    }
    //Objective - force an Edit by changing the FirstName of the first item in the products array
    OnEditItem(item)
    {
        //alert(item.name)
        this.setState({
            isEditorOpen:!this.state.isEditorOpen,
            currentProduct:item
        })
    }
    OnEditFirstItem()
    {
        let firsItem = (this.props.myproducts.length == 0)?null:this.props.myproducts[0];
        if (firsItem === null)
        {
            return;
        }
        firsItem.name=firsItem.name + (new Date()).getSeconds();
        this.props.editExistingProductCallBack(firsItem);

    }
    OnAddNewItem()
    {
        console.log("click on Add new item")
        let allIds=this.props.myproducts.map(p=>p.id);
        let newid=Math.max(...allIds)+1
        let newProduct={ 
            id: newid,
            name: `Some name  ${newid}`, 
            category: `Some category  ${newid}`, 
            price: 100 
        }
        this.props.saveNewProductCallBack(newProduct)
    }
}

//export default TestArrayRendering;
export default connect(mapStateToProps, mapDispatchToProps)(TestArrayRendering)
