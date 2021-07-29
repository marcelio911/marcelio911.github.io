import React, { useEffect, useState } from 'react';
import SideBarView from './components/sideBar/view';
import TechnologiesView from './components/technology/view';
import HeaderView from './components/header/view';
import { Layout } from 'antd';
import './styles/scss/app.scss';
import { InternalContent } from './styles/styles';
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
                id={person?.id}
                name={person?.name}
                login={person?.login}
                avatar_url={person?.avatar_url}
                bio={person?.bio}
                followers_url={person?.followers_url}
                company={person?.company}
                created_at={person?.created_at}
                updated_at={person?.updated_at}
                following_url={person?.following_url}
                twitter_username={person?.twitter_username}
                location={person?.location}
            />
            <Layout.Content>
                <Router>
                    <HeaderView />
                </Router>
                <InternalContent id="container" className="App-content">
                    <Router>
                        <Switch>
                            <Route path="/apps" component={DrumSetView} />
                            <Route path="/myBlog" component={MyBlogView} />
                            <Route path="/aboutMe" component={AboutMeView} />
                            <Route path="/" component={HomeView} />
                        </Switch>
                    </Router>
                    <TechnologiesView></TechnologiesView>
                </InternalContent>
            </Layout.Content>
        </Layout>
    );
};

export default App;
