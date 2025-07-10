'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CreateAccount = () => {
  return (
    <div>
      <section>
        <div className="create_account_section">
          <div className="row">
            <div className="col-lg-6">
              <div className="create_account_section_left">
                <h2 className="create_account_section_left_heading">My VA Account</h2>
                <p className="create_account_section_left_text">
                  Create your account to have access to a more personalised experience.
                </p>
                <form className="create_account_section_left_form">
                  <label htmlFor="email">Email*</label>
                  <input type="email" id="email" placeholder="Email" />

                  <label htmlFor="password" className="create_account_section_left_password_label">
                    Password*
                  </label>
                  <input type="password" id="password" placeholder="Password" />

                  <div className="create_account_section_left_checkbox">
                    <input type="checkbox" id="create_account_section_left_checkbox" />
                    <label
                      htmlFor="create_account_section_left_checkbox"
                      className="create_account_section_left_checkbox_label"
                    >
                      I have read, understood and agree to the{' '}
                      <Link href="/privacy-policy">Privacy Policy.</Link>
                    </label>
                  </div>

                  <button type="submit" className="create_account_section_left_button">
                    Create Account
                  </button>

                  <p className="create_account_section_left_activation_text">
                    You will receive an activation code by email to validate your account creation.
                  </p>
                  <p className="create_account_section_left_or_text">Or</p>
                  <button type="button" className="create_account_section_left_google_button">
                    <Image src="/images/google.svg" alt="google" width={20} height={20} />
                    &nbsp; SIGN up with google
                  </button>
                  <p className="create_account_section_left_login_text">
                    Already have My VA Account? <Link href="/login">Log in</Link>
                  </p>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="create_account_section_right">
                <Image className="banner-desk" src="/images/vaccount.png" alt="VA Account" width={500} height={500} />
                <img className="banner-mob" src="/images/vaccount_mobile.png" alt="VA Account"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="Account_jvan">
          <h2>join verdure atelier now</h2>

          <div className="Account_jvan_content">
            <div className="Account_jvan_content_left">
              <h3>Track your orders</h3>
              <p>Follow your orders every step of the way.</p>
            </div>
            <div className="Account_jvan_content_left">
              <h3>Membership</h3>
              <p>Check out faster with saved addresses and payment methods.</p>
            </div>
            <div className="Account_jvan_content_left">
              <h3>Book an appointment</h3>
              <p>
                Enjoy priority access to the boutique of your choice at the time and date that suits you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateAccount;
