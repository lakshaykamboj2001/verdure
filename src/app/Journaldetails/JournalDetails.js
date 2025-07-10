import React from 'react';

const JournalDetails = () => {
  return (
    <div>
      {/* =============== Philosophy Mission & Vision Section ============== */}
      <section>
        <div className="membership_works_section Mission_Vision_section_padding">
          <div className="Mission_Vision_section jdmv_text">
            <h2>Regenerative by Design</h2>
            <p>
              At Verdure Atelier we dream in generations, not seasons. We begin not with fabric, but with philosophy — each piece a love letter to both wearer and world. With a quiet commitment to create only what the Earth allows and the soul requires. Every piece begins as a dialogue between innovation and restraint. Our designers work with recycled cotton..
            </p>
          </div>

          <div className="Membership_pieces_section_content">
            <div className="Membership_pieces_section_content_img pdbi_desktop">
              <img src="/images/jd-1.webp" alt="" />
            </div>
            <div className="product_detail_banner_img_mob">
              <img src="/images/jd-1mob.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="membership_works_section Mission_Vision_section_padding">
          <div className="Mission_Vision_section jdmv_text_section">
            <h2>mission and vision</h2>
            <p>
              At Verdure Atelier we dream in generations, not seasons. We begin not with fabric, but with philosophy — each piece a love letter to both wearer and world. With a quiet commitment to create only what the Earth allows and the soul requires. Every piece begins as a dialogue between innovation and restraint. Our designers work with recycled cotton..
            </p>
          </div>

          <div className="Membership_pieces_section_content">
            <div className="Membership_pieces_section_content_img pdbi_desktop">
              <img src="/images/jd-2.webp" alt="" />
            </div>
            <div className="product_detail_banner_img_mob">
              <img src="/images/jd-2mob.png" alt="" />
            </div>
            <div className="Mission_Vision_section jd_text_section">
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h2>
              <p>
                At Verdure Atelier we dream in generations, not seasons. We begin not with fabric, but with philosophy — each piece a love letter to both wearer and world. With a quiet commitment to create only what the Earth allows and the soul requires. Every piece begins as a dialogue between innovation and restraint. Our designers work with recycled cotton..
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =============== Philosophy Who's In Section ============== */}
      <section>
        <div className="membership_works_section MWS_section">
          <div className="row">
            <div className="col-lg-6">
              <div className="Membership_works_section_content_img">
                <img src="/images/jd-cotton.webp" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="Membership_works_section_content_text_container MWSCT_container">
                <div className="MWSC_text journal_detail_text">
                  <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============== Social Section ============== */}
      <section>
        <div className="journal_social_section">
          <div className="journal_social_section_content">
            <h2>Amit Agarwal</h2>
            <p>Designer</p>
          </div>

          <div className="journal_social_section_content">
            <div className="journal_social_section_content_list">
              <ul>
                <li>
                  <a href=""><img src="/images/insta.svg" alt="" /></a>
                </li>
                <li>
                  <a href=""><img src="/images/facebook.svg" alt="" /></a>
                </li>
                <li>
                  <a href=""><img src="/images/linkdin.svg" alt="" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =============== Journals Card Section ============== */}
      <section>
        <div className="Journals_card_section_container">
          <div className="Journals_card_section_heading">
            <h2>Related Journals</h2>
          </div>
          <div className="Journals_card_section">
            {[1, 2, 3].map((_, idx) => (
              <div
                className={`Journals_card_section_content ${
                  idx === 2 ? 'jscj_margin_bottom' : ''
                }`}
                key={idx}
              >
                <div className="Journals_card_section_content_img">
                  <img src="/images/journalcard.png" alt="" />
                </div>
                <div className="Journals_card_section_content_text">
                  <p>Feb 17, 2025</p>
                  <h2>Regenerative by Design</h2>
                  <h5>
                    From soil to stitch, we honor life cycles. Our materials are sourced from biodynamic farms, our textiles from mills that think in circles.
                  </h5>
                  <a href="/valogo/journal-detail.html">Read</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JournalDetails;
