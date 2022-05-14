import React from 'react';
import Button from 'elements/Button';
import IconText from 'parts/IconText';


export default function Footer() {
  return <footer>
      <div className='container'>
          <div className='row'>
              <div className='col'>
                  <IconText>
                  </IconText>
                   <p className='brand-tagline'>
                          We kaboom your beauty holiday and memorable.
                      </p>
              </div>
              <div className='col-2 mr-5'>
                  <h6 className='mt-2'>For Beginner</h6>
                  <ul className='list-group list-group-flush'>
                      <li className='list-group-item'>
                          <Button type='link' href='/register'>
                              New Account
                          </Button>
                      </li>
                      <li className='list-group-item'>
                          <Button type='link' href='/properties'>
                              Start Booking
                          </Button>
                      </li>
                      <li className='list-group-item'>
                          <Button type='link' href='/use-payment'>
                              Use Payment
                          </Button>
                      </li>
                  </ul>
              </div>
              <div className='col-2 mr-5'>
                  <h6 className='mt-2'>Explore Us</h6>
                  <ul className='list-group list-group-flush'>
                      <li className='list-group-item'>
                          <Button type='link' href='/careers'>
                              Careers
                          </Button>
                      </li>
                      <li className='list-group-item'>
                          <Button type='link' href='/privacy'>
                              Start Booking
                          </Button>
                      </li>
                      <li className='list-group-item'>
                          <Button type='link' href='/terms'>
                              Term & Condition
                          </Button>
                      </li>
                  </ul>
              </div>
              <div className='col-4'>
                  <h6 className='mt-2'>Connect Us</h6>
                  <ul className='list-group list-group-flush'>
                      <li className='list-group-item'>
                          <Button isExternal type='link' href='mailto:support@staycation.id'>
                              support@staycation.id
                          </Button>
                      </li>
                      <li className='list-group-item'>
                          <Button isExternal type='link' href='tel:+6111111111'>
                              011-111-1111
                          </Button>
                      </li>
                      <li className='list-group-item'>
                         <span>Jln Shining Shimmering Splendid</span>
                      </li>
                  </ul>
              </div>
          </div>
          <div className='row'>
              <div className='col text-center copyrights'>
                  copyrights@Staycation 2020
              </div>
          </div>
      </div>
  </footer>;
}
