import React, { useEffect, useState } from 'react';
import SideBarView from './components/sideBar/view';
import HeaderView from './components/header/view';
import './styles/scss/app.scss';
import { InternalContent, UmaQualquer, OutraQualquer, AppMenu } from './styles/styles';
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
        <div className="App">
            <UmaQualquer>
                <AppMenu className="App_menu">
                    <Router key="1">
                        <HeaderView />
                    </Router>
                </AppMenu>
                <OutraQualquer>
                    <SideBarView person={person} />
                    <InternalContent id="container" className="App-content">
                        <Router key="2">
                            <Switch>
                                <Route key="3" path="/apps" component={DrumSetView} />
                                <Route key="4" path="/myBlog" component={MyBlogView} />
                                <Route key="5" path="/aboutMe" component={AboutMeView} />
                                <Route key="6" path="/" component={HomeView} />
                            </Switch>
                        </Router>
                    </InternalContent>
                </OutraQualquer>
            </UmaQualquer>
        </div>
    );
};

export default App;
