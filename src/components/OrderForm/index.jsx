import { useSelector } from 'react-redux';
import s from './style.module.css'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import axios from 'axios';

const OrderForm = () => {
    
    const { products } = useSelector(state => state)
    const { data } = useSelector(state => state.basket)  
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        const url = 'http://localhost:3333/order/send';
        const requestData = {
          key1: 'value1',
          key2: 'value2'
        };
    
        axios.post(url, requestData)
          .then(response => {
            console.log('Запрос успешно выполнен!');
            console.log('Ответ сервера:', response.data);
            reset(); // Очистка полей формы
          })
          .catch(error => {
            console.error('Произошла ошибка при выполнении запроса.');
            console.error('Ошибка:', error.message);
          });
          
    };

    const priceRender = () => {
        if (products.status === 'resolve') {
            return data.reduce((prev,item) => {
                const product = products.data.find(el => el.id === item.id)
                return prev + item.count * product.finalPrice
            },0).toFixed(2)
        } else {
            return 0
        }
    }    

    const changeClass = () => {
        return errors.phone?.type && data.length ? `${s.phone_number} ${s.reject}` : s.phone_number
    }
 
    return (
        <>
            {
                !data.length
                ?
                <Link to="/products/all" className={s.btn_shop}>
                    Shop Now
                </Link>
                :
                <form onSubmit={handleSubmit(onSubmit)} className={s.basket_form}>
                    <h3 className={s.title}>Order details</h3>
                    <div className={s.total_blok}>
                        <p className={s.total_text}>Total</p>
                        <p className={s.total_sum}>{priceRender()}$</p>
                    </div>
                    <div className={s.inputs}>
                        <input 
                            className={changeClass()} 
                            type="tel" 
                            name="phone" 
                            {...register("phone")}
                            placeholder='+49 999 9999999'
                        />
                        <input className={s.order_btn} type="submit" value="Order"/>
                    </div>
                </form>
            } 
        </>

    );
};

export default OrderForm;



// import { useSelector } from 'react-redux';
// import s from './style.module.css'
// import { useForm } from "react-hook-form";
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const OrderForm = () => {
    
//     const { products} = useSelector(state => state)
//     const {data} = useSelector(state => state.basket)  
//     // , status, error
//     const { register, handleSubmit, formState:{errors} } = useForm();

//     const onSubmit = data => {
//         const url = 'http://localhost:3333/order/send';
//         const requestData = {
//           key1: 'value1',
//           key2: 'value2'
//         };
    
//         axios.post(url, requestData)
//           .then(response => {
//             console.log('Запрос успешно выполнен!');
//             console.log('Ответ сервера:', response.data);
//           })
//           .catch(error => {
//             console.error('Произошла ошибка при выполнении запроса.');
//             console.error('Ошибка:', error.message);
//           });

//       };

  
//     const priceRender = () => {
//         if (products.status === 'resolve') {
//             return data.reduce((prev,item) => {
//                 const product = products.data.find(el => el.id === item.id)
//                 return prev + item.count * product.finalPrice
//             },0).toFixed(2)
//         } else {
//             return 0
//         }
//     }    

//     const changeClass = () => {
//         return errors.phone?.type && data.length ? `${s.phone_number} ${s.reject}` : s.phone_number
//     }
 
//     return (
//         <>
//             {
//                 !data.length
//                 ?
//                 <Link to="/products/all" className={s.btn_shop}>
//                     Shop Now
//                 </Link>
//                 :
//                 <form onSubmit={handleSubmit(onSubmit)} className={s.basket_form}>
//                     <h3 className={s.title}>Order details</h3>
//                     <div className={s.total_blok}>
//                         <p className={s.total_text}>Total</p>
//                         <p className={s.total_sum}>{priceRender()}$</p>
//                     </div>
//                     <div className={s.inputs}>
//                         <input 
//                             className={changeClass()} 
//                             type="tel" 
//                             name="phone" 
//                             {...register("phone", 
//                             )}
//                             placeholder='+49 999 9999999'
//                         />
//                         <input className={s.order_btn} type="submit" value="Order"/>
//                     </div>
//                 </form>
//             } 
//         </>

//     );
// };

// export default OrderForm;