import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// gets absolute path to all mds
const eventsDirectory = path.join(process.cwd(), 'content/events');


// typescript interface for what md stores
export interface EventData {
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  tags: string[];
  description: string;
  content: string;
}

// Get all event files
export function getAllEvents(): EventData[] {
  // Get file names under /content/events
  const fileNames = fs.readdirSync(eventsDirectory);
  
  const allEventsData = fileNames.map((fileName) => {
    // Remove .md from file name to get slug
    const slug = fileName.replace(/\.md$/, '');
    
    // Read markdown file as string
    const fullPath = path.join(eventsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Use gray-matter to parse the metadata section
    const { data, content } = matter(fileContents);
    
    // Process tags from string to array
    const tags = data.tags ? data.tags.split(',').map((tag: string) => tag.trim()) : [];
    
    // Combine the data with the slug
    return {
      slug,
      content,
      ...data,
      tags,
    } as EventData;
  });
  
  // Sort events by date (newest first)
  return allEventsData.sort((a, b) => {
    const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  const now = new Date();
  
  // Put future events first
  const aIsFuture = dateA >= now;
  const bIsFuture = dateB >= now;
  
  if (aIsFuture && !bIsFuture) return -1;
  if (!aIsFuture && bIsFuture) return 1;
  
  // If both future or both past, sort by date
  // Future events: earliest first
  // Past events: most recent first
  if (aIsFuture) {
    return dateA.getTime() - dateB.getTime(); // Ascending for future
  } else {
    return dateB.getTime() - dateA.getTime(); // Descending for past
  }
  });
}

// Get a single event by slug
export function getEventBySlug(slug: string): EventData | undefined {
  try {
    const fullPath = path.join(eventsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    const { data, content } = matter(fileContents);
    
    const tags = data.tags ? data.tags.split(',').map((tag: string) => tag.trim()) : [];
    
    return {
      slug,
      content,
      ...data,
      tags,
    } as EventData;
  } catch {
    return undefined;
  }
}

// Get all slugs for static generation
export function getAllEventSlugs() {
  const fileNames = fs.readdirSync(eventsDirectory);
  
  return fileNames.map((fileName) => {
    return {
      slug: fileName.replace(/\.md$/, ''),
    };
  });
}