import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { toggleSearchBox } from '~/store/app/action';
import { useRouter } from 'next/router';

const SearchForm = ({ isSearchBoxShow }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [keyword, setKeyword] = useState(null);

    function handleCloseSearchBox() {
        dispatch(toggleSearchBox(false));
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(toggleSearchBox(false));
        setTimeout(function () {}, 1000);
        router.push(`/search?keyword=${keyword}`);
    }

    function handleChangeKeyword(e) {
        if (e.target.value !== '') {
            setKeyword(e.target.value);
        }
    }

    return (
        <div className={`ps-search ${isSearchBoxShow && isSearchBoxShow === true ? 'active' : ''}`} id="site-search">
            <a className="ps-btn--close" href="#" onClick={handleCloseSearchBox}></a>
            <div className="ps-search__content">
                <form className="ps-form--primary-search" method="get" onSubmit={handleSubmit}>
                    <input
                        className="form-control"
                        name="keyword"
                        type="text"
                        onChange={handleChangeKeyword}
                        placeholder="Search for..."
                    />
                    <button>
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default connect((state) => state.app)(SearchForm);
