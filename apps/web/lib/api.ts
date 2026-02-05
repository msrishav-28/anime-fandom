const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

export interface Artifact {
    _id: string;
    slug: string;
    wiki_slug: string;
    type: 'character' | 'item' | 'location';
    title: string;
    subtitle?: string;
    hero_image?: string;
    data: Record<string, any>;
    ram_cost: number;
}

export async function getArtifact(wiki_slug: string, slug: string): Promise<Artifact | null> {
    try {
        const res = await fetch(`${API_URL}/wikis/${wiki_slug}/artifacts/${slug}`, {
            cache: 'no-store', // Next.js 15: opt-out of data caching for dynamic data
        });

        if (!res.ok) {
            if (res.status === 404) return null;
            throw new Error('Failed to fetch artifact');
        }

        return res.json();
    } catch (error) {
        console.error('API Error:', error);
        return null;
    }
}

export async function createArtifact(wiki_slug: string, data: Partial<Artifact>) {
    const res = await fetch(`${API_URL}/wikis/${wiki_slug}/artifacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error('Failed to create artifact');
    return res.json();
}

export async function awardRAM(email: string, amount: number, source: string) {
    try {
        // Mock email for MVP if not auth'd
        const userEmail = email || 'admin@neuroarchive.com';

        const res = await fetch(`${API_URL}/users/${userEmail}/ram`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount, source }),
        });

        if (!res.ok) throw new Error('Failed to award RAM');
        return res.json();
    } catch (error) {
        console.error('RAM Award Error:', error);
        return null;
    }
}

export async function getTheories(wiki_slug: string, artifact_slug: string) {
    try {
        const res = await fetch(`${API_URL}/wikis/${wiki_slug}/artifacts/${artifact_slug}/theories`, {
            cache: 'no-store'
        });
        if (!res.ok) return [];
        return res.json();
    } catch {
        return [];
    }
}

export async function createTheory(wiki_slug: string, artifact_slug: string, content: string, userEmail?: string) {
    try {
        const res = await fetch(`${API_URL}/wikis/${wiki_slug}/artifacts/${artifact_slug}/theories`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content, userEmail }),
        });
        if (!res.ok) throw new Error('Failed to post theory');
        return res.json();
    } catch (error) {
        console.error('Theory Post Error:', error);
        throw error;
    }
}
