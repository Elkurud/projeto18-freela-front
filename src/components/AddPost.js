import StyledForm from './StyledForm'
import StyledInput from './StyledInput'
import StyledButton from './StyledButton'
import Frame from './Frame'
import apiPost from '../apis/apiPost';
import { useContext } from 'react';
import UserContext from '../contexts/UseContext';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

export default function AddPost() {

    const [onOff, setOnOff] = React.useState(false);
    const [postData, setPostData] = React.useState({ image: "", description: ""});
    const { userData } = useContext(UserContext)
    const navigate = useNavigate();

    function inputChange(e) {
        setPostData({ ...postData, [e.target.name]: e.target.value })
    }

    function submit(e) {

        e.preventDefault()
        setOnOff(true)

        apiPost.addPost(userData.token, postData)
            .then(response => {
                setOnOff(false)
                navigate("/home")
            })
            .catch(err => {
                setOnOff(false)
                alert(err.response.data.message)
            })

    }

    return(
        <Frame>
            <StyledForm onSubmit={submit}>
                <StyledInput
                    placeholder='image URL'
                    type='text'
                    name='image'
                    value={postData.image}
                    disabled={onOff}
                    onChange={inputChange}
                    required
                />
                <StyledInput
                    placeholder='description'
                    type='text'
                    name='description'
                    value={postData.description}
                    disabled={onOff}
                    onChange={inputChange}
                    required
                />
                <StyledButton type='submit' disabled={onOff} data-test="signup-btn" >
                    {onOff ? (
                        <ThreeDots width={50} height={50} color="#ffffff" />
                    ) : 'Post'}
                </StyledButton>
            </StyledForm>
        </Frame>
    )

}