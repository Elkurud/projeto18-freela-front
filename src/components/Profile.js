import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../contexts/UseContext";
import apiPost from "../apis/apiPost";
import Frame from "./Frame";
import styled from "styled-components"
import { Conclusion } from "./Home";
import Post from "./Post";


export default function Profile() {

    const { userData } = useContext(UserContext)

    const [userInfo, setUserInfo] = useState([])
    const [onOff, setOnOff] = useState(true);

    useEffect((postByIdRequest))

    function postByIdRequest() {

        apiPost.getPostById(userData.token, userData.id)
        .then(res => {
            setUserInfo(res.data)
            setOnOff(false)
        })
        .catch(err => {
            setOnOff(false)
            alert(err.response.data.message)
        })
    }

    return (
        <Frame>

                <ProfileCard>
                    <img src={userData.image} alt="" />
                    <p>{userData.name}</p>
                </ProfileCard>

            {onOff ? (
                <ThreeDots height={80} width={80} color={"#126ba5"} />
            ) : (


                userInfo.length === 0 ? (
                    <Conclusion>
                        Você não tem nenhum post ainda.
                    </Conclusion>
                ) : (
                    userInfo.map(f => (
                        <Post
                            id={f.id}
                            name={f.name}
                            profilePicture={f.profilePicture}
                            image={f.image}
                            description={f.description}
                        />
                    ))
                )
            )}

        </Frame>
    )

}

export const ProfileCard = styled.div`

    width: 270px;
    border: solid 1px #dbdbdb;
    border-radius: 3px;
    height: 130px;
    display: flex;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
    padding: 15px;
    background-color: #ffffff;
    margin-bottom: 20px;

    img {
        height: 70px;
        width: 70px;
        border-radius: 70px;

    }

    p {
        font-size: 30px;
    }


`