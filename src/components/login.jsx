import React from 'react';

function Login(props){
    const isRegisteration = props.isRegisteration;
    return (
        <div className='form-control'>
        <div className='form-div' >
                <form method="post" action= {props.posturl}>
                    <center><h1 className="center">{props.title}</h1>
                    <div className="mb-3">
                        <label for="username" className="form-label">Username</label>
                        <input type = "text" placeholder="Username" name="username" autoComplete="off" className="form-control input "/>
                    </div>

                    <div className="mb-3">
                    <label for="Password" className="form-label">Password</label>
                    <input type = "password" placeholder="Password" name="password" autoComplete="off" className="form-control input"/>
                    </div>

                    <div className="mb-3">
                        <label style={{visibility:!isRegisteration ?'hidden':null}}for="Confirm Password" className="form-label">Confirm Password</label>
                        <input type = {isRegisteration ? "password" : "hidden" } placeholder="Confirm Password" autoComplete="off" name="cpassword" className="form-control input"/>
                    </div>
                  <button className="btn-lg btn-primary">{isRegisteration?"Register":"Login"}</button></center>
                </form>
             </div>
        </div>
        
    );
}

export default Login;