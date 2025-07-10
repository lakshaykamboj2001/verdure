import React from 'react'
import styles from './membership.module.css'
import Image from 'next/image'

const JourneyPath = () => {
  return (
    <div>
        <section>
            <div className={styles.journey_path_container}>
                <h2>One Journey, Two Paths</h2>

                <div className={styles.journey_path_content}>
                    <div className={styles.journey_path_content_image}>
                     <img   className="banner-desk" src="/images/journey.webp" alt="Journey Path" fluid />
                    <img  className="banner-mob" src="/images/journey_mobile.png" alt="Journey Path" fluid />
                    </div>
                    <div className={styles.journey_path_content_right}>
                        <h3>This is who I am</h3>
                        <p>we believe that true style begins within. Our connoisseurship Circle are crafted  for the souls seeking meaning, artistry, and legacy in every choice.</p>
                        <button>Join the Circle</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default JourneyPath