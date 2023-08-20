import React from 'react';
import style from '../css/Write.css'

const Write = () => {
    return (
        <div className='content'>
           <form className='write-form'>
            <div className='group'>
                <label>제목</label><br />
                <input type="email" className='email' placeholder='name@example.com' />
            </div>
            <div className='group'>
                <label>내용</label><br />
                <textarea name="textarea" cols="30" rows="10"></textarea>
            </div>
            </form> 
            <button className='write-done'>작성완료</button>
            <button className='cancel'>취소</button>
        </div>
    );
};

export default Write;