export interface Presentation {
    title: string;
    type: 'talk' | 'slides' | 'poster';
    url: string;
    relatedProject?: string;
}