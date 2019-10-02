import { Component, OnInit } from '@angular/core';

import { MetaDocument } from '../../model/meta-document';
import { MetaTagService } from '../../service/meta-tag.service';

@Component({
  selector: 'app-meta-tags',
  templateUrl: './meta-tags.component.html',
  styleUrls: ['./meta-tags.component.css']
})
export class MetaTagsComponent implements OnInit {
    url: string;
    doc: MetaDocument;
    
    constructor(private metaTagService: MetaTagService) { }

    ngOnInit() {
        this.doc = new MetaDocument();
    }

    onFetch(): void {
        this.metaTagService.fetchUrl(this.url).subscribe(
            data => {
                this.doc = new MetaDocument();
                const parser = new DOMParser();
                const document = parser.parseFromString(data, 'text/html');

				let index;
				const tags = document.getElementsByTagName('meta');
				console.log(tags);
				console.log(tags.length);
				for (index = 0; index < tags.length; index++) {
					console.log(tags[index]);
                    const property = tags[index].attributes.getNamedItem('property');

                    if (property) {
                        console.log(tags[index].content + '\t' + property.value);
                        this.doc.addTag(property.value, tags[index].content);
                    }

				}
            },
            error => { console.error('ERROR -> ' + error); }
        );
    }

}
