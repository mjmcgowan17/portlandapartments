import { apartments } from "@/data/apartments";
import ListingCard from "@/components/ListingCard";
import MapLoader from "@/components/MapLoader";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1>Portland Apartments</h1>
          <nav>
            <a href="#map">Map</a>
            <a href="#listings">Listings</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h2>Find Your Next Home in Portland</h2>
          <p>
            Explore apartments across Portland&apos;s best neighborhoods. From
            the Pearl District to Sellwood, discover your perfect place.
          </p>
        </div>
      </section>

      <section id="map" className="map-section">
        <div className="container">
          <h3>Explore Neighborhoods</h3>
          <div className="map-wrapper">
            <link
              rel="stylesheet"
              href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
            />
            <MapLoader apartments={apartments} />
          </div>
        </div>
      </section>

      <section id="listings" className="listings-section">
        <div className="container">
          <h3>Available Apartments</h3>
          <div className="listings-grid">
            {apartments.map((apt) => (
              <ListingCard key={apt.id} apartment={apt} />
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>Portland Apartments &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
}
