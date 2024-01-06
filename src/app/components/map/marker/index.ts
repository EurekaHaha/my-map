class MyMarker {
    markers: never[] | undefined;
    static instance: any;
    constructor() {
        if (typeof MyMarker.instance === "object") {
            return MyMarker.instance;
        }

        MyMarker.instance = this;
    }
}
