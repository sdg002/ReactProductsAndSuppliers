import { STORE, UPDATE, DELETE } from "./modelActionTypes";
export const STATE_START_EDITING = "state_start_editing";
export const STATE_END_EDITING = "state_end_editing";
export const STATE_START_CREATING = "state_start_creating";
export const STATE_CANCEL_CREATING = "state_cancel_creating";
export const STATE_COMPLETE_CREATING = "state_complete_creating";
export const DELETE_PRODUCT = "delete_product";



export const startCreatingProduct = () => ({
    type: STATE_START_CREATING
})

export const cancelCreatingProduct = () => ({
    type: STATE_CANCEL_CREATING
})

export const createdProductComplete = (product) => ({
    type: STATE_COMPLETE_CREATING,
    payload: product
})
export const deleteProductComplete = (product) => ({
    type: DELETE_PRODUCT,
    payload: product
})
