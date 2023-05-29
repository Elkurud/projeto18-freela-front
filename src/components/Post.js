import { useContext } from "react"
import styled from "styled-components"
import UserContext from "../contexts/UseContext"
import { Link } from "react-router-dom"
import apiUser from "../apis/apiUser"


export default function Post({ id, name, profilePicture, image, description }) {

    const { userData, setUser2Data} = useContext(UserContext)

    return(

        <Card>
            <Header>
                <Link onClick={() => {setUser2Data({id})}} to={`/user/${id}`} >
                    <Profile src={profilePicture} ></Profile>
                    {name}
                </Link>
                <Follow onClick={() => {apiUser.follow(userData.token, id)}}>Follow</Follow>
             </Header>
            
            <Image src={image}></Image>
            <Description>
                <p><strong>{name}</strong></p>
                {description}
            </Description>
        </Card>

    )
}

const Card = styled.div`

    width: 270px;
    background-color: #ffffff;
    margin-bottom: 10px;
    border-radius: 3px;
    border: solid 1px #dbdbdb;

`

const Header = styled.div`

    height: 42px;
    font-size: 14px;
    color: #262626;
    gap: 15px;
    box-sizing: border-box;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`

const Profile = styled.img`

    height: 32px;
    width: 32px;
    border-radius: 32px;
    border: solid 1px #bdbdbd;

`
const Image = styled.img`

    width: 270px;

`
const Description = styled.div`

    width: 270px;
    font-weight: 200;
    font-size: 14px;
    margin-left: 5px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    gap: 5px;

`

const Follow = styled.button`

    height: 21px;
    width: 50px;
    background-color: #696969;
    border: solid 1px #dbdbdb;
    color: #dbdbdb;
    border-radius: 6px;
    display: flex;
    align-items: center;

`