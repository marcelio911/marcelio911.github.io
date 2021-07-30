import React, { useEffect, useState } from 'react';
import SideBarView from './components/sideBar/view';
import HeaderView from './components/header/view';
import { Layout } from 'antd';
import './styles/scss/app.scss';
import { InternalContent,  } from './styles/styles';
import MyGitHubProfileApi from './services/MyGitHubProfileApi';
import { GithubApi } from './interfaces/GithubApi';
import { HashRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import DrumSetView from './components/drumSet/view';
import HomeView from './components/home/view';
import MyBlogView from './components/myBlog/view';
import AboutMeView from './components/aboutMe/view';

const App: React.FC = () => {
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
        <Layout className="App">
            <SideBarView
                person={person}
            />
            <Layout.Content>
                <Router key="1">
                    <HeaderView />
                </Router>
                <InternalContent id="container" className="App-content">
                    <Router key="2">
                        <Switch>
                            <Route path="/apps" component={DrumSetView} />
                            <Route path="/myBlog" component={MyBlogView} />
                            <Route path="/aboutMe" component={AboutMeView} />
                            <Route path="/" component={HomeView} />
                        </Switch>
                    </Router>
                </InternalContent>
            </Layout.Content>
        </Layout>
    );
};

export default App;
