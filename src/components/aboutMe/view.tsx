import React from 'react';
import TechnologiesView from '../technology/view';
import './aboutMe.scss';
import { 
    AboutMe,
    Cargo,
    Companhia,
    Momento,
    Entregas,
    Resumo,
    Objetivo,
    FrameAbout,
    FrameTitle,
    FrameContent,
    FrameFooter,
    Techs,
 } from './styles';
 // eslint-disable-next-line @typescript-eslint/no-var-requires
 const HtmlToReactParser = require('html-to-react').Parser;
 const htmlToReactParser = new HtmlToReactParser();


const AboutMeView: React.FC = () => {

    const symbols = '>_';
    const aboutMe = {
        mundoDaProgramacao: `Eu tinha 18 anos quando fui apresentado ao mundo da programação o ano era 2006, a linguagem era JAVA 
            e a IDE que eu utilizava era o Eclipse, minha máquina possuia 256MB de memória RAM e mal conseguia  
            abrir a ferramenta de desenvolvimento, <strong>"muita água já passou por baixo dessa ponte"</strong>, durante esse tempo
            tive oportunidade em participar de vários tipos de projetos. Estou sempre estudando, e continuo usando JAVA no desenvolvimento
            de MicroServices, mas venho me especializando e nos últimos 4,5 anos estou focado na stack JAVASCRIPT como minha linguagem principal, 
            usei muito Angular no frontend, e há pouco mais de 2 anos venho me especializando em React e finalmente estou usando Nodejs.`,
        
        techs: `#CSS3 #Flexbox #Styled-components #Ionic #Firebase #Springboot #RestFulApi #ServerlessFunctions #Redux 
            #Sagas #Jest #PWA #PostgreSQL #MySQL #MongoDb #Docker #Kubernets #VPC #SecurityGroups #AWS `,

    }
    return (
        <AboutMe className={'aboutMe'}>
            <FrameAbout key="FrameAbout_1">
                <FrameTitle> {symbols + ' mundoDaProgramação'}</FrameTitle>    
                <FrameContent>
                {htmlToReactParser.parse(aboutMe.mundoDaProgramacao)}                    
                </FrameContent>
            </FrameAbout>
            
            <FrameAbout key="FrameAbout_2"t>
                <FrameTitle> {'@skills'}</FrameTitle>    
                <FrameContent>
                    <TechnologiesView title="_principais"></TechnologiesView>
                    <FrameFooter>
                        <div><strong>_outras tecnologias:</strong></div>
                        {htmlToReactParser.parse(aboutMe.techs)}
                    </FrameFooter>
                </FrameContent>
            </FrameAbout>

            <FrameAbout key="FrameAbout3">
                <FrameTitle key="title3"> {symbols + ' experiências'}</FrameTitle>    
                <FrameContent key="content3">
                    <Cargo key="cargo3" className="cargo">Desenvolvedor Fullstack Java/Javascript</Cargo>
                    <div key={"break_"} className="break"></div>
                    <Companhia className="companhia">Lojas Riachuelo S/A</Companhia>
                    <div key={"break_1"} className="break"></div>
                    <Momento className="momento">agosto/2019 - (até o momento)</Momento>
                    <div key={"break_2"} className="break"></div>
                    <Entregas>
                        <Resumo>
                            <strong>Entrega: </strong>
                            Desenvolvimento do app Ponto de Venda (PDV) para ANDROID. 2019/2020
                        </Resumo>
                        <Objetivo>
                            <strong>Objetivo: </strong>
                            Melhorar a experiência de compra do cliente
                        </Objetivo>
                        <div>
                            <strong>Tecnologias utilizados neste projeto:</strong>
                            <Techs>
                                #ReactNative #Springboot #Restful #Serverless #SOAP #Jenkins #Kibana #Kafka
                            </Techs>
                        </div>                      
                    </Entregas>
                    <Entregas>
                        <Resumo>
                            <strong>Entrega: </strong>
                            Desenvolvimento do novo app Ponto de Venda (PDV Omni) para ANDROID/Desktop. 2020/2021
                        </Resumo>
                        <Objetivo>
                            <strong>Objetivo: </strong>
                            Melhorar a usabilidade do APP anterior e disponibilizar uma versão DESKTOP,
                            adequada a nova realidade Omnichanel da companhia
                        </Objetivo>
                        <div>
                            <strong>Tecnologias utilizados neste projeto:</strong>
                            <Techs>
                                #ReactNativeWeb #Reactjs #Styled-components #Restful #NodeJs #RealmDb #Serverless #Springboot #AzureDevOps #Kibana #Kafka
                            </Techs>
                        </div>                      
                    </Entregas>
                </FrameContent>
            </FrameAbout>

            <FrameAbout key="FrameAbout_3">
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