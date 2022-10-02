import React from 'react'
import loginImage from '../images/login.jpg'
import { MdEmail } from "react-icons/md"
import { MdOutlinePassword } from "react-icons/md"

export default function LoginPage({ props, toggleHaveAccount }) {
    return (
        <div className="login-form-container">
            <form className="login-form">
                <img src={loginImage} className="login-image" alt="Working Woman"></img>
                <div className="login-form-content">
                    <h3 className="login-form-title">Sign In</h3>
                    <div className="form-group">
                        <div className="form-group-text">
                            <MdEmail className="form-group-icon" /><label>Email</label>
                        </div>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-group-text">
                            <MdOutlinePassword className="form-group-icon" /><label>Password</label>
                        </div>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="form-group form-group-4">
                        <button type="submit" className="btn-submit">
                            Submit
                        </button>
                        <p className="have-account-link" onClick={toggleHaveAccount()}>I don't have any account
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
}
