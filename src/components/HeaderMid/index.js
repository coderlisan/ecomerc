import React from 'react';
import Wishlist from '../../components/Wishlist'
import Minicart from '../../components/Minicart'
import SearchItem from '../../components/SearchItem'

const HeaderMid = () => {
    return (
        <React.Fragment>
                <div className="header-middle pl-sm-0 pr-sm-0 pl-xs-0 pr-xs-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="logo pb-sm-30 pb-xs-30">
                                    <a href="index.html">
                                        <img src="images/menu/logo/1.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-9 pl-0 ml-sm-15 ml-xs-15">
                                <SearchItem/>
                                <div className="header-middle-right">
                                    <ul className="hm-menu">
                                        <Wishlist />
                                        <Minicart />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    );
}
 
export default HeaderMid;