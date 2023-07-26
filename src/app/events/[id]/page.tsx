import { Event } from "@/app/api/libs/backendTypes";
import EventCard from "@/components/EventCard/EventCard";

const getEvent = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/event/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  const data = (await response.json()) as Event;

  return data;
};

interface EventDetailPageProps {
  params: {
    id: string;
  };
}

const EventDetailPage = async ({ params: { id } }: EventDetailPageProps) => {
  const event = await getEvent(id);

  return <EventCard event={event} />;
};

export default EventDetailPage;
