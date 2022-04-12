import {Loader} from 'google-maps';

const loader = new Loader(process.env.MIX_GOOGLE_MAPS_API_KEY);

export async function showMarker(element, position, zoom = 14, title = "Location") {
    if (element && position) {
        const google = await loader.load();
        const map = new google.maps.Map(document.getElementById(element), {
            zoom,
            center: position,
            disableDefaultUI: true,
            gestureHandling: 'none'

        });

        new google.maps.Marker({
            position,
            map,
            title,
        });
    }
}
