import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Searcher } from './searcher';

import { Searchable } from './searchable';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


export class SearchComponent {
    isItemSelected: boolean = false;
    items: Searchable[] = [];
    private searchTerms = new Subject<string>();
    searchText: string;

    constructor(private searcher: Searcher) {
    }

    ngOnInit() {
        const observableItems: Observable<Searchable[]> =
            this.searchTerms
                .debounceTime(300)        // wait for 300ms pause in events
                .distinctUntilChanged()   // ignore if next search term is same as previous
                .switchMap(term => term   // switch to new observable each time
                    ? this.searcher.search(term)
                    // or the observable of empty parties if no search term
                    : Observable.of<Searchable[]>([]))
                .catch(error => {
                    // TODO: real error handling
                    console.log(error);
                    return Observable.of<Searchable[]>([]);
                });

        observableItems.subscribe((data: Searchable[]) => {
            this.items = data;
        });
    }

    search(term: string): void {
        this.isItemSelected = false;
        this.searchText = term;
        this.searchTerms.next(term);
    }


    get existItems(): boolean {
        return !!this.items && this.items.length !== 0;
    }

    onSelect() {
        this.isItemSelected = true;
    }
}
