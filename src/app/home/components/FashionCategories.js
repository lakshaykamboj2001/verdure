import Link from 'next/link';
import Image from 'next/image';
import styles from './Home.module.css';
import imgImage from "../../../../public/images/fashioc1.png";
import imgImage1 from "../../../../public/images/fashioc2.png";
import imgImage2 from "../../../../public/images/fashioc1.png";
import imgImage3 from "../../../../public/images/fashioc2.png";

export default function FashionCategories() {
  return (
    <div className={styles.fashion_categories_container}>
      
      <Link href="/women" className={`${styles.category_section} ${styles.women_section}`}>
        <div className={`${styles.category_section} ${styles.women_section}`}>
          <div className={styles.image_wrapper}>
            <Image src={imgImage} alt="Fashion Women 1" fill style={{ objectFit: 'cover' }} />
            {/* Add other images as layers if needed */}
          </div>
          <div className={styles.overlay_effect}></div>
          <div className={`${styles.category_label} ${styles.women_label}`}>
            <p>Women</p>
          </div>
        </div>
      </Link>

      <Link href="/men" className={`${styles.category_section} ${styles.men_section}`}>
        <div className={`${styles.category_section} ${styles.men_section}`}>
          <div className={styles.image_wrapper}>
            <Image src={imgImage3} alt="Fashion Men" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className={styles.overlay_effect}></div>
          <div className={`${styles.category_label} ${styles.men_label}`}>
            <p>Men</p>
          </div>
        </div>
      </Link>

    </div>
  );
}
