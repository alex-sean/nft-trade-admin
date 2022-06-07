import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { login } from '../adapter/api';

export default function Login(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        login(name, password).then(response =>(response.json())).then(res => {
            if (res.status !== 200) {
                alert('Email or password invalid')
                return
            }

            localStorage.setItem('token', res.data.token)
            window.location.href='/users'
        })
    };

    return (
        <div className="content-wrapper" style={{width: '100%', height: '100%'}}>
            <div className="content d-flex justify-content-center align-items-center">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="card mb-0">
                        <div className="card-body">
                            <div className="text-center mb-3">
                                <i className="icon-reading icon-2x text-slate-300 border-slate-300 border-3 rounded-round p-3 mb-3 mt-1"></i>
                                <h5 className="mb-0">Login to your account</h5>
                                <span className="d-block text-muted">Enter your credentials below</span>
                            </div>

                            <div className="form-group form-group-feedback form-group-feedback-left">
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="Username" required />
                                <div className="form-control-feedback">
                                    <i className="icon-user text-muted"></i>
                                </div>
                            </div>

                            <div className="form-group form-group-feedback form-group-feedback-left">
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Password" required />
                                <div className="form-control-feedback">
                                    <i className="icon-lock2 text-muted"></i>
                                </div>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block">Sign in <i className="icon-circle-right2 ml-2"></i></button>
                            </div>

                            {/* <div className="text-center">
                                <a href="login_password_recover.html">Forgot password?</a>
                            </div> */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}