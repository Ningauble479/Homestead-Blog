import { useState } from 'react';
import PostRepository from '~/repositories/PostRepository';

export default function useGetCategories() {
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState(null);
    const [category, setCategory] = useState(null);
    return {
        loading,
        category,
        categories,
        setCategories: (payload) => {
            setCategories(payload);
        },

        setLoading: (payload) => {
            setLoading(payload);
        },
        // Call api to get list of categories
        getCategories: async (payload) => {
            let responseData;
            setLoading(true);
            responseData = await PostRepository.getCategories(payload);

            if (responseData) {
                setTimeout(
                    function () {
                        setCategories(responseData);
                        setLoading(false);
                    }.bind(this),
                    250
                );
            } else {
                setLoading(false);
            }
        },
        // Call api to get single category

        getCategory: async (payload) => {
            let responseData;
            setLoading(true);
            responseData = await PostRepository.getCategoryBySlug(payload);

            if (responseData) {
                setCategory(responseData);
                setTimeout(
                    function () {
                        setLoading(false);
                    }.bind(this),
                    250
                );
            } else {
                setLoading(false);
            }
        },
    };
}
