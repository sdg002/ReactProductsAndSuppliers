import { STORE, UPDATE, DELETE } from "./modelActionTypes";
import { initialProductData } from "./initialProductData";
import { STATE_START_EDITING, STATE_END_EDITING, STATE_START_CREATING ,STATE_CANCEL_CREATING, STATE_COMPLETE_CREATING,DELETE_PRODUCT }  from "./productActions"

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
        case STATE_CANCEL_CREATING:
            return {
                ...productData,
                creating:false
            }
        case STATE_COMPLETE_CREATING:
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
