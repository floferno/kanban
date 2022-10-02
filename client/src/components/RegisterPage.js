import React from 'react'
import registerImage from '../images/register.jpg'
import { MdPerson } from "react-icons/md"
import { MdEmail } from "react-icons/md"
import { MdOutlinePassword } from "react-icons/md"

export default function RegisterPage({ toggleHaveAccount }) {
    return (
        <div className="register-form-container">
            <form className="register-form">
                <img src={registerImage} className="register-image" alt="Working Woman"></img>
                <div className="register-form-content">
                    <h3 className="register-form-title">Register</h3>
                    <div className="form-group">
                        <div className="form-group-text">
                            <MdPerson className='form-group-icon' /><label>Name</label>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter name"
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-group-text">
                            <MdEmail className='form-group-icon' /><label>Email</label>
                        </div>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-group-text">
                            <MdOutlinePassword className='form-group-icon' /><label>Password</label>
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
                        <p className="have-account-link" onClick={toggleHaveAccount()}>I already have an account
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
}

