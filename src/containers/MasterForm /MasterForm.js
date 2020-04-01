import React, { Component} from "react";
import Step1 from "../../components/Step1/Step1";
import Step2 from "../../components/Step2/Step2";
import Step3 from "../../components/Step3/Step3";
import './MasterForm.css'
import {connect} from "react-redux";
import {
    onChangeForm, onFormSubmit, onMoveBack
} from '../../store/actions/actionCreators';



class MasterForm extends Component{

    constructor(props) {
        super(props);

        this.state ={
            currentStep: 1
        }
    }

    next = (value) =>{
      const currentStep = this.state.currentStep;
        this.setState({
            currentStep: currentStep + value
        })
    };

    prev = (value) =>{
        const currentStep = this.state.currentStep;
        this.setState({
            currentStep: currentStep - value
        })
    };

    formSubmit = () =>{
        alert(JSON.stringify(this.props.formData, null, 2));
    };

    render() {
        const currentStep  = this.props.currentStep;
        const values = this.props.formData;
        let step = null;

        switch (currentStep) {
            case 1:
                step = <Step1
                    handleChange={this.props.onChangeHandler}
                    value={values}
                />;
                break;
            case 2:
                step = <Step2
                    prev={this.props.onPressBack}
                    handleChange={this.props.onChangeHandler}
                    value={values}
                />;
                break;
            case 3:
                step=<Step3
                    prev={this.props.onPressBack}
                    handleChange={this.props.onChangeHandler}
                    handleSubmit={this.props.onFormSubmit}
                    value={values}
                />;
                break;
            default:
                step = <Step1
                    handleChange={this.props.onChangeHandler}
                    value={values}
                />;

        }
        return(
            <div className="card" style={{marginTop: "20px"}}>
                <div className="card-header">
                    <span className="card-title">Multi-Step Form</span>
                </div>
                <div className="card-body">
                    {
                        step
                    }
                </div>
            </div>
        )
    }
};

const mapStateToProps = state =>{
    return {
        formData: state.formData,
        currentStep: state.currentStep
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        onChangeHandler: (values) => dispatch(onChangeForm(values)),
        onFormSubmit: (values) => dispatch(onFormSubmit(values)),
        onPressBack: () => dispatch(onMoveBack())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MasterForm);