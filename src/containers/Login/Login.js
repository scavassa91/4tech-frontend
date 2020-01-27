import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const Login = ({ name, age }) => {
    const [login, setLogin] = useState('');

    const onLoginChange = (event) => {
        setLogin(event.target.value);
    };

    return (
        <div className="login">
            <form>
                <Button color="primary">Sign in</Button>
            </form>
            <input type="text" value={login} onChange={onLoginChange} />
            Login works!!! {name} {age}
        </div>
    );
};

export default Login;