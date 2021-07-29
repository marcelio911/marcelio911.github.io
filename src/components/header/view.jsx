import React from 'react';
import './header.scss';
import { Layout, Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { Breadcrumb } from 'antd';

const HeaderView: React.FC = withRouter((props) => {
    const { location } = props;
    const pathSnippets = location.pathname.split('/').filter((i) => i);
    const menuOptions = { '/home': 'Home', '/myBlog': 'myBlog', '/apps': 'myBand', '/aboutMe': 'About me' };

    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{menuOptions[url]}</Link>
            </Breadcrumb.Item>
        );
    });

    const breadcrumbItems = [
        <Breadcrumb.Item key="home">
            <Link to="/home">Home</Link>
        </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);

    return (
        <Layout.Header>
            <Menu className="menu">
                <Breadcrumb.Item className="menu-nav">
                    {Object.keys(menuOptions).map((item) => (
                        // eslint-disable-next-line react/jsx-key
                        <Link to={item}>{item}</Link>
                    ))}
                </Breadcrumb.Item>
                <Breadcrumb>{breadcrumbItems}</Breadcrumb>               
            </Menu>
        </Layout.Header>
    );
});

export default HeaderView;
