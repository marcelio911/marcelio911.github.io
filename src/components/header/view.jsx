import React from 'react';
import './header.scss';
import { Layout } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { Breadcrumb } from 'antd';

const HeaderView: React.FC = withRouter(() => {
    const menuOptions = { '/home': 'Home', '/myBlog': 'myBlog', '/apps': 'myBand', '/aboutMe': 'About me' };

    return (
        <Layout.Header>
            <div key="menu" className="menu">
                <Breadcrumb.Item className="menu-nav">
                    {Object.keys(menuOptions).map((item) => (
                        // eslint-disable-next-line react/jsx-key
                        <Link to={item}>{item}</Link>
                    ))}
                </Breadcrumb.Item>
            </div>
        </Layout.Header>
    );
});

export default HeaderView;
