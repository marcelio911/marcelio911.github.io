import React from 'react';
import TechnologiesView from '../technology/view';
import './aboutMe.scss';
import { 
    AboutMe,
    FrameAbout,
    FrameTitle,
    FrameContent,
    FrameFooter
 } from './styles';
 // eslint-disable-next-line @typescript-eslint/no-var-requires
 const HtmlToReactParser = require('html-to-react').Parser;
 const htmlToReactParser = new HtmlToReactParser();


const AboutMeView: React.FC = () => {

    const symbols = '>_';
    const aboutMe = {
        mundoDaProgramacao: `Eu tinha 18 anos quando fui apresentado ao mundo da programação o ano era 2006, a linguagem era JAVA 
            e a IDE que eu utilizava era Eclipse, minha máquina possuia 256MB de memória RAM e mal conseguia  
            abrir a ferramenta de desenvolvimento, <strong>"muita água já passou por baixo da ponte"</strong>, 
            porém estou sempre dedicado a aprender e ensinar novas tecnologias, novas ferramentas, ou até mesmo mudar de paradigmas.`,
        
        techs: `#CSS3 #Flexbox #Styled-components #Ionic #Firebase #Springboot #RestFulApi #ServerlessFunctions #VPC #Redux 
            #Sagas #PWA #PostgreSQL #MySQL #MongoDb #Docker #Kubernets #Jest #AWS `,

    }
    return (
        <AboutMe className={'aboutMe'}>
            <FrameAbout>
                <FrameTitle> {symbols + ' mundoDaProgramação'}</FrameTitle>    
                <FrameContent>
                {htmlToReactParser.parse(aboutMe.mundoDaProgramacao)}                    
                </FrameContent>
            </FrameAbout>
            
            <FrameAbout>
                <FrameTitle> {'@skills'}</FrameTitle>    
                <FrameContent>
                    <TechnologiesView title="_principais"></TechnologiesView>
                    <FrameFooter>
                        <div><strong>_outras tecnologias:</strong></div>
                        {htmlToReactParser.parse(aboutMe.techs)}
                    </FrameFooter>
                </FrameContent>
            </FrameAbout>

            <FrameAbout>
                <FrameTitle> {symbols + ' experiências'}</FrameTitle>    
                <FrameContent>
                ...                    
                </FrameContent>
            </FrameAbout>

            <FrameAbout>
                <FrameTitle> {symbols + ' educação'}</FrameTitle>    
                <FrameContent>
                ...
                </FrameContent>
            </FrameAbout>

            <FrameAbout>
                <FrameTitle> {symbols + ' interesses'}</FrameTitle>    
                <FrameContent>
                ...
                </FrameContent>
            </FrameAbout>
        </AboutMe>
    )

};
export default AboutMeView;