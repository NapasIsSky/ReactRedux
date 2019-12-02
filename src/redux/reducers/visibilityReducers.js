import { STATUS_ACTIVE, SHOW_ACTIVE, SHOW_INACTIVE, STATUS_INACTIVE } from "../actions/actions";


export default function visibilityReducer(visibility = STATUS_ACTIVE, action){
    switch(action.type){
        case SHOW_ACTIVE:
            return STATUS_ACTIVE
        case SHOW_INACTIVE:
            return STATUS_INACTIVE
        default:
            return visibility
    }
}