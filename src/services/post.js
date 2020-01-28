import { axios4tech } from './config';

export const getPosts = async (page = 0) => {
    return await axios4tech.get(`user-activity/${page}`);
};