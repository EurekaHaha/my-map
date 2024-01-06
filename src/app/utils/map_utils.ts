import mapboxgl from "maplibre-gl";

export const initMap = (options: any) => {
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
                "tdt-vec": {
                    "type": "raster",
                    "tiles": [`https://t0.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=${key}`],
                    "tileSize": 256
                },
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
        }
    }
}
