import { STORE, UPDATE, DELETE } from "./modelActionTypes";
import { initialProductData } from "./initialProductData";
import { STATE_START_EDITING, STATE_END_EDITING, STATE_START_CREATING }  from "./productActions"

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
                creating:!productData.creating
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
