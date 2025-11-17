export default function AboutPage() {
    return (
        <main className="container">
            <h1>About Us</h1>
            <p className="intro">
                The UMass Cybersecurity Club is dedicated to fostering a community of students 
                passionate about information security, ethical hacking, and digital defense.
            </p>

            <h2>Our Mission</h2>
            <p>
                We provide hands-on learning experiences through workshops, Capture The Flag (CTF) 
                competitions, and industry connections to prepare members for careers in cybersecurity.
            </p>

            <h2>What Do We Do?</h2>
            <ul>
                <li>Weekly workshops on security topics</li>
                <li>Compete in national CTF competitions</li>
                <li>Host industry speakers and networking events</li>
                <li>Maintain a collaborative learning environment</li>
            </ul>

            <h2>Join Us!</h2>
            <p>
                All UMass students are welcome, regardless of experience level. Check our <a href="">Discord</a> and <a href="/events">events page </a>
                for the most recent updates!
            </p>
        </main>
    );
}