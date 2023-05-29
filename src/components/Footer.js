import { Link } from "react-router-dom"
import styled from 'styled-components';
import { AiOutlineHome, AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai'
import { MdGroups2 } from 'react-icons/md'

export default function Footer() {



    return(
      <Container3>

      <Links to="/search" ><AiOutlineSearch/></Links>
                
      <Links to="/home" > <AiOutlineHome /> </Links>

      <Links to="/addPost" > <AiOutlinePlus /> </Links>

      <Links to="/followers" ><MdGroups2/></Links>

      </Container3>

    )

}


const Container3 = styled.div`

  width: 375px;
  height: 50px;
  position: fixed;
  bottom: 0px;
  background: #696969;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.15);

`

const Links = styled(Link)`

  font-size: 30px;
  line-height: 22px;
  color: #ffffff;
  margin: 0px 31px;
  text-decoration: none;

`