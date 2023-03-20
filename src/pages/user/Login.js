import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../css/login.css';


function Login() {

    // useState 세팅
    const [ enteredId, setEnteredId ] = useState('');
    const [ idValid, setIdValid ] = useState(false);

    const [ enteredPw, setEnteredPw ] = useState('');
    const [ pwValid, setPwValid ] = useState(false); 

    const [ btnIsValid, setBtnIsValid ] = useState(false);

    const navigate = useNavigate();

    const idRef = useRef();
    const pwRef = useRef();

    const onKeyPress = (e) => {
        if( e.key == 'Enter' ) {
            pwRef.current.focus();
        }
    }

    useEffect( () => {
        const idRegExp = /^[A-Za-z0-9]*$/;
        setIdValid(enteredId.length >= 6 && idRegExp.test(enteredId));
    },[enteredId])

    useEffect( () => {
        let state = true;
        const pwRegExp = /^[A-Za-z0-9!@#$%^&*()]*$/;

        if ( !pwRegExp.test(enteredPw) ) {
            state = false;
            setPwValid(state);
            return;
        }

        let num = enteredPw.search(/[0-9]/g);
        let eng = enteredPw.search(/[a-zA-Z]/ig);
        let spe = enteredPw.search(/[!@#$%^&*()]/gi);

        if ( (num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0) ) {
            state = false;
            setPwValid(state);
            return;
        }

        if ( enteredPw.length <8 ) {
            state = false;
            setPwValid(state);
            return;
        }

        setPwValid(state);
    },[enteredPw])


    useEffect(() => {
        if ( enteredId !== '' && enteredPw !== '' ) {
            setBtnIsValid(true);
        } else {
            setBtnIsValid(false);
        }
    },[enteredId, enteredPw])

    const init = () => {
        setEnteredId('');
        setEnteredPw('');
        setIdValid(false);
        setPwValid(false);
        idRef.current.focus();
    }

    const newPasswordTest = () => {
        if ( enteredId === '' || enteredPw === '' ) {
            alert('아이디와 비밀번호를 입력해주세요');
            init();
            return;
        }

        if ( !idValid ) {
            alert('아이디는 영문 또는 숫자 6~10 자리로 입력해주세요');
            init();
            return;
        }

        if ( !pwValid ) {
            alert('비밀번호는 영문, 숫자, 특수문자 중 2가지 이상을 혼합하여 8~16자리로 입력해주세요 ');
            init();
            return;
        }

        navigate('/countup');
       
    }

  return (
    <div className="main">  	
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
            <form>
                <label htmlFor="chk" aria-hidden="true">Sign up</label>
                <input type="text" name="txt" placeholder="User name" required="" />
                <input type="email" name="email" placeholder="Email" required="" />
                <input type="password" name="pswd" placeholder="Password" required="" />
                <button>Sign up</button>
            </form>
        </div>

        <div className="login">
            {/* <form> */}
                <label htmlFor="chk" aria-hidden="true">Login</label>
                <input 
                    type="text"
                    ref={idRef} 
                    name="enteredId" 
                    value = { enteredId }
                    onChange={ (e) => setEnteredId(e.target.value) }
                    maxLength={10}
                    placeholder="아이디입력" 
                />
                <input 
                    type="password" 
                    name="enteredPw" 
                    value = { enteredPw }
                    ref = { pwRef }
                    placeholder="비밀번호입력" 
                    onChange={ (e) => setEnteredPw(e.target.value) }
                    maxLength={16}
                    onKeyPress={onKeyPress}
                />
                {/* <button>Login</button> */}
                {
                    btnIsValid
                        ?
                            <button 
                                className='button button1'
                                onClick={newPasswordTest}
                            >로그인</button>
                        :
                            <button 
                                className='button button2'
                                onClick={() => alert('테스트')}
                            >로그인</button>
                }
            {/* </form> */}
        </div>
	</div>

  )
}

export default Login