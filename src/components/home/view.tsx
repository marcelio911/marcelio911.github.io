import React, { useEffect, useState } from 'react';
import { GithubApi } from '../../interfaces/GithubApi';
import MyGitHubProfileApi from '../../services/MyGitHubProfileApi';
import './home.scss';
import { Home } from './styles';
import TerminalView from '../terminal/view';

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
           {person?.blog && <TerminalView username={String(person?.blog).split('https://')[1]}></TerminalView>}
        </Home>
    )

};
export default HomeView;