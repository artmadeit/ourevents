import { Observable } from 'rxjs/Observable';
import { Searchable } from './searchable';

export interface Searcher {
    search(term: string): Observable<Searchable[]>;
}
