import { MetaTag } from './meta-tag';

export class MetaDocument {
    tags: MetaTag[] = [];
    
    public addTag(property: string, value: string): void {
        const tag = new MetaTag();
        tag.property = property;
        tag.value = value;

		this.tags.push(tag);
    }
}