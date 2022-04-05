import React, { PureComponent } from 'react';

const Breadcrumb = () => {
    return (
        <React.Fragment>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Single Product Tab Style Top</li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Breadcrumb;