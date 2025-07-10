import React from 'react'
import styles from './membership.module.css'



const ReadyApply = () => {
  return (
    <div>
        <section>
            <div className={styles.ready_apply_container}>
                <img className="banner-desk" src="/images/readyapply.webp" alt="Ready to apply"/>
                <img className="banner-mob" src="/images/readyapply_mobile.png" alt="Ready to apply"/>  

                <div className={styles.ready_apply_content}>

                <h2>Ready to apply?</h2>
                <p>Our circle is open — but not infinite. Select your path, then choose your tier. We’ll guide you from there — quietly, beautifully, and with purpose.</p>
                <div className={`${styles.ready_apply_content_button} MWSC_text_form`}>
                                        <div className="form_group">
                                        <button type="button">Apply Membership</button>
                                        </div>

                                    </div>
                </div>

            </div>
        </section>
    </div>
  )
}

export default ReadyApply