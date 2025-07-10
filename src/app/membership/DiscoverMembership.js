import React from 'react'
import Link from 'next/link'
import styles from './membership.module.css'
const DiscoverMembership = () => {
    return (
        <div>
            <section>
                <div className={`${styles.discover_membership_container} discover_membership_container`}>
                    <h2>Discover your archetype</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className={styles.discover_membership_content}>
                                <img src="/images/discover1.webp" alt="Discover Membership" />
                                <div className={styles.discover_membership_content_text}>
                                    <h3>The Artisan</h3>
                                    <h4>For the Soulful Minimalist</h4>
                                    <p>Find beauty in simplicity and power in intention. And cherish ritual, favouring “less but better.” </p>
                                    <p className={styles.discover_membership_content_text_p}>Simplicity is not less—it’s essence</p>
                                    <Link href="">join the circle</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className={styles.discover_membership_content}>
                                <img src="/images/discover2.webp" alt="Discover Membership" />
                                <div className={styles.discover_membership_content_text}>
                                    <h3>The Artisan</h3>
                                    <h4>For the Soulful Minimalist</h4>
                                    <p>Find beauty in simplicity and power in intention. And cherish ritual, favouring “less but better.” </p>
                                    <p className={styles.discover_membership_content_text_p}>Simplicity is not less—it’s essence</p>
                                    <Link href="">join the circle</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className={styles.discover_membership_content}>
                                <img src="/images/discover3.webp" alt="Discover Membership" />
                                <div className={styles.discover_membership_content_text}>
                                <h3>The Artisan</h3>
                                <h4>For the Soulful Minimalist</h4>
                                <p>Find beauty in simplicity and power in intention. And cherish ritual, favouring “less but better.” </p>
                                <p className={styles.discover_membership_content_text_p}>Simplicity is not less—it’s essence</p>
                                <Link href="">join the circle</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DiscoverMembership