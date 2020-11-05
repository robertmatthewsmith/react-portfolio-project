import { Component } from 'react';

function Footer(props) {
    return (
        <footer className="site-footer">
           <div className="container">
               <div className="row">
               <div className="col-md-3 text-center">
                        <a role="button" className="btn btn-link" href="tel:+18001234567"><i className="fa fa-phone" /> 1-800-1234567</a><br />
                        <a role="button" className="btn btn-link" href="info@petmatch.com"><i className="fa fa-envelope-o" /> info@petmatch.com</a>
                    </div>
               </div>
           </div> 

        </footer>
    )
}

export default Footer;