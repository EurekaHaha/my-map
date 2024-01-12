import { initMap } from "@/app/utils/map_utils";

class MyMap {
    static mapInstance: MyMap;
    map: any;

    constructor(options: any) {
        if (typeof MyMap.mapInstance === "object") {
            return MyMap.mapInstance;
        }
        console.log('new mymap');
        this.map = this.#initMap(options);
        MyMap.mapInstance = this;
    }

    #initMap(options: any) {
        return initMap(options);
    }

    addPoint() {}

    removePoint() {}

    addLine() {}

    removeLine() {}

    addPoints() {}

    addLines() {}

    clearLines() {}

    clearPoints() {}

    runAnimation() {}

    addAnimation() {}

    removeAnimation() {}
}

export default MyMap;
