import { MAPBOX_TOKEN } from "./assets";

export const initMap = (options: any) => {
    mapboxgl.accessToken = MAPBOX_TOKEN;
    return new mapboxgl.Map(options);
};

export const getInitOptions = (options: any) => {
    const { id, key } = options;
    return {
        container: id,
        style: {
            "version": 8,
            "id": "43f36e14-e3f5-43c1-84c0-50a9c80dc5c7",
            "sources": {
                // 瓦片矢量图信息
                "tdt-vec": {
                    "type": "raster",
                    "tiles": [`https://t0.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=${key}`],
                    "tileSize": 256
                },
                // 瓦片标注信息
                "tdt-cva": {
                    "type": "raster",
                    "tiles": [`https://t0.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=${key}`],
                    "tileSize": 256
                }
            },
            "layers": [
                {
                    "id": "tianditu-tiles-layer",
                    "type": "raster",
                    "source": "tdt-vec",
                },
                {
                    "id": "tianditu-labels-layer",
                    "type": "raster",
                    "source": "tdt-cva",
                }
            ]
        },
        center: [116.4, 39.9],
        zoom: 9
    }
}
