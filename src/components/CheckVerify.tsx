import React from "react";
import Button from "./Button";
import GreyContainerBox from "./GreyContainerBox";
import CenteredContainer from "./CenteredContainer";
import {Title} from "./Titles";
import Form from "./Form";
import { api } from "./../api";
import PollingTool from "./../utils/pollingTool";
import makeGetRequest from "./../helpers/makeGetRequest";
import { store } from "./../redux/store";

const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) =>{
    api.emailVerify;
}
const getStateData = () => {
    const state = store.getState();
    const field = state.user.emailVerified;

    if (field)
    return true;
else
return false;
}

function BlockUnverifiedUser(){
    const checkEmailStatus = new PollingTool(makeGetRequest, 5, getStateData);
    checkEmailStatus.start();
    
    return <CenteredContainer>
    <GreyContainerBox>
        <Form onSubmit={handleSubmit}>
        <Title>An email was sent to your email. Please, check your email box</Title>
        <Button>Send one more</Button>
        </Form>
    </GreyContainerBox>
</CenteredContainer>
}
export default BlockUnverifiedUser;