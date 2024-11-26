import React from 'react';

const LayoutComponent = ({ children ,color,py="64px"}) => {
    return (
        <div className=" p-4 sm:p-8 lg:px-16"style={{background:color?color:`#FAF9FA`,paddingBlock:`${py}`}}>
            {children}
        </div>
    );
};

export default LayoutComponent;
