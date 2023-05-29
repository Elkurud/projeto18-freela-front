import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../contexts/UseContext";
import apiPost from "../apis/apiPost";
import Frame from "./Frame";
import { Conclusion } from "./Home";
import Post from "./Post";
import { ProfileCard } from "./Profile";

export default function User() {
    const { id } = useParams()

    const { userData } = useContext(UserContext)

    const [userInfo, setUserInfo] = useState([])
    const [onOff, setOnOff] = useState(true);

    useEffect((postByIdRequest))

    function postByIdRequest() {

        apiPost.getPostById(userData.token, id)
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
                    <img src={userInfo[0].profilePicture} alt="" />
                    <p>{userInfo[0].name}</p>
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