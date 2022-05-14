// pake Hooks yang ngijinin pake states di function componen 
import React, {useState} from 'react';

import propTypes from 'prop-types';

import './index.scss'

export default function Number(props) {

    const {value, placeholder, name, min, max, prefix, suffix, isSuffixPlural} = props;

    //ketika run useState, inisial nya akan langsung memiliki prefix, value, suffix
    const [InputValue, setInputValue] = useState(`${prefix}${value}${suffix}`)

   
    const onChange = e =>{
        //mengubah value ke string
        let value = String(e.target.value);
         //ketika value menemukan string berisi prefix, maka prefix akan dihapus
        if (prefix) value = value.replace(prefix);
        // eg: ketika masukin "2 nights", akan berubah menjadi "2"
        //nights di replace
        if (suffix) value = value.replace(suffix);

        const patternNumberic = new RegExp("[0-9]*");
        const isNumeric = patternNumberic.test(value);

        //isNumeric == jika input string "32", akan jadi number 32
        if (isNumeric && +value <= max && +value >= min){
            //update state
            props.onChange({
                target: {
                    name:name,
                    value: +value
                }
            });
            //value yang dikirim bukan "2 nights" tapi hanya number 2
            setInputValue(`${prefix}${value}${suffix}${isSuffixPlural && value > 1 ? "s" : ""}`)
        }
    }

    const minus = () => {
         value > min && onChange({
            target: {
                    name:name,
                    value: +value - 1
                }
         })
    }

    const plus = () => {
         value < max && onChange({
            target: {
                    name:name,
                    value: +value + 1
                }
         })
    }

    //classname terima prop outerClassname => dijaidkan string dengan pemisah "spasi"
    //e.g: input-number mb-3 tag
  return <div className={["input-number mb-3", props.outerClassName].join(" ")}>
      <div className='input-group'>
          <div className='input-group-prepend'>
              <span className='input-group-text minus' onClick={minus}>
                  -
              </span>
          </div>
          <input 
                className='form-control'
                // value={String(InputValue)}
                readOnly
                value={`${prefix}${value}${suffix}${isSuffixPlural && value > 1 ? "s" : ""}`}
                name={name} 
                min={min} 
                max={max} 
                //jika placeholder undifine
                placeholder={placeholder ? placeholder : 0} 
                // pattern= "[0-9]*"
                onChange={onChange}>
            </input>
            <div className='input-group-append'>
                <span className='input-group-text plus' onClick={plus}> + </span>
            </div>
      </div>
  </div>;
}

//value default untuk number jika tidak set-up <Number min=> 
Number.defaultProps = {
    min:1,
    max:1,
    prefix:"",
    suffix:""
}

//deklarasi propTypes
Number.propTypes = {
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    onChange: propTypes.func,
    placeholder: propTypes.string,
    outerClassName: propTypes.string
}