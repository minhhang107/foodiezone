import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
const locationIcon = new Icon({
  iconUrl: '/location.svg',
  iconSize: [25, 25]
});

type Props = {
  coord: number[];
};

const Map = ({ coord }: Props) => {
  return (
    <MapContainer
      style={{ height: '60vh', width: '100%' }}
      center={[coord[1], coord[0]]}
      zoom={15}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[coord[1], coord[0]]} icon={locationIcon}></Marker>
    </MapContainer>
  );
};

export default Map;
