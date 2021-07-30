import React, { useEffect, useState } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group'; // ES6
import { Layout } from 'antd';
import { CodeOutlined, CompassOutlined } from '@ant-design/icons';
import './sidebar.scss';
import harmonic_player from '../../assets/images/harmonic_player.jpg';
import { Description, 
    Location, 
    Name, 
    SoftSkills, 
    HardSkills, 
    Twitter, 
    CopyRight, 
    SidebarContent 
} from './styles';
import { GithubApi } from '../../interfaces/GithubApi';

interface Props {
    person?: GithubApi;
}
const SideBarView: React.FC<Props> = (props) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [thumbs, setThumbs] = useState([harmonic_player]);
    const [thumbsActive, setThumbsActive] = useState<string | undefined>(thumbs[thumbs.length - 1]);

    const [personal, setPersonal] = useState<GithubApi | undefined>(undefined);

    const myThumbsProfiles = thumbsActive !== undefined && (
        <li>
            <img src={thumbsActive} className="Sidebar-profile" alt={'profile: ' + thumbsActive} />
        </li>
    );

    useEffect(() => {
        // eslint-disable-next-line react/prop-types
        if (props.person) {
            // eslint-disable-next-line react/prop-types
            setPersonal(JSON.parse(JSON.stringify(props.person)));
            // eslint-disable-next-line react/prop-types
            const avatar = String(props.person?.avatar_url);
            thumbs.push(avatar);
            setThumbs(thumbs);
        }
    }, [props]);

    useEffect(() => {
        setPersonal(JSON.parse(JSON.stringify(props)));
        setInterval(() => {
            setThumbsActive(undefined);
            const randomIndex = Math.floor(Math.random() * (thumbs.length - 0 + 1)) + 0;
            const randomProfile = thumbs[randomIndex - 1] || thumbs[0];

            if (randomProfile !== undefined) {
                console.log('randomProfile::typeof ', typeof randomProfile);
                console.log('randomProfile:: ', randomProfile);
                setThumbsActive(randomProfile);
            }
        }, 10000); // the each ten seconds
    }, []);

    return (
        <Layout.Sider className="sidebar">
            <SidebarContent>
                <ReactTransitionGroup component="ul" className="animated-list">
                    {myThumbsProfiles}
                </ReactTransitionGroup>

                <Name>{personal?.name}</Name>
                <Description className="description">{personal?.bio}</Description>
                <CompassOutlined /> <strong>Por ordem cronológica:</strong>
                <Location className="location">
                    {personal?.location}
                </Location>
                <SoftSkills className="softSkills">{personal?.softSkills}</SoftSkills>
                <HardSkills className="hardSkills">{personal?.hardSkills}</HardSkills>
            </SidebarContent>
            <CopyRight>
                <CodeOutlined /> createdBy: <Twitter className="twitter">{personal?.login}</Twitter>
            </CopyRight>
        </Layout.Sider>
    );
};

export default SideBarView;
