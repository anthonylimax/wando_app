import styled from 'styled-components'

export const Section= styled.section`
    display: flex;
    min-height: 100vh;
    height: auto;
`
export const NoticePage = styled.section`
    position: absolute;
    width: 100%;
    padding: 40px;
    display: flex;
    
    .filter{
        margin-top: 100px;
    }
    .genericGrid{
        img{
            width: 66px;
        }
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        span{
            color: white;
        }
        font-size: 40px;
    }
    top: 0;
    align-items: center;
    flex-direction: column;
    z-index: 30;
    background-color: #202020;
    min-height: 100vh;
    height: auto;
`
export const Main = styled.div`
    width: 100%;
    background-color: black;
    height: 100vh;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-image: url("./mainPhoto.png");
    background-size: cover;
    .arrow{
        position: absolute;
        bottom: 0;
        animation: animationInfinite 1s infinite;
        @keyframes animationInfinite {
         0%{
            margin-bottom: 50px;
         }   
         50%{
            transform: scale(0.8);
            margin-bottom: 0;
         }
         100%{
            margin-bottom: 50px;
         }
        }
    }
`
export const Notice = styled.div`
    display: flex;
    width: 70%;
    flex-direction: row;
    margin-top: 40px;
    gap: 20px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    img{
        border-radius: 15px;
        width: 100%;
        max-width: 450px;
    }
`
export const ButtonNotice = styled.button`
    cursor: pointer;
    background-color: #FF7878;
    max-width: 534px;
    border-radius: 23px;
    width: 60vw;
    color: white;
    margin-top: 100px;
    border: none;
    font-size: 32px;
    height: 94px;
`
export const NoticeWhite = styled.div`
    display: flex;
    width: 60%;
    flex-direction: row;
    margin-top: 40px;
    gap: 20px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    color: white;
    img{
        width: 100%;
        max-width: 470px;
    }
`
export const Button = styled.button`
    border-radius: 25px;
    width: 60vw;
    max-width: 453px;
    height: 104px;
    font-size: clamp(20px, 10vw, 40px);
    font-weight: 600;
    color: white;
    border: none;
    text-align: center;
    background-color: #FBD85D;
`
export const Menu = styled.img`
    position: absolute;
    height: 80px;
    top: 10vh;
    left: 10vw;
`