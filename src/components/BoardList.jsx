import React, { useEffect, useState } from 'react';
import style from '../css/BoardList.css'
import { postList } from '../Data';
import CommonTable from './table/CommonTable';
import CommonTableRow from './table/CommonTableRow'
import CommonTableColumn from './table/CommonTableColumn'
import { Link } from 'react-router-dom';

const BoardList = props => {
    const [dataList, setDataList] = useState([]);

    useEffect(()=>{
        setDataList(postList)
    },[])

    return (
        <div className='content'>
            <CommonTable headersName={['글번호','제목','등록일','조회수']}>
                {dataList ? dataList.map((item, index) => {
                    return (
                        <CommonTableRow key={index}>
                            <CommonTableColumn>{item.id}</CommonTableColumn>
                            <CommonTableColumn><Link to={`/postView/${item.id}`}>{item.title}</Link></CommonTableColumn>
                            <CommonTableColumn>{item.createDate}</CommonTableColumn>
                            <CommonTableColumn>{item.readCount}</CommonTableColumn>
                        </CommonTableRow>
                    )
                }) : ''}

            </CommonTable>
            <button className='plus'>글쓰기</button>
            <button className='update'>수정하기</button>
            <button className='delete'>삭제하기</button>
        </div>
    );
};

export default BoardList;