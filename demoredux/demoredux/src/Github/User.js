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
box-shadow : 0 0 8px 8px solid black;

`