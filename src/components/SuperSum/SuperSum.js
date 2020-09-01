import React from 'react';
import s from './Google.module.css'
import {Field, reduxForm} from "redux-form";


let objects = [
    {id: 1, name: "Nasa", age: "15"},
    {id: 2, name: "Facebook", age: "21"},
    {id: 3, name: "Google", age: "10"},
    {id: 4, name: "Amazon", age: "5"},
]


let resultSearch = (values) => {
    if (values.searchText == 'google') {
        alert('Yandex круче. Но это не точно',);
        let obj = objects.find(item => item.id == 1);
        alert(obj.name)
    } else {
        alert(values.searchText);
        let obj = objects.find(item => item.id == 1);
        alert(obj.name)
    }

}

const Google = (props) => {
    return <div className={s.goog}>
        <div className={s.kart}>
            <img width={450} src='https://www.itexpromo.ru/upload/iblock/751/751c58b3268b898387c7453510cb6bf3.png'/>
        </div>
        <SearchFormRedux onSubmit={resultSearch}/>
    </div>
}

const SearchForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={s.inpu} component={"input"} name="searchText"
                       placeholder={"Введите поисковый запрос или URL"}/>
                {/*<input className={s.inpu} type="text" placeholder={"Введите поисковый запрос или URL"}/>*/}
            </div>
            <div>
                <button className={s.button}>Найти</button>
            </div>
            <div>
                <input type="text" id={1} placeholder={'Число 1'}/>
                <input type="text" id={2} placeholder={'Число 2'}/>
                <button>Сложить</button>
            </div>
        </form>
)
}

const SearchFormRedux = reduxForm ({form: "searchTextForm"}) (SearchForm);

export default Google;