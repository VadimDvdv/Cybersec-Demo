import { getAllEventSlugs, getEventBySlug } from "@/lib/events";
import ReactMarkdown from 'react-markdown';

// generate static params for all events
export async function generateStaticParams() {
    const slugs = getAllEventSlugs();
    return slugs;
}

// the page component
export default async function EventPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const {slug} = await params;

    const event = getEventBySlug(slug)

    if (!event) {
        return (
            <main className="container">
                <h1>Event Not Found</h1>
                <p>Sorry, this event doesn't exist.</p>
                <a href="/events" className="back-link">Back to all events</a>
            </main>
        );
    }

    return (
        <main className="container">
            <a href="/events" className="back-link">Back to all events</a>

            <article className="event-article">
                <header className="event-header">
                    <h1>{event.title}</h1>
                    <div className="event-meta">
                        <p>📅 {new Date(event.date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        })}</p>
                        <p>🕒 {event.time}</p>
                        <p>📍 {event.location}</p>
                    </div>
                    <div className="event-tags">
                        {event.tags.map((tag) => (
                            <span key={tag} className="tag">{tag}</span>
                        ))}
                    </div>
                </header>

                <div className="event-content">
                    <ReactMarkdown>{event.content}</ReactMarkdown>
                </div>
            </article>
        </main>
    );
}