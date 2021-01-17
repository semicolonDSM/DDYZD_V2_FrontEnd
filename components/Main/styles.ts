import styled from "styled-components"
export const FeedList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    & li{
        border-radius: 20px;
        background: white;
        max-width: 580px;
        box-shadow: 0px 5px 5px #00000029;
        border: 1px solid #C8C8C8;
        margin-bottom: 35px;
    }
`
export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 25px;
    padding-bottom: 0;
    margin-bottom: 10px;
    & img{
        width: 50px;
        height: 50px;
        border: 1px solid #C8C8C8;
        border-radius: 50%;
    }
`
export const CardHeaderContent = styled.div`
    margin-left: 15px;
    width: 100%;
    font-size: 16px;
`
export const CreatedAt = styled.div`
    font-size: 14px;
    color: #A4A4A4;
`
export const CardSection = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;

`
export const CardBottom = styled.div`
    padding: 20px 25px;
    padding-top: 0;
`
export const Content = styled.div`
    padding: 0 25px;
    margin-bottom: 10px;
`
export const Slider = styled.div`
    width: 100%;
    overflow: hidden;
    overflow-y: hidden;
    position: relative;
    height: 0;
    padding-bottom: 100%;
    & button{
        position: absolute;
        top: 50%;
        outline: none;
        background: none;
        border: none;
        transform: translateY(-50%);
        cursor: pointer;
    }
`
export const SliderImages = styled.div`
    display: flex;
    width: 100%;
    transition: 0.3s;
    height: 0px;
    padding-bottom: 100%;
    & img{
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        object-fit: cover;
        -webkit-user-drag: none;
    }
 `
export const Prev = styled.button`
    left: 0;
 `
export const Next = styled.button`
    right: 0;
`
export const SliderState = styled.div`
    display: flex;
    position: relative;
    bottom: 0px;
    justify-content: center;
`
export const StateButton = styled.div`
    width: 7px;
    height: 7px;
    margin-right: 4px;
    background: #A4A4A4;
    border-radius: 50%;
`
export const CardUtil = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    & svg{
        cursor: pointer;
    }
`
export const CardState = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    font-weight: bold;
    margin-top: 5px;
`