import {
    NEXT_FORM,
    PREVIOUS_FORM,
    ON_CHANGE_FROM,
    ON_MOVE_BACK,
    ON_FORM_SUBMIT
} from './actionTypes';

export const nextForm = () =>{
  return{
      type: NEXT_FORM
  }
};

export const previousForm = () =>{
    return{
        type: ON_MOVE_BACK
    }
};

const changeForm = values => {
    return{
        type: ON_CHANGE_FROM,
        value: values
    };
};

export const onChangeForm = (values) => {
    return dispatch => {
        dispatch(changeForm(values));
        dispatch(nextForm())
    }
};

export const onMoveBack =() =>{
  return dispatch => {
      dispatch(previousForm())
  }
};

const formSubmit = () =>{
    return{
        type: ON_FORM_SUBMIT
    }
}

export const onFormSubmit = (values)=> {
  return dispatch =>{
      dispatch(onChangeForm(values));
      dispatch(formSubmit())
  }

    /*return{
      type: ON_FORM_SUBMIT,
      value: values
  }*/
};