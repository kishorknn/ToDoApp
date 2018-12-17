export class Todo {
    id: number;
    title: string = 'Read SitePoint article';
    complete: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
