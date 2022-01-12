export class SearchContext {
    take: number;
    skip: number;
    searchText: string;

    constructor(take: number, skip: number, searchText: string) { //pas necessaire penser a la virer
        this.take = take;
        this.skip = skip;
        this.searchText = searchText;
    }
}
