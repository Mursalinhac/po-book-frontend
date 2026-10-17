import Link from 'next/link';
import { Button } from '../components/ui/button';

export default function NotFound() {
  return <section className="empty-page">
    <p className="text-sm font-medium text-muted-foreground">Page not found</p>
    <h1>Let’s get you back to the cars.</h1>
    <p>This page is unavailable. Choose a Corvette model to start or review a purchase order.</p>
    <Button asChild><Link href="/">Back to models</Link></Button>
  </section>;
}
