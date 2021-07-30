import React, { useEffect, useState } from 'react';
import { GithubApi } from '../../interfaces/GithubApi';
import MyGitHubProfileApi from '../../services/MyGitHubProfileApi';
import './home.scss';
import { 
    Home, 
    HomeTitle, 
    LinuxLover, 
    LinuxForever,
     } from './styles';
import TerminalView from '../terminal/view';
import TechnologiesView from '../../components/technology/view';
import linuxLover from '../../assets/images/linux_lover.png';
import { Layout } from 'antd';

const HomeView: React.FC = () => {
    const [person, setPerson] = useState<GithubApi | undefined>(undefined);
    const username = 'marcelio911';

    const callGithubApi = async () => {
        try {
            const response = await MyGitHubProfileApi(username);
            setPerson(response);
        } catch (err) {
            console.log('err', err);
        }
    };
    useEffect(() => {
        callGithubApi();
    }, []);

    return (
        <Home className='myHome'>
            <HomeTitle className="home_title">
            ATENÇÃO: LINUX<LinuxLover>❤️</LinuxLover> terminal forever! 
            </HomeTitle>
           {person?.blog && <TerminalView username={String(person?.blog).split('https://')[1]}></TerminalView>}

           PS.: Estou usando uma API aberta do github para fornecer os dados desta página, se alguém tiver interessado em customizar seu perfil github.io também baixa o projeto e muda o nome do `username` na chamada da API e vua-lá.
           <Layout.Footer className="footer">
                <TechnologiesView title="@skills"></TechnologiesView>
                <LinuxForever>
                    <img src={linuxLover} width="20%" alt="Linux love forever!" />
                </LinuxForever>
            </Layout.Footer>
        </Home>
        
    )

};
export default HomeView;