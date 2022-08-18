// Higher Order Component - A componet(HOC) that renders another component.
//Goal : To re use code.
//Render hijacking
//Prop manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
<div>
    <h1>Info</h1>
    <p> The info is : {props.info}</p>
</div>
);

const withAdminWarning = (WrappedComponent) => {

    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, please dont share</p>}
            <WrappedComponent {...props}/> 
        </div>
    );
}

const requireAuthentication = (WrappedComponent) =>{

    return (props) => (
        <div>
        {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>User not authenicated</p>}
        </div>
    )

}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info)

//ReactDOM.render(<AdminInfo isAdmin = {false} info="These are the details"/> ,document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated = {true} info="These are the details"/> ,document.getElementById('app'))



