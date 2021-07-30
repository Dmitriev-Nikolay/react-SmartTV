import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Order = () => {
    const [isSuccessSendForm, setIsSuccessSendForm] = React.useState(false);
    const [checkedPersonalData, setCheckedPersonalData] = React.useState(false);
    const [valuePhoneNumber, setValuePhoneNumber] = React.useState('');

    const handleChangeCheckbox = (e) => {
        setCheckedPersonalData(e.target.checked);
    };

    const sendForm = () => {
        setIsSuccessSendForm(true);
    };

    const phoneNumberInput = (e) => {
        if (valuePhoneNumber.length < 11) {
            setValuePhoneNumber(valuePhoneNumber + e.target.value);
        } else {
            return;
        };
    };

    const backspaceKeyboard = () => {
        let copyValuePhoneNumber = valuePhoneNumber;
        copyValuePhoneNumber = copyValuePhoneNumber.substring(0, valuePhoneNumber.length - 1);
        setValuePhoneNumber(copyValuePhoneNumber);
    };

    return (
        <div className="content">
            <div className="container">
                <div className="order-block">
                    {
                        !isSuccessSendForm ?
                            <>
                                <div className="order-block__mobile-input">
                                    <h2 className="order-title">Введите ваш номер мобильного телефона</h2>
                                    {/* <span className="mobile-input">+7(___)___-__-__</span> */}
                                    <span className="mobile-input">{ valuePhoneNumber }</span>
                                    {/* <input
                                        className="mobile-input"
                                        type="phone"
                                        title="(000) 000-00-00"
                                        data-mask="+7 (000) 000-00-00"
                                        value={valuePhoneNumber}
                                        pattern="\\+7 ([0-9]{3}\) [0-9]{3}[\-][0-9]{2}[\-][0-9]{2}"
                                        placeholder={"+7(___)___-__-__"}
                                        onChange={phoneNumberInput}
                                    /> */}
                                    <p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
                                </div>
                                <div className="order-block__keyboard-input">
                                    <ul>
                                        <div className="row row-1">
                                            <li value="1" onClick={ phoneNumberInput }>1</li>
                                            <li value="2" onClick={ phoneNumberInput }>2</li>
                                            <li value="3" onClick={ phoneNumberInput }>3</li>
                                        </div>
                                        <div className="row row-2">
                                            <li value="4" onClick={ phoneNumberInput }>4</li>
                                            <li value="5" onClick={ phoneNumberInput }>5</li>
                                            <li value="6" onClick={ phoneNumberInput }>6</li>
                                        </div>
                                        <div className="row row-3">
                                            <li value="7" onClick={ phoneNumberInput }>7</li>
                                            <li value="8" onClick={ phoneNumberInput }>8</li>
                                            <li value="9" onClick={ phoneNumberInput }>9</li>
                                        </div>
                                        <div className="row row-4">
                                            <li onClick={ backspaceKeyboard }>Стереть</li>
                                            <li value="0" onClick={ phoneNumberInput }>0</li>
                                        </div>
                                    </ul>
                                </div>
                                <label className="order-block__personal-data" htmlFor="personal">
                                    <input onChange={ handleChangeCheckbox } type="checkbox" id="personal" />
                                    <span className="custom-checkbox"></span>
                                    <p>Согласие на обработку персональных данных</p>
                                </label>
                                <button className={ classNames({
                                    "confirm-number disabled": !checkedPersonalData,
                                    "confirm-number": checkedPersonalData,
                                })
                                }
                                    onClick={ sendForm }>
                                    Подтвердить номер
                                </button>
                            </>
                            :
                            <div className="order-block__application-accepted">
                                <h2>Заявка<br />принята</h2>
                                <p>Держите телефон под рукой.<br />Скоро с Вами свяжется наш менеджер.</p>
                            </div>
                    }
                </div>
                <Link to="/">
                    <button className="close-order">X</button>
                </Link>
            </div>
        </div>
    );
};

export default Order;