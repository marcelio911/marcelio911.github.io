import
 styled
from "styled-components";

export const AboutMe = styled.div`
    padding: 0 12vmin;
    text-align: justify;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const FrameAbout = styled.div`
    background: #fbfcfc;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding: 40px;
`;
export const FrameTitle = styled.strong`
    font-size: 32px;
    font-weight: 400;
    padding:  10px;
    color: rgb(25, 25, 25);

`;
export const FrameContent = styled.div`
    padding: 2vmin;
`;
export const Cargo = styled.span`
    margin: 0vmin;
`;
export const Companhia = styled.span`
    margin: 0vmin;
`;
export const Momento = styled.span`
    margin: 0vmin;
`;
export const Entregas = styled.p`
    margin: 1vmin 0 0 0;
    padding: 1vmin;
    border: 1px dotted #000
`;
export const Resumo = styled.p`
    margin: 1vmin 0 0 0;
`;
export const Objetivo = styled.p`
    margin: 1vmin 0 0 0;
`;
export const Techs = styled.i`
    margin: 0;
`;
export const FrameFooter = styled.div`
    position: relative;
    bottom: 0;
    margin: 20px 0;
`;