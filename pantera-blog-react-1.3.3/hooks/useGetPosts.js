import { useState } from 'react';
import PostRepository from '~/repositories/PostRepository';

export default function useGetPosts() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState(null);
    const [post, setPost] = useState(null);
    return {
        loading,
        post,
        posts,
        setPosts: (payload) => {
            setPosts(payload);
        },

        setLoading: (payload) => {
            setLoading(payload);
        },

        getPostsByCollection: async (payload) => {
            let responseData;
            setLoading(true);
            responseData = await PostRepository.SPGetPostItemOfCollectionBySlug(payload);

            if (responseData) {
                setTimeout(
                    function () {
                        setPosts(responseData);
                        setLoading(false);
                    }.bind(this),
                    250
                );
            } else {
                setLoading(false);
            }
        },
        getPosts: async (payload) => {
            let responseData;
            setLoading(true);
            responseData = await PostRepository.getPosts(payload);

            if (responseData) {
                setTimeout(
                    function () {
                        setPosts(responseData);
                        setLoading(false);
                    }.bind(this),
                    250
                );
            } else {
                setLoading(false);
            }
        },
        getPost: async (payload) => {
            let responseData;
            setLoading(true);
            responseData = await PostRepository.getPostBySlug(payload);

            if (responseData) {
                setTimeout(
                    function () {
                        setPost(responseData);
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
