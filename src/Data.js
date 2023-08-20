const postList = [
    {"id":1, "title" : "첫번째 게시글 입니다", "content" : "첫번째 내용입니다",
    "createDate": "2023-08-20", "readCount" : 6
    },
    {"id":2, "title" : "두번째 게시글 입니다", "content" : "두번째 내용입니다",
    "createDate": "2023-08-20", "readCount" : 5
    },
    {"id":3, "title" : "세번째 게시글 입니다", "content" : "세번째 내용입니다",
    "createDate": "2023-08-21", "readCount" : 1
    },
    {"id":4, "title" : "네번째 게시글 입니다", "content" : "네번째 내용입니다",
    "createDate": "2023-08-22", "readCount" : 2
    },
    {"id":5, "title" : "다섯번째 게시글 입니다", "content" : "다섯번째 내용입니다",
    "createDate": "2023-08-23", "readCount" : 4
    }
];

const getPostById = id => {
    const array = postList.filter(x => x.id === id);
    if(array.length === 1){
        return array[0];
    }
    return null;
}

export {postList, getPostById};