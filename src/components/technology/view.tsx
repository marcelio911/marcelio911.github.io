import React from 'react';
import './technology.scss';
import react from '../../assets/images/technologies/react.svg';
import nodejs from '../../assets/images/technologies/nodejs.png';
import java from '../../assets/images/technologies/java.png';
import mongo from '../../assets/images/technologies/mongo.png';
import springboot from '../../assets/images/technologies/springboot.png';
import reactNative from '../../assets/images/technologies/react-native.png';
import terraform from '../../assets/images/technologies/terraform.svg';
import aws from '../../assets/images/technologies/aws.png';
import firebase from '../../assets/images/technologies/firebase.png';
import { Technologies, TechnologiesTitle } from './styles';

interface Props {
    title: string;
}

const TechnologiesView: React.FC<Props> = (props) => {
    const myTechnologies = [
        { 'Nodejs': nodejs },
        { 'Reactjs': react },
        { 'ReactNative': reactNative},
        { 'Java': java},
        { 'Spring': springboot},
        { 'Terraform': terraform},
        { 'Mongodb': mongo},
        { 'Aws': aws},
        { 'Firebase': firebase},
    ];
    return (
        <Technologies className="technologies">
            {
                // eslint-disable-next-line react/prop-types
                <TechnologiesTitle>{props.title + ':'}</TechnologiesTitle>
            }
            <ul>
                {myTechnologies.map((tech, idx) => (
                    // eslint-disable-next-line react/jsx-key
                    <li key={"techs_" + idx}>
                        <img src={String(Object.values(tech))} alt={String(Object.keys(tech))} />
                    </li>
                ))}
            </ul>
        </Technologies>
    );
};

export default TechnologiesView;
