import React, { Component } from 'react';
import {ProductTable} from './ProductTable'



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
            </div>
        );
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

    
}

export default TestPage;