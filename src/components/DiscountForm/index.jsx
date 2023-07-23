import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import s from './style.module.css';
import gnome from './gnome.png';

const DiscountForm = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();

  const onSubmit = data => {
    const url = 'http://localhost:3333/sale/send';
    const requestData = {
      key1: 'value1',
      key2: 'value2'
    };

    axios.post(url, requestData)
      .then(response => {
        console.log('Запрос успешно выполнен!');
        console.log('Ответ сервера:', response.data);
      })
      .catch(error => {
        console.error('Произошла ошибка при выполнении запроса.');
        console.error('Ошибка:', error.message);
      });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ phone: '' });
    }
  }, [isSubmitSuccessful, reset]);

  const changeClass = () => {
    return errors.phone?.type === 'pattern' ? `${s.input_tel} ${s.reject}` : s.input_tel;
  };

  return (
    <div className={s.form}>
      <div className={s.disc_item}>
        <img className={s.gnome} src={gnome} alt="gnome" />
        <div className={s.disc_form_box}>
          <p className={s.disc_info}>
            <span>5% off</span> <br />
            on the first order
          </p>
          <form className={s.disc_form} onSubmit={handleSubmit(onSubmit)}>
            <input
              className={changeClass()}
              type='tel'
              {...register("phone")}
              placeholder='+49 999 9999999'
            />
            {
              errors.phone?.type === 'required' &&
              <p className={s.required}>
                This field is required, please type your phone number
              </p>
            }
            <input className={s.submit_btn} type="submit" value="Get a discount" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default DiscountForm;





// import React from 'react';
// import { useForm } from "react-hook-form";
// import s from './style.module.css'
// import gnome from './gnome.png'
// import { useEffect } from 'react';


// const DiscountForm = () => {

//     const { register, handleSubmit,reset, formState:{errors, isSubmitSuccessful } } = useForm();




//     const onSubmit = data => {
//         const axios = require('axios');

//         const url = 'http://localhost:3333/sale/send';
    
//         // Тело запроса в формате JSON
//         const data = {
//         key1: 'value1',
//         key2: 'value2'
//         };
    
    
//         axios.post(url, data)
//         .then(response => {
//         console.log('Запрос успешно выполнен!');
//         console.log('Ответ сервера:', response.data);
//       })
//       .catch(error => {
//         console.error('Произошла ошибка при выполнении запроса.');
//         console.error('Ошибка:', error.message);
//       });
//     } 

//     useEffect(() => {
//         if (isSubmitSuccessful) {
//             reset({ phone: '' });
//         }
//     },[isSubmitSuccessful, reset])

//     const changeClass = () => {
//        return errors.phone?.type === 'pattern' ? `${s.input_tel} ${s.reject}` : s.input_tel
//     }

//     return (
//         <div className={s.form}>
//             <div className={s.disc_item}>
//                 <img className={s.gnome} src={gnome} alt="gnome" />
//                 <div className={s.disc_form_box}>
//                     <p className={s.disc_info}>
//                         <span > 5% off </span> <br />
//                         on the first order
//                     </p>
//                     <form className={s.disc_form} onSubmit={handleSubmit(onSubmit)}>
//                         <input 
//                             className={changeClass()} 
//                             type='tel'  
//                             {...register("phone", 
//                             )}
//                             placeholder='+49 999 9999999'
//                         />
//                         {
//                             errors.phone?.type === 'required' && 
//                                 <p className={s.required}>
//                                     This field is required, please type your phone number
//                                 </p>
//                         } 
//                         <input className={s.submit_btn} type="submit" value="Get a discount" />
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DiscountForm;