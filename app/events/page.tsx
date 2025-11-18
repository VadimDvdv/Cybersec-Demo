import { getAllEvents } from "@/lib/events";

export default function EventsPage() { 
  const events = getAllEvents();

  return (
    <main className="container">
        <h1>Upcoming Events</h1>
        <div className="events-list">
          {events.map((event) => (
            
            <div key={event.slug} className="event-card">
              <a
                href={`/events/${event.slug}`}
              >
                <h2>{event.title}</h2>
              </a>
              <div className="event-details">
                <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                <p><strong>Time:</strong> {event.time}</p>
                <p><strong>Location:</strong> {event.location}</p>
              </div>
              <p className="event-description">{event.description}</p>
              <div className="event-tags">
                {event.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
    </main>
  );
}