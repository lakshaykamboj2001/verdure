import React from 'react';

const ApplyMembership = () => {
  return (
    <section>
      <div className="membership_works_section MWS_section">
        <div className="row">
          <div className="col-lg-6">
            <div className="Membership_works_section_content_img">
              <img src="/images/cotton.webp" className="banner-desk" alt="Cotton Desk" />
              <img src="/images/cotton-mob.png" className="banner-mob" alt="Cotton Mobile" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="Membership_works_section_content_text_container MWSCT_container">
              <div className="Membership_works_section_content_text">
                <h2>who’s in ?</h2>
                <p>
                  At Verdure Atelier, design is not an act of trend, but of truth.
                  We begin not with fabric, but with philosophy — a quiet commitment
                  to create only what the Earth allows and the soul requires.
                  Every piece begins as a dialogue between innovation and restraint.
                  Our designers work with recycled cotton..
                </p>
              </div>

              <div className="MWSC_text_form">
                <form action="">
                  <div className="form_group">
                    <button type="submit">Apply membership</button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyMembership;
