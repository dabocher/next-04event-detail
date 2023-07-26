import styles from "./EventCard.module.css";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "400" });

interface EventCardProps {
  event: {
    car: string;
    community: string;
    description: string;
    eventDay: string;
    eventName: string;
    id: string;
    simulator: string;
    track: string;
    image: string;
  };
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <article className={styles.card}>
      <div className={`${styles.topContainer} rounded-xl`}>
        <div>
          <p className={`${styles.organizer} ${inter.className}`}>
            Organizador
          </p>

          <h3 className={styles.community}>
            {event.community}{" "}
            <span className={styles.simulator}>{event.simulator}</span>{" "}
          </h3>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <Image
          src={`/images/${event.simulator}.webp`}
          alt={"carrera"}
          width={300}
          height={169}
          className="rounded-xl"
        />
        <h2 className={styles.titleEvent}>
          {event.eventName}
          <span> {event.eventDay}</span>
        </h2>
        <p className={`${styles.description} ${inter.className}`}>
          {event.description}
        </p>
      </div>
    </article>
  );
};

export default EventCard;
