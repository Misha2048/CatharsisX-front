import { css } from "@linaria/core";
import React from "react";

const SearchFieldStyle = css`
    color:#fff;
    opacity:0.5;
    padding: 5px 20px;
    max-width:170px;
    min-width:100px;
    gap: 15px;
    border-radius: 15px;
    background: #333;

    &:placeholder{
        color:#fff;
        opacity:0.5;
    }


`


function SearchField(){
    return(
        <input className={SearchFieldStyle}type="text" placeholder="Search"/>
    )
}

export default SearchField;