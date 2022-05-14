import React, {useState, useRef, useEffect} from 'react';
import propTypes from 'prop-types';

//intall npm i react-date-range
import {DateRange} from 'react-date-range';

import './index.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import formatDate from 'utils/formatDate';
import iconCalendar from 'assets/images/Icon/icon-calendar.svg';


export default function Date(props) {

    const {value, placeholder, name} = props;
    //variable
    const [isShowed, setIsShowed] = useState(false);

    //function datepicker
    const datePickerChange = value => {
        const target = {
            target:{
                value: value.selection,
                name: name
            }
        };
        props.onChange(target);
    }

    useEffect(() => {
        //ketika click diluar, calender nutup //function handleClickOutside
        document.addEventListener("mousedown", handleClickOutside);

        return() => {
            document.addEventListener("mousedown", handleClickOutside);
        }
    });

    const refDate = useRef(null);
    const handleClickOutside = event => {
        //jika komponen refDate terisi && sudah dipasang
        if (refDate && !refDate.current.contains(event.target)){
            setIsShowed(false);
        }
    };

    //ketika sudah selesai pilih date, tangallan otomatis nutup
    const check = focus => {
        //indexOf untuk ngecek string/array punya unsur "1" //ketika nilai kembalinya 0, maka bener 
        focus.indexOf(1) < 0 && setIsShowed(false)
    };

    const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}${
        value.endDate ? " - " + formatDate(value.endDate) : ""
    }`;

  return <div ref={refDate} className={["input-date mb-3", props.outerClassName].join(" ")}>
      <div className='input-group'>
          <div className='input-group-prepend bg-gray-900'>
              <span className='input-group-text'>
                  {/* source ke icon_calendar.svg */}
                  <img src={iconCalendar} alt='icon calendar'></img>
              </span>
          </div>
          <input
            readOnly
            type="text"
            className='form-control'
            value={displayDate}
            placeholder={placeholder}
            onClick={() => setIsShowed(!isShowed)}>
          </input>

          {isShowed && (
              <div className='date-range-wrapper'>
                  <DateRange
                    editableDateInputs={true}
                    onChange={datePickerChange}
                    moveRangeOnFirstSelection={false}
                    onRangeFocusChange={check}
                    ranges={[value]}>
                  </DateRange>
              </div>
          )}
      </div>

  </div>
}

Date.propTypes = {
    value: propTypes.object,
    onChange: propTypes.func,
    placeholder: propTypes.string,
    outerClassName: propTypes.string
}









//Hooks untuk Kelas Komponen
// componentDidMount(){

// }

// componentDidUpdate(prevProps, prevState){
//     if(prevProps !== this.props){

//     }
//     if(prevState !== this.props){

//     }
// }

// componentWillUnmount(){

// }

// //Hooks untuk Functional Component
// useEffect(() => {
//     //menubah title web
//     window.title = "Home"
//     return () => {

//     }
// }), [state]
