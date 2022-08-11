import {useState} from 'react';
import {post} from '../../services/postBinService'
import './Form.css'

const Form = () => {
    const [firstNameError, setFirstNameError] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    const [validateError, setValidateError] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let firstName = formData.get('first-name');
        let lastName = formData.get('last-name');
        let email = formData.get('email');
        let password = formData.get('password');
        let confirmPassword = formData.get('confirm-password');
        let age = formData.get('age');
        let message = formData.get('message');
        let verification = formData.get('verification');

        let formError = false;

        

        if (firstName.length === 0) {
            setFirstNameError('The field is required.');
            formError = true;
        };

        if (lastName.length === 0) {
            setLastNameError('The field is required.');
            formError = true;
        }

        if ((email) < 5 || (email) > 32) {
            setEmailError('Email must be between 5 and 32 symbols.');
            formError = true;
        }
        
        if (password.length < 8) {
            setPasswordError('Password must be minimum 8 symbols.');
            formError = true;
        }

        if (password !== confirmPassword || confirmPassword.length === 0) {
            setConfirmPasswordError("Passwords don/'t match.");
            formError = true;
        }
        
        if (verification !== 'on') {
            setValidateError('You must validate first.');
            formError = true;
        }

        if (formError === false) {
            post({
                firstName,
                lastName,
                email,
                password,
                age,
                message,
            });

            e.currentTarget.reset();
        }
        
    }

    return (
        <section>
            <form id="form" onSubmit={onSubmitHandler} method="POST">
                <article className="form-article">
                    <label htmlFor="first-name">First Name:</label>
                    <input type="text" id="first-name" name="first-name" placeholder={firstNameError} />

                    <label htmlFor="last-name">Last Name:</label>
                    <input type="text" id="last-name" name="last-name" placeholder={lastNameError} />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder={emailError} />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder={passwordError} />

                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm-password" placeholder={confirmPasswordError} />

                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" />

                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" cols="40" rows="10"></textarea>

                    <label htmlFor="verification">Verification {validateError}</label>
                    <input className="check-box" type="checkbox" id="verification" name="verification" />

                    <input className="btn-submit" type="submit" value="Submit" />
                </article>
            </form>
        </section>
    );
};

export default Form;