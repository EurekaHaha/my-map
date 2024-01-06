'use client';

import { getInitOptions } from '@/app/utils/map_utils';
import MyMap from '../map/map';
import { useEffect } from 'react';
import { TIANDITU_KEY } from '@/app/utils/assets';

const MapId = 'map';

const MainMap = () => {
    let myMap: any;
    useEffect(() => {
        console.log('init map');
        const options = getInitOptions({ id: MapId, key: TIANDITU_KEY });
        myMap = new MyMap(options);
        return () => {
            const marker1 = new mapboxgl.Marker()
                .setLngLat([12.554729, 55.70651])
                .addTo(myMap.map);
        };
    }, []);

    return (
        <div id={MapId} className="w-full h-full inset-0 overflow-hidden"></div>
    );
};

export default MainMap;
