import Repository, { baseUrl } from './Repository';
import { convertSlugsQueryString } from '../utilities/product-helper';

class MediaRespository {
    constructor(callback) {
        this.callback = callback;
    }

    async getInstagramById() {
        const reponse = await Repository.get(`${baseUrl}/instagrams/1`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }


    async getPromotionsBySlugs(payload) {
        const query = convertSlugsQueryString(payload);
        const reponse = await Repository.get(`${baseUrl}/promotions?${query}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({
                error: JSON.stringify(error),
            }));
        return reponse;
    }
}

export default new MediaRespository();
