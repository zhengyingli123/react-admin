import React from 'react';
import Style from './son1.module.less'; // 样式模块化

function Son1(){
    return(
        <div className={Style.hehe}>
            <h3>son1</h3>
        </div>
    )
}

export default Son1;