import { useContext } from "react"
import styled from "styled-components"
import UserContext from "../contexts/UseContext"
import { Link } from "react-router-dom"


export default function Post({ id, name, profilePicture, image, description }) {

    const { setUser2Data} = useContext(UserContext)

    return(

        <Card>
            <Link onClick={() => {setUser2Data({id})}} to={`/user/${id}`} >
                <Header>
                    <Profile src={profilePicture} ></Profile>
                    {name}
                </Header>
            </Link>
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