import logo from '../assets/Logo.png'
import styled from 'styled-components'
import React from "react";
import StyledInput from './StyledInput'
import apiSign from '../apis/apiSign'
import StyledForm from './StyledForm'
import StyledButton from './StyledButton'
import UserContext from '../contexts/UseContext';
import { ThreeDots } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

export default function SignIn() {

    const [onOff, setOnOff] = React.useState(false);
    const [signInData, setSignInData] = React.useState({ email: "", password: ""});
    const navigate = useNavigate();
    const { setUserData } = useContext(UserContext)

    function inputChange(e) {
        setSignInData({ ...signInData, [e.target.name]: e.target.value })
    }

    function submit(e) {

        e.preventDefault()
        setOnOff(true)

        const request = apiSign.signIn(signInData);
            request.then(response => {
                const { id, name, image, token } = response.data
                setOnOff(false)
                setUserData({ id, name, image, token })
                navigate("/home")
            })
            request.catch(err => {
                setOnOff(false)
                alert(err.response.data.message)
            })


    }

    return(

        <Tela>
            <Logo src={logo}/>
            <StyledForm onSubmit={submit}>
                <StyledInput
                    data-test="email-input"
                    placeholder='email'
                    type='email'
                    name='email'
                    value={signInData.email}
                    disabled={onOff}
                    onChange={inputChange}
                    required
                />
                <StyledInput
                    data-test="password-input"
                    placeholder='password'
                    type='password'
                    name='password'
                    value={signInData.password}
                    disabled={onOff}
                    onChange={inputChange}
                    required
                />
                <StyledButton type='submit' disabled={onOff} data-test="login-btn" >
                    {onOff ? (
                        <ThreeDots width={50} height={50} color="#ffffff" />
                    ) : 'Entrar'}
                </StyledButton>
            </StyledForm>
            <Link to={"/cadastro"} data-test="signup-link" >
                Não tem uma conta? Cadastre-se!
            </Link>
        </Tela>

    )

}

const Tela = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 68px;

`

const Logo = styled.img`

    width: 70%;
    margin-bottom: 33px;

`