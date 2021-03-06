export interface GithubApi {
    id?: number | undefined;
    login: string | undefined;    
    avatar_url: string | undefined;
    followers_url: string | undefined;
    following_url: string | undefined;
    subscriptions_url?: string | undefined;
    organizations_url?: string | undefined;
    repos_url?: string | undefined;
    events_url?: string | undefined;
    received_events_url?: string | undefined;
    name: string | undefined;
    company: string | undefined;
    blog?: string | undefined;
    location: string | undefined;
    bio: string | undefined;
    twitter_username: string | undefined;
    created_at: string | undefined;
    updated_at: string | undefined;
    softSkills?: string | undefined;
    hardSkills?: string | undefined;
}