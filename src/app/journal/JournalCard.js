import React from 'react';

const JournalCard = () => {
  return (
    <section>
      <div className="Journals_card_section Journals_card_section_journal">
        {Array(6).fill(0).map((_, index) => (
          <div
            className={`Journals_card_section_content ${index === 5 ? 'jscj_margin_bottom' : ''}`}
            key={index}
          >
            <div className="Journals_card_section_content_img">
              <img src="/images/journalcard.png" alt="Journal Card" />
            </div>
            <div className="Journals_card_section_content_text">
              <p>Feb 17, 2025</p>
              <h2>Regenerative by Design</h2>
              <h5>
                From soil to stitch, we honor life cycles. Our materials are sourced
                from biodynamic farms, our textiles from mills that think in circles.
              </h5>
              <a href="/valogo/journal-detail.html">Read</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JournalCard;
