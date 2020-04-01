import {
    NEXT_FORM,
    ON_CHANGE_FROM, ON_FORM_SUBMIT, ON_MOVE_BACK
} from '../actions/actionTypes';

const initialState = {
    currentStep: 1,
    formData: {
        name: '',
        email: '',
        mobile: '',
        blood: '',
        age: '',
        dob: ''
    }
};

const reducer = ( state = initialState, action) =>{
    switch (action.type) {
        case ON_CHANGE_FROM:
            const oldFormData = state.formData;
            return{
              ...state,
              formData: {
                  ...oldFormData,
                  ...action.value
              }
            };
        case ON_FORM_SUBMIT:
            alert(JSON.stringify(state.formData, null, 2));
            return{
                formData: {
                    ...initialState.formData
                },
                currentStep: 1
            };
        case NEXT_FORM:
            if (state.currentStep < 3 ){
                return {
                    ...state,
                    currentStep: state.currentStep + 1
                };
            }else {
                return {
                    ...state
                };
            }

        case ON_MOVE_BACK:
            return {
                ...state,
                currentStep: state.currentStep - 1
            };

        default:
            return state;
    }
};

export default reducer;