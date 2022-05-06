import Repository, { baseUrl } from './Repository';

class CollectionRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getCollectionItemsBySlug(payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `collections.slug_eq=${item}`;
            } else {
                query = query + `&collections.slug_eq=${item}`;
            }
        });
        const reponse = await Repository.get(`${baseUrl}/posts?${query}`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getCategoriesBySlug(payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `categories.slug_eq=${item}`;
            } else {
                query = query + `&category.slug_eq=${item}`;
            }
        });
        const reponse = await Repository.get(`${baseUrl}/posts?${query}`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductsBySlug(slug) {
        const reponse = await Repository.get(
            `${baseUrl}/collections/slug?=${slug}`
        )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
}

export default new CollectionRepository();
