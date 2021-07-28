import React from 'react';
import SideBarView from './components/sideBar/view';
import { Layout } from 'antd';
import './styles/scss/app.scss';

const App: React.FC = () => {
    return (
        <Layout className="App">
            <SideBarView 
              nameProfile={"Marcelio de Oliveira Santana"} />
            <div className="App-content">
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </div>
        </Layout>
    );
}

export default App;
