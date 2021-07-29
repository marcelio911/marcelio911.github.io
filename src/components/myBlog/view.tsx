import React, { useEffect, useState } from 'react';
import './myBlog.scss';
import { MyBlog } from './styles';
import loremIpsum from './loremIpsum';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlToReactParser = require('html-to-react').Parser;

const htmlToReactParser = new HtmlToReactParser();

const MyBlogView: React.FC = () => {
    const [posts, setPosts] = useState<Array<T>>([]);

    useEffect(() => {
        const arr = [
            { title: 'Meu primeiro post', content: loremIpsum, author: 'marcelio911@gmail.com', createdAt: new Date() },
        ];
        setPosts(arr);
    }, []);

    return (
        <MyBlog className="my_blog">
            {posts.map((post, idx) => (
                // eslint-disable-next-line react/jsx-key
                <div className={'post_' + idx}>
                    <h1>{post.title}</h1>
                    {htmlToReactParser.parse(post.content)}
                </div>
            ))}
        </MyBlog>
    );
};
export default MyBlogView;
