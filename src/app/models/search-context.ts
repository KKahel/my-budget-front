export class SearchContext {
    take: number;
    skip: number;

    //searchText ?? 

    constructor(take: number, skip: number) {
        this.take = take;
        this.skip = skip;
    }
}
