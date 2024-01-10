"use client"
export const TOC = (content: string) => {
    const headings = content.match(/^###\s(.*)/gm);
    if (!headings) return [];

    return headings.map(heading => {
        // Remove markdown '#' characters
        const title = heading.replace(/^###\s/, '');
        const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');

        return { id, title };
    });
};
