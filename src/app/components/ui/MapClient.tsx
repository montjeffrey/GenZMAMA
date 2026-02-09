"use client";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useMemo, useCallback, useState } from "react";

const containerStyle = {
    width: "100%",
    height: "100%",
};

// Wharton, NJ coordinates
const center = {
    lat: 40.8956,
    lng: -74.5828,
};

// Custom Map Style for "Gen Z Neon" Aesthetic
const mapStyles = [
    {
        elementType: "geometry",
        stylers: [{ color: "#212121" }],
    },
    {
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
    },
    {
        elementType: "labels.text.fill",
        stylers: [{ color: "#757575" }],
    },
    {
        elementType: "labels.text.stroke",
        stylers: [{ color: "#212121" }],
    },
    {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [{ color: "#757575" }],
    },
    {
        featureType: "administrative.country",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9e9e9e" }],
    },
    {
        featureType: "administrative.land_parcel",
        stylers: [{ visibility: "off" }],
    },
    {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#bdbdbd" }],
    },
    {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#757575" }],
    },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#181818" }],
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#616161" }],
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#1b1b1b" }],
    },
    {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [{ color: "#2c2c2c" }],
    },
    {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#8a8a8a" }],
    },
    {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ color: "#fe019a" }], // Neon Pink for main roads
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#fe019a" }], // Neon Pink for highways
    },
    {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
    },
    {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [{ color: "#fe019a" }],
    },
    {
        featureType: "road.local",
        elementType: "geometry.fill",
        stylers: [{ color: "#39ff14" }, { weight: 0.5 }, { saturation: -50 }, { lightness: -20 }] // Neon Green toned down
    },
    {
        featureType: "transit",
        elementType: "labels.text.fill",
        stylers: [{ color: "#757575" }],
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#000000" }],
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#3d3d3d" }],
    },
];

interface MapClientProps {
    className?: string;
}

export default function MapClient({ className }: MapClientProps) {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    });

    const [map, setMap] = useState<google.maps.Map | null>(null);

    const onLoad = useCallback(function callback(map: google.maps.Map) {
        setMap(map);
    }, []);

    const onUnmount = useCallback(function callback(map: google.maps.Map) {
        setMap(null);
    }, []);

    const options = useMemo(
        () => ({
            styles: mapStyles,
            disableDefaultUI: true, // Clean look, no zoom controls etc.
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
            draggable: false, // Prevent scrolling issues
            scrollwheel: false,
            overviewMapControl: false,
        }),
        []
    );

    if (!isLoaded) {
        return <div className={`flex items-center justify-center bg-stone-100 ${className}`}>LOADING MAP...</div>;
    }

    return (
        <div className={className}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={options}
            >
                <Marker position={center} />
            </GoogleMap>
        </div>
    );
}
