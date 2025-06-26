"use client"
import { useState, useEffect } from 'react';
import styles from './MembershipSection.module.css';
import membershipImage from "../../../../public/images/membership.png";

function MembershipTitle() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`${styles.titleContainer} box-border content-stretch flex flex-col gap-4 md:gap-8 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#1c1c1c] text-left w-full`}>
      <div className={`${styles.titleText} font-['Canela_Trial:Light',_sans-serif] relative shrink-0`}>
        <div className="text-[32px] md:text-[62px] leading-[1.1] block">
          <p className={`${styles.titleLine} block mb-0`}>Wear It.</p>
          <p className={`${styles.titleLine} block mb-0`}>Love It.</p>
          <p className={`${styles.titleLine} block`}>Swap It</p>
        </div>
      </div>
      <div className={`${styles.membershipLabel} font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',_sans-serif] relative shrink-0 text-[12px] md:text-[18px] text-nowrap tracking-[0.96px] md:tracking-[1.44px] uppercase opacity-80`}>
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          VA Membership
        </p>
      </div>
    </div>
  );
}

function JoinButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
  <button className={`${styles.joinButton}`}>
    Join The Circle
  </button>
  );
}

function ContentSection() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[42px] md:gap-[62px] items-start justify-start p-0 relative shrink-0 w-full max-w-[450px]">
      <MembershipTitle />
      <div className={`${styles.contentText} font-['Neue_Haas_Grotesk_Display_Pro:45_Light',_sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#1c1c1c] text-[14px] md:text-[18px] text-left tracking-[1.12px] md:tracking-[1.44px]`}>
        <p className={`${styles.contentParagraph} block mb-0`}>
          Not just priority access — a deeper privilege.
          <br />
          <br />
        </p>
        <p className={`${styles.contentParagraph} block`}>
          As a member, you receive early access to capsule drops, 90%
          credit-backed returns, personal styling sessions, and intimate
          learning circles.
        </p>
      </div>
      <JoinButton />
    </div>
  );
}

function ImageSection() {
  return (
    <div className={`${styles.imageContainer} ${styles.interactiveElement} relative w-full md:flex-1 h-[400px] md:h-[900px] overflow-hidden `}>
      <img
        src={membershipImage.src}
        alt="Membership"
        className={`${styles.imageBackground} size-full object-cover`}
      />
      <div className={styles.imageOverlay}></div>
    </div>
  );
}

export default function MembershipSection() {
  return (
    <div className={`${styles.membershipContainer} box-border content-stretch flex flex-col md:flex-row gap-8 md:gap-[132px] items-center justify-start p-4 md:p-0 relative w-full`}>
      {/* Mobile: Image first, Desktop: Image on left */}
      <div className="order-1 md:order-1 w-full md:flex-1">
        <ImageSection />
      </div>
      
      {/* Mobile: Content second, Desktop: Content on right */}
      <div className="order-2 md:order-2 flex justify-center md:justify-start w-full md:w-auto px-4 md:px-0">
        <ContentSection />
      </div>
    </div>
  );
}