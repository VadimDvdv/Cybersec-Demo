export default function EventsPage() {  
  const events = [
    {
      id: 1,
      title: "Intro to CTF Competitions",
      date: "November 25, 2024",
      time: "7:00 PM",
      location: "CS Building Room 140",
      description: "Learn the basics of Capture The Flag competitions"
    },
    {
      id: 2,
      title: "Web Security Workshop",
      date: "December 2, 2024", 
      time: "6:30 PM",
      location: "LGRC A301",
      description: "Explore OWASP Top 10 vulnerabilities"
    },
    {
      id: 3,
      title: "CTF Team Meeting",
      date: "November 20, 2024",
      time: "8:00 PM",
      location: "Student Union Room 204",
      description: "Strategy session for upcoming PicoCTF"
    }
  ];

  return (
    <main className="container">
      <h1>Upcoming Events</h1>
      <div className="events-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h2>{event.title}</h2>
            <div className="event-details">
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Time:</strong> {event.time}</p>
              <p><strong>Location:</strong> {event.location}</p>
            </div>
            <p className="event-description">{event.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}