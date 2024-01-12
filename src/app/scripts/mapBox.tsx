import Script from 'next/script';

const MapBox = {
    Comp: () => (
        <Script
            src="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js"
            strategy="beforeInteractive"
        />
    ),
    key: 'mapbox',
};

export default MapBox;
