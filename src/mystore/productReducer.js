import { STORE, UPDATE, DELETE } from "./modelActionTypes";
import { initialProductData } from "./initialProductData";
import { STATE_START_EDITING, STATE_END_EDITING, STATE_START_CREATING ,STATE_CANCEL_CREATING, CREATE_PRODUCT,DELETE_PRODUCT, EDIT_PRODUCT }  from "./productActions"

let initialState={
    editing:false,
    creating:false,
    products:initialProductData
}

export default function(productData, action) {
    console.log(`Inside Product reducer ${action.type}`)
    switch (action.type) {
        case STATE_START_CREATING:
            return {
                ...productData,
                creating:true
            }
        case CREATE_PRODUCT:
            let newProduct=action.payload;
            if (newProduct.id === undefined)
            {
                newProduct.id=productData.products.length+1
            }
            
            return {
                ...productData,
                creating:false, //Not setting this flag here because this might be causing the UI to not refresh. Instead do double dispatch
                products:[...productData.products, newProduct]
            }
        case DELETE_PRODUCT:
            let productGettingDeleted=action.payload;
            return {
                ...productData,
                products:productData.products.filter(p=> p.id !=productGettingDeleted.id)
            }
        case EDIT_PRODUCT:
            let productGettingEdited=action.payload;
            let arrWithoutEditedProduct=productData.products.filter(p=> p.id !=productGettingEdited.id);
            return {
                ...productData,
                products:[...arrWithoutEditedProduct,productGettingEdited]
            }
            // case STORE:
        //     return {
        //         ...storeData, 
        //         [action.dataType]:
        //             storeData[action.dataType].concat([action.payload])
        //     }
        // case UPDATE:        
        //     return {
        //         ...storeData,
        //         [action.dataType]: storeData[action.dataType].map(p => 
        //             p.id === action.payload.id ? action.payload : p)
        //     }
        // case DELETE:
        //     return {
        //         ...storeData,
        //         [action.dataType]: storeData[action.dataType]
        //             .filter(p => p.id !== action.payload)
        //     }
        default: 
            return productData || initialState;
    }   
}
