export default function Home() {
  return (
    <main className="container">
      <h1>UMass Cybersecurity Club</h1>
      <p className="intro">
        Welcome to the UMass Amherst Cybersecurity Club! We're a student-run organization dedicated to 
        learning about cybersecurity through hands-on workshops, CTF competitions, and industry networking events.
      </p>

      <section className="quick-links">
        <h2>Get Involved</h2>
        <div className="links-grid">
          <a href="/events" className="link-card">
            <h3>Upcoming Events</h3>
            <p>Workshops, meetings, and competitions</p>
          </a>
          <a href="/about" className="link-card">
            <h3>About Us</h3>
            <p>Learn more about our mission and team</p>
          </a>
        </div>
      </section>
    </main>
  );
}