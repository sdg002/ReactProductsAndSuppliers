import React, { Component } from 'react';
import { ProductEditor } from './ProductEditor';
import {ProductTable} from './ProductTable'
import {SupplierTable} from './SupplierTable'



class TestPage extends Component {
    render() {
        return (
            <div>
              <h3>test page comes here</h3>  
                <div>                
                    {
                        this.renderProductTable()
                    }
                </div>
                <hr></hr>
                <div>                
                    {
                        this.renderSuppliersTable()
                    }
                </div>
                <hr></hr>
                <div>                
                    {
                        this.renderProductEditor()
                    }
                </div>
            </div>
        );
    }
    renderProductEditor()
    {
        let sampleProduct={ id: 1, name: "Trail Shoes", category: "Running", price: 100 }
        let saveCallBack=(product)=>
        {
            console.log(`Save callback name=${product.name}`)
        };
        let cancelCallBack=(product)=>
        {
            console.log(`Cancel callback name=${product.name}`)
        };
        return (
            <div>
                <h1>Product editor</h1>
                <ProductEditor product={sampleProduct} saveCallback={saveCallBack} cancelCallback={cancelCallBack}></ProductEditor>
            </div>)
    }
    renderProductTable()
    {
        let sampleProducts=
        [
            { id: 1, name: "Trail Shoes", category: "Running", price: 100 },
            { id: 2, name: "Thermal Hat", category: "Running", price: 12 },
            { id: 3, name: "Heated Gloves", category: "Running", price: 82.50 },
            { id: 4, name: "Cheap gloves", category: "Running", price: 34.50 }
        ]
        let editCallback=(product)=>
        {
            console.log(`Edit callback name=${product.name}`)
        };
        let deleteCallback=(product)=>
        {
            console.log(`Delete callback name=${product.name}`)
        };
        return <ProductTable 
                products={sampleProducts}
                editCallback={editCallback}
                deleteCallback={deleteCallback}
                ></ProductTable>
    }
    renderSuppliersTable()
    {
        let sampleSuppliers=
        [
            { id: 1, name: "Zoom Shoes", city: "London", products: [1] },
            { id: 2, name: "Cosy Gear", city: "New York", products: [2, 3] }
        ]
        let editCallback=(supplier)=>
        {
            console.log(`Edit callback name=${supplier.name}`)
        };
        let deleteCallback=(supplier)=>
        {
            console.log(`Delete callback name=${supplier.name}`)
        };
        return <SupplierTable
                suppliers={sampleSuppliers}
                editCallback={editCallback}
                deleteCallback={deleteCallback}
                ></SupplierTable>
    }

    
}

export default TestPage;