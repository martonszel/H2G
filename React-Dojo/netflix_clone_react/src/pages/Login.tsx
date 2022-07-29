import React from 'react'
import classes from './Login.module.css'
import { useState } from "react";
import { useLoginUserMutation } from '../features/movie-api-slice';
import { useAppDispatch } from '../store/hooks'
import { setUser } from '../features/user-slice';
import { useNavigate } from "react-router-dom";

const Login = () => {


    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const [addUser, result] = useLoginUserMutation();
        const dispatch = useAppDispatch()
        const navigate = useNavigate();

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const user = {
                email, password
            }
            console.log(user);
            await addUser(user);
            dispatch(setUser)
            navigate("/private");

        }

        const resetForm = () => {
            setEmail('')
            setPassword('')
        }


        return (

            <div className={classes.wrap}>
                <form className={classes.loginForm} onSubmit={(e) => handleSubmit(e)} >
                    <h1>Login</h1>

                    <div className={classes.formGroup}>
                        <label htmlFor='email'>Email</label>
                        <input type="email" id="email" required className={classes.formInput} value={email} onChange={(e) => setEmail(e.currentTarget.value)} placeholder='user@user.com' />
                    </div>

                    <div className={classes.formGroup}>
                        <label htmlFor='password'>Password</label>
                        <input type="password" id="password" required className={classes.formInput} value={password} onChange={(e) => setPassword(e.currentTarget.value)} placeholder='*******' />
                    </div>

                    <div className={classes.formFooter} >
                        <div className={classes.formButton}>
                            <button type="reset" onClick={() => resetForm()} >Reset</button>
                        </div>

                        <div className={classes.formButton}>
                            <button type="submit">Login</button>
                        </div>
                    </div>
                </form>
            </div>

        )

    }
}

export default Login