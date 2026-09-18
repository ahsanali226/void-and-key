import Image from "next/image";
import styles from "./TeamSection.module.css";
import { ArrowRight, ArrowLeft } from "lucide-react";

const team = [
  {
    name: "Marzooq lakhani",
    role: "CEO",
    image: "/images/ceo.png",
  },
  {
    name: "Talib pirani",
    role: "CTO",
    image: "/images/developer.png",
  },
];

export default function TeamSection() {
  return (
    <section className={styles.section}>
      <div className={styles.headerTop}>
        <button className={styles.tag}>OUR TEAM <ArrowRight size={14} /></button>
      </div>
      <div className={styles.header}>
        <h2>
          Meet Our <span className={styles.outlineText}>Creative</span> Team
        </h2>
        <button className={styles.viewAllBtn}>VIEW ALL TEAM</button>
      </div>

      <div className={styles.wrapper}>
        <button className={styles.arrow} aria-label="Previous team member">
          <ArrowLeft size={20} />
        </button>

        <div className={styles.grid}>
          {team.map((member, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.info}>
                <p>{member.role}</p>
                <h4>{member.name}</h4>
              </div>
            </div>
          ))}
        </div>

        <button className={`${styles.arrow} ${styles.active}`} aria-label="Next team member">
          <ArrowRight size={20} />
        </button>
      </div>

      <div className={styles.pagination}>
        <span className={`${styles.dot} ${styles.activeDot}`} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
    </section>
  );
}