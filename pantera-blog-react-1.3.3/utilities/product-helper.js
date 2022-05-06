export function formatCurrency(num) {
    if (num !== undefined) {
        return parseFloat(num)
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    } else {
    }
}

export function getPostsByColletionSlug(collections, collectionSlug) {
    if (collections.length > 0) {
        const result = collections.filter(({ collections }) => {
            return collections.some(({ slug }) => {
                return collectionSlug.includes(slug);
            });
        });
        if (result !== undefined) {
            return result;
        } else {
            return [];
        }
    } else {
        return [];
    }
}

export function getPostsByCategorySlug(categories, categorySlug) {
    if (categories.length > 0) {
        const result = categories.filter(({ categories }) => {
            return categories.some(({ slug }) => {
                /*console.log(slug);*/
                return categorySlug.includes(slug);
            });
        });
        if (result !== undefined) {
            return result;
        } else {
            return [];
        }
    } else {
        return [];
    }
}

export function getItemBySlug(banners, slug) {
    if (banners.length > 0) {
        const banner = banners.find((item) => item.slug === slug.toString());
        if (banner !== undefined) {
            return banner;
        } else {
            return null;
        }
    } else {
        return null;
    }
}

export function convertSlugsQueryString(payload) {
    let query = '';
    if (payload.length > 0) {
        payload.forEach((item) => {
            if (query === '') {
                query = `slug_in=${item}`;
            } else {
                query = query + `&slug_in=${item}`;
            }
        });
    }
    return query;
}
