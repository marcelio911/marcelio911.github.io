import React, { useEffect, useState } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group'; // ES6
import { Layout } from 'antd';
import { CodeOutlined } from '@ant-design/icons';
import './sidebar.scss';
import harmonic_player from '../../assets/images/harmonic_player.jpg';
import user from '../../assets/images/user.png';
import { Description, Name, SoftSkills, HardSkills, Twitter, CopyRight } from './styles';
import { GithubApi } from '../../interfaces/GithubApi';

const SideBarView: React.FC<GithubApi | undefined> = (props) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [thumbs, setThumbs] = useState([user, harmonic_player]);
    const [thumbsActive, setThumbsActive] = useState(thumbs[0]);

    const [personal, setPersonal] = useState(props);

    const myThumbsProfiles = (
        <li>
            <img src={thumbsActive} className="Sidebar-profile" alt={'profile'} />
        </li>
    );

    useEffect(() => {
        setPersonal(props);
        // eslint-disable-next-line react/prop-types
        const avatar = String(props.avatar_url);
        thumbs.push(avatar);
        setThumbs(thumbs);
    }, [props])

    useEffect(() => {
        setPersonal(JSON.parse(JSON.stringify(props)));
        setInterval(() => {
            const randomIndex = Math.floor(Math.random() * (thumbs.length - 0 + 1)) + 0;
            const randomProfile = thumbs[randomIndex - 1] || thumbs[0];
            if (randomProfile)
                setThumbsActive(randomProfile);
        }, 10000); // the each ten seconds
    }, []);

    return (
        <Layout.Sider className="sidebar">
            <ReactTransitionGroup
                component="ul"
                className="animated-list"
            >
                {myThumbsProfiles}
            </ReactTransitionGroup>

            <Name>{personal.name}</Name>
            <Description className="description">{personal.bio}</Description>
            <SoftSkills className="softSkills">{personal.softSkills}</SoftSkills>
            <HardSkills className="hardSkills">{personal.hardSkills}</HardSkills>
            <CopyRight>
                <CodeOutlined /> createdBy <Twitter className="twitter">{personal.twitter_username}</Twitter>
            </CopyRight>
        </Layout.Sider>
    );
};

export default SideBarView;
