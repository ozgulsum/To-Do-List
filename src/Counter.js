import './App.css';
import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0);
    const increment = () => { 
        if (count == 10) {
        alert("Daha fazla değer eklenemez")
   
           }
           else {
               setCount(count + 1);
           };
    };
    
       
    
    const decrement = () =>{
    if (count == 0) {
     alert("Daha fazla değer düşülemez")

        }
        else {
            setCount(count - 1);
        };

    }
    return (
        <div className='container mt-4'>
            <div>    {count}
            </div>

            <div className='container mt-4'>
            </div>


            <div className='row'>
                <div className='col-6 text-end'>
                    <button className="btn btn-info" onClick={increment}>Arttır</button>

                </div>
                <div className='col-6 text-start'>
                    <button className="btn btn-danger" onClick={decrement}>Azalt</button>
                </div>

            </div>
        </div>


    )

}
export default Counter;


