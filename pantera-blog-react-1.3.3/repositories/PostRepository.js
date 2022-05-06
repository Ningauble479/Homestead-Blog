import Repository, { baseUrl, serializeQuery } from './Repository';

class PostRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getPosts(payload) {
        const endPoint = `posts?${serializeQuery(payload)}`;
        const response = await Repository.get(`${baseUrl}/${endPoint}`)
            .then((response) => {
                if (response.data.length > 0) {
                    return response.data;
                } else {
                    return null;
                }
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return response;
    }

    async getPostBySlug(payload) {
        const response = await Repository.get(`${baseUrl}/posts?slug=${payload}`)
            .then((response) => {
                if (response.data.length > 0) {
                    return response.data[0];
                } else {
                    return null;
                }
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return response;
    }

    async SPGetPostItemOfCollectionBySlug(payload) {
        const endPoint = `collections?${serializeQuery(payload)}`;
        const response = await Repository.get(`${baseUrl}/${endPoint}`)
            .then((response) => {
                if (response.data && response.data[0].posts.length > 0) {
                    return response.data[0].posts;
                } else {
                    return null;
                }
            })
            .catch((error) => {
                console.log(JSON.stringify(error));
                return null;
            });
        return response;
    }

    async getPostItemsByKeyword(payload) {
        const response = await Repository.get(`${baseUrl}/posts?title_contains=${payload}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return response;
    }

    async getPostItemsByCategory(payload) {
        const response = await Repository.get(`${baseUrl}/posts?title_contains=${payload}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return response;
    }

    async getCategories(payload) {
        const endPoint = `categories?${serializeQuery(payload)}`;
        const response = await Repository.get(`${baseUrl}/${endPoint}`)
            .then((response) => {
                if (response.data.length > 0) {
                    return response.data;
                } else {
                    return null;
                }
            })
            .catch(() => {
                return null;
            });
        return response;
    }
    async getCategoryBySlug(payload) {
        const response = await Repository.get(`${baseUrl}/categories?slug=${payload}`)
            .then((response) => {
                if (response.data.length > 0) {
                    return response.data[0];
                } else {
                    return null;
                }
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return response;
    }
}

export default new PostRepository();
