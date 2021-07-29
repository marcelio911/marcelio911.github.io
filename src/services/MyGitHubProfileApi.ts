import axios, { AxiosResponse } from 'axios';
import { GithubApi } from '../interfaces/GithubApi';

const MyGitHubProfileApi = async (username: string): Promise<GithubApi> => {
    
    try {
        const urlProfile = `https://api.github.com/users/${username}`;
        const responseHttp: AxiosResponse = await axios.get(urlProfile);
        const converteObject: GithubApi = responseHttp.data;
        return converteObject;
    } catch (err) {
        console.error('Error::When call api github:: ', err);
        throw err;
    }
}

export default MyGitHubProfileApi;
