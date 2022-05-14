import React from 'react';
import Fade from 'react-reveal/Fade';

import {InputText, InputFile} from 'elements/Form';

import logoBca from 'assets/images/Banner.jpg'
import LogoMandii from 'assets/images/Banner.jpg'

export default function Payment(props) {
    const {data, ItemDetails, checkout} = props;
    const tax = 10;
    const subTotal = ItemDetails.price * checkout.duration;
    const grandTotal = (subTotal * tax)/100 + subTotal;
  return (
    <Fade>
      <div className='container' style={{ marginBottom: 30 }}>
        <div className='row justify-content-center align-items-center'>
          <div className='col-5 border-right py-5' style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className='mb-4'>Transfer Pembayaran</p>
              <p>Tax: {tax}%</p>
              <p>Sub total: ${subTotal}</p>
              <p>Total: ${grandTotal}</p>
              <div className='row mt-4'>
                <div className='col-3 text-right'>
                  <img src={logoBca} alt='bank central asia' width={60}></img>
                </div>
                <div className='col'>
                  <dl>
                    <dd>Bank Central Asia</dd>
                    <dd>2208 1996</dd>
                    <dd>StayCation inc</dd>
                  </dl>
                </div>
              </div>

              <div className='row'>
                <div className='col-3 text-right'>
                  <img src={LogoMandii} alt='bank mandiri' width={60}></img>
                </div>
                <div className='col'>
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd>2208 1996</dd>
                    <dd>StayCation inc</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>
          <div className='col-5 py-5' style={{ paddingLeft:80 }}>
            <Fade delay = {600}>
              <label htmlFor='proofPayment'>Upload bukti Transfer</label>
              <InputFile
                accept='image/*'
                id='proofPayment'
                name='proofPayment'
                value={data.proofpayment}
                onChange={props.onChange}>
              </InputFile>

              <label htmlFor='bankName'>Asal Bank</label>
              <InputText
                id='bankName'
                name='bankName'
                value={data.bankName}
                onChange={props.bankName}>
              </InputText>
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  )
}
