import React from 'react';
import PageNotFoundImg from '../../images/pagenotfound.gif';

const PageNotFound = () => {
    return ( <div>
        <img style={{width: "100%", height: "90vh"}} src={PageNotFoundImg} alt="404: page not found!" />
    </div> );
}
 
export default PageNotFound;