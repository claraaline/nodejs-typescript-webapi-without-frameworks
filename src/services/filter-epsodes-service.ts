import { IncomingMessage, request } from "http";
import { repositoryPodcasts } from "../repositories/podcasts-repository";

export const serviceFilterEpisodes = async (podcastName: string  | undefined ) => {
     const queryString = podcastName?.split("?p") [1] ?? "";

    const data = await repositoryPodcasts(queryString);    
    
    return data;

};