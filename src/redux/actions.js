export const DECREASE = "DECREASE"
export const INCREASE = "INCREASE"
export const RESET = "RESET"
export const REMOVE = "REMOVE"
export const GET_TOTALS = "GET_TOTALS"
export const TOGGLE_AMOUNT = "TOGGLE_AMOUNT"

export const removeItem = (id)=>{
    return {type:REMOVE,payload:{id}}
}