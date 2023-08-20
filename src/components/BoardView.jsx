import React, { useEffect, useState } from 'react';
import { getPostById } from '../Data';
import { useParams } from 'react-router-dom';

const BoardView = (props) => {
    const [data, setData] = useState({});
    // let id = useParams();
    // id = parseInt(id || '1')

    useEffect(()=>{
        setData(getPostById(props.id));
    },[]);

    return (
        <div>
            <h2>게시글 상세정보</h2>
            <div>
                {data ? (
                    <div>
                        <div className='post-view-row'>
                            <label>게시글 번호</label>
                            <label>{data.id}</label>
                        </div>
                        <div className='post-view-row'>
                            <label>제목</label>
                            <label>{data.title}</label>
                        </div>
                        <div className='post-view-row'>
                            <label>작성일</label>
                            <label>{data.createDate}</label>
                        </div>
                        <div className='post-view-row'>
                            <label>조회수</label>
                            <label>{data.readCount}</label>
                        </div>
                        <div className='post-view-row'>
                            <label>내용</label>
                            <div>{data.content}</div>
                        </div>
                    </div>
                ):'해당 게시글을 찾을 수 없습니다.'}
                <button className='post-view-go-list-btn'
                onClick={()=>props.goBack()}>목록으로 돌아가기</button>
            </div>
        </div>
    );
};

export default BoardView;