import React from 'react';

const Loader = (props) => (
    <section className="messages">
        
        {props.error ? 
        <div className="error">
            <h2>OOPS!<br /><span className="message">There was a disturbance in the Force!</span></h2>
        </div> 
        :
        <div className="loader">
            <img src="images/loader.svg" alt="loader"/>
        </div>}
    </section>
);

export default Loader;