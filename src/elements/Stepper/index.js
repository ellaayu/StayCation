import React, {useState} from 'react';
import propTypes from 'prop-types';

export {default as Controller} from "./Controller"

export {default as MainContent} from "./MainContent"

export {default as Meta} from "./Meta"

export {default as Numbering} from "./Numbering"


export default function Stepper(props) {

    const {steps, intialStep} = props;
    const stepsKeys = Object.keys(steps);

    const [CurrentStep, setCurrenStep] = useState(
        stepsKeys.indexOf(intialStep) > -1 ? intialStep : stepsKeys[0]
    );

    const totalStep = stepsKeys.length;
    const indexStep = stepsKeys.indexOf(CurrentStep);
    console.log(' - Stepper');
    // step yang sedang aktif
    function prevStep(){
        if (+indexStep > 0) setCurrenStep(stepsKeys[indexStep - 1]);
    }
    console.log('2 - Stepper');
    function nextStep(){
         if (+indexStep < totalStep) setCurrenStep(stepsKeys[indexStep + 1]);
         console.log('nexStep2 - Stepper');
    }
  
    return <> {props.children(prevStep, nextStep, CurrentStep, steps)} </>;
}

Stepper.propTypes = {
    steps: propTypes.object.isRequired,
    initialSteps: propTypes.string
}
