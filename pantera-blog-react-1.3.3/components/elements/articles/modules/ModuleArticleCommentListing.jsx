import React from 'react';

const ModuleArticleCommentListing = () => {
    const commentItems = [
        {
            id: 1,
            name: 'Elmer Schmidt',
            image: '/static/img/user/1.jpg',
            content: ' Cras id nulla at metus congue auctor. Suspendisse auctor dictum orci quis interdum.',
            time: 'Jul 12, 2020 AT 8:30 PM',
        },
        {
            id: 2,
            name: 'Tianna Fuller',
            image: '/static/img/user/2.jpg',
            content: ' Cras id nulla at metus congue auctor. Suspendisse auctor dictum orci quis interdum.',
            time: 'Jul 12, 2020 AT 10:00 PM',
            children: [
                {
                    id: 1,
                    name: 'Jaydin Jones',
                    image: '/static/img/user/3.jpeg',
                    content: ' Cras id nulla at metus congue auctor. Suspendisse auctor dictum orci quis interdum.',
                    time: 'Jul 12, 2020 AT 11:00 PM',
                },
                {
                    id: 2,
                    name: 'Jaydin Jones',
                    image: '/static/img/user/4.jpg',
                    content: ' Cras id nulla at metus congue auctor. Suspendisse auctor dictum orci quis interdum.',
                    time: 'Jul 12, 2020 AT 11:20 PM',
                },
            ],
        },
        {
            id: 3,
            name: 'Kate Morrison',
            image: '/static/img/user/4.jpg',
            content: ' Cras id nulla at metus congue auctor. Suspendisse auctor dictum orci quis interdum.',
            time: 'Jul 13, 2020 AT 10:10 AM',
        },
        {
            id: 5,
            name: 'Amilia Luna',
            image: '/static/img/user/6.jpg',
            content: ' Cras id nulla at metus congue auctor. Suspendisse auctor dictum orci quis interdum.',
            time: 'Jul 13, 2020 AT 10:20 AM',
        },
    ];
    // View
    const commentMultipleView = (data) => {
        return data.map((item) => (
            <div className="ps-block--comment" key={item.id}>
                <div className="ps-block__thumbnail">
                    <img src={item.image} alt={item.name} />
                </div>
                <div className="ps-block__content">
                    <h5>
                        {item.name}
                        <small>{item.time}</small>
                    </h5>
                    <p>{item.content}</p>
                    <a className="ps-block__reply" href="#post-comment">
                        Reply
                    </a>
                    {item.children && commentMultipleView(item.children)}
                </div>
            </div>
        ));
    };

    const commentView = commentMultipleView(commentItems);

    return (
        <div className="ps-post-comments">
            <div className="ps-section__header">
                <h3>5 Comments</h3>
            </div>
            <div className="ps-section__content">{commentView}</div>
        </div>
    );
};

export default ModuleArticleCommentListing;
