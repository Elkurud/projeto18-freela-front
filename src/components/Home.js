import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import UserContext from "../contexts/UseContext";
import Frame from "./Frame";
import apiPost from "../apis/apiPost";
import Post from "./Post";

export default function Home() {



    const [posts, setPosts] = useState([])
    const [onOff, setOnOff] = useState(true);

    const { userData } = useContext(UserContext)

    useEffect(postsRequest)

    function postsRequest() {

        apiPost.getPosts(userData.token)
            .then(res => {
                setOnOff(false)
                setPosts(res.data)
            })
            .catch(err => {
                setOnOff(false)
                alert(err.response.data.message)
            })
    }

    return(
        <Frame>

            {onOff ? (
                <ThreeDots height={80} width={80} color={"#126ba5"} />
            ) : (
                posts.length === 0 ? (
                    <Conclusion>
                        Você não tem nenhum post ainda.
                    </Conclusion>
                ) : (
                    posts.map(f => (
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

export const Conclusion = styled.p`

    font-size: 18px;
    line-height: 22px;
    align-self: flex-start;
    margin-bottom: 28px;
    color: #bababa;

`