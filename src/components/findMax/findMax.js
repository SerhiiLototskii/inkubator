import React from 'react';
import s from '../GoogleInput/Google.module.css'

let list = [2, 10, 77, 4, 1, 90, 667, 45, 25]

function maxMin (Array) {

    var max = Array[0];
    for (var k = 1; k < Array.length; k++) {
        if (Array[k] > max) {
            max = Array[k];
        }
    }
    alert("Max is: " + max);

}

const findMax = (props) => {
    return (
        <div >
            <button className={s.button} onClick={maxMin(list)}>Max and min</button>
        </div>
    )
}

export default findMax;