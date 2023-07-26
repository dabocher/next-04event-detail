import getAllEvents from "@/utils/getAllEvents";
import styles from "./page.module.css";
import { Oswald } from "next/font/google";
import Link from "next/link";
import EventCard from "@/components/EventCard/EventCard";

const oswald = Oswald({ subsets: ["latin"], weight: "400" });

const EventPage = async () => {
  const events = await getAllEvents();

  return (
    <>
      <h1>Eventos</h1>
      <div className={styles.eventsContainer}>
        <ul>
          <h1
            className={`${oswald.className} ${styles.title} rounded-xl text-6xl pt-3`}
          >
            Eventos
          </h1>
          <li className={`${styles.container} ${oswald.className}`}>
            {events.map((event) => {
              return (
                <Link href={`/events/${event.id}`} key={event.id}>
                  <EventCard event={event} />
                </Link>
              );
            })}
          </li>
        </ul>
      </div>
    </>
  );
};
export default EventPage;
