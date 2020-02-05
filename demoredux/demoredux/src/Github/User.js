import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const User = ({avatar_url,login})=>{

    return(
        <Link to={`/users/${login}`}>
         <Poster src={avatar_url} />
        </Link>
    )
}
export default User

export const Poster = styled.img`
width : 200px;
height : 250px;
box-shadow : 14px 20px 20px 0px black;
`