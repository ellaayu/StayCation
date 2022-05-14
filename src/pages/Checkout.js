import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';

import Header from 'parts/Header';
import Button from 'elements/Button';
import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller
} from 'elements/Stepper';

import BookingInformation from 'parts/Checkout/BookingInformation';
import Payment from 'parts/Checkout/Payment';
import Completed from 'parts/Checkout/Completed';

import ItemDetails from 'json/itemDetails.json';

export default class Checkout extends Component {
  state = {
    data: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      proofPayment: '',
      bankName: '',
      bankHolder: '',
    }
  }
  
  // func onChange untuk rubah data local state
  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        // name: firstName/lastName/email/....
        [event.target.name]: event.target.value,
      }
    })
  }

  componentDidMount(){
    window.scroll(0,0);
  }

  render() {
    const {data} = this.state;

    const checkout = {
      duration: 3
    }

    const steps = {
      bookingInformation: {
        title: 'Booking Information',
        description: 'Please fill up the blanks',
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            ItemDetails={ItemDetails}
            onChange={this.onChange}>
          </BookingInformation>
        )
      },
      payment: {
        title: 'Payment',
        description: 'Please follow the instruction',
        content: (
          <Payment
            data={data}
            checkout={checkout}
            ItemDetails={ItemDetails}
            onChange={this.onChange}>
          </Payment>
        )
      },
      completed: {
        title: 'Congrats! Its Completed',
        description: null,
        content: <Completed></Completed>
      }
    }

    return (
      <>
        <Header isCentered></Header>

        <Stepper steps={steps}>
          {
            (prevStep, nextStep, CurrentStep, steps) => (
              <>
                <Numbering
                  data={steps}
                  current={CurrentStep}
                  style={{ marginBottom:150 }}>
                </Numbering>

                <Meta data={steps} current={CurrentStep}></Meta>

                <MainContent data={steps} current={CurrentStep}></MainContent>

                {CurrentStep === 'bookingInformation' && (
                  // <Fade>
                    <Controller>
                      {data.firstName !== '' &&
                        data.lastName !== '' &&
                        data.email !== '' &&
                        data.phone !== '' && (
                          <Fade>
                            <Button
                              className='btn mb-3'
                              type='button'
                              isBlock
                              isPrimary
                              hasShadow
                              onClick={nextStep}>
                                Continue to Book
                            </Button>
                          </Fade>
                        )}

                        <Button
                          className='btn'
                          type='link'
                          isBlock
                          isLight
                          href={`/properties/${ItemDetails._id}`}>
                            Cancel
                        </Button>
                    </Controller>
                  // </Fade>
                )}

                {CurrentStep === 'payment' && (
                  // <Fade>
                    <Controller>
                      {data.proofPayment !== '' &&
                        data.bankName !== '' &&
                        data.bankHolder !== '' && (
                          <Fade>
                            <Button
                              className='btn mb-3'
                              type='button'
                              isBlock
                              isPrimary
                              hasShadow
                              onClick={nextStep}>
                                Continue to Book
                            </Button>
                          </Fade>
                        )}

                        <Button
                          className='btn'
                          type='link'
                          isBlock
                          isLight
                          href={prevStep}>
                            Cancel
                        </Button>
                    </Controller>
                  // </Fade>
                )}

                {CurrentStep === 'completed' && (
                  <Controller>
                    <Button
                      className='btn'
                      type='link'
                      isBlock
                      isPrimary
                      hasShadow
                      href=''>
                          Back to Home
                    </Button>
                  </Controller>
                )}
              </>
            )
          }
        </Stepper>
      </>
    );
  }
}
