import React from 'react';

class Footer extends React.Component {

    render(){
        return(
            <div className ="footer">
            <div className="mini-footer">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="copyright-text">
                    <p>© 2019
                      <a href="#">ReactJS</a>. All rights reserved. Created by
                      <a href="#"> Madhuri</a>
                    </p>
                  </div>
        
                  <div className="go_top">
                    <span className="icon-arrow-up"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        );
    }
}

export default Footer;
