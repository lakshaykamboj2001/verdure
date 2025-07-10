import React from 'react'

const Manifesto = () => {
  return (
    <div>
           <section>
      <div className="membership_pieces_section manifesto_section">
        <h2>Our Manifesto</h2>

        <div className="membership_pieces_section_content">
          <div className="membership_pieces_section_content_img pdbi_desktop">
            <img src="/images/manifesto1.webp" alt="Philosophy Style Desktop" />
          </div>
          <div className="product_detail_banner_img_mob">
            <img src="/images/philosophyStyleMob.png" alt="Philosophy Style Mobile" />
          </div>

        
        </div>

        <div className="manifesto_section_content">
            <div className='row'>
                <div className='col-lg-4'>
                    <div className='manifesto_section_content_item'>
                        <h3>Born from Reverence</h3>
                        <p>Rooted in earth-first materials and slow craft traditions, every Verdure piece begins with gratitude — for the land, the hands, and the legacy.</p>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='manifesto_section_content_item'>
                        <h3>Designed for Return</h3>
                        <p>Each creation is engineered to be refreshed, reborn, or gracefully returned to soil — a living testament to 
                        thoughtful design.</p>
                    </div>
                </div>
                
                <div className='col-lg-4'>
                    <div className='manifesto_section_content_item'>
                        <h3>Stewardship Woven In</h3>
                        <p>By subscribing, you become part of an inner circle shaping a better future — one timeless rotation at a time.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Manifesto