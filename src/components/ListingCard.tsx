import type { Apartment } from "@/data/apartments";

interface ListingCardProps {
  apartment: Apartment;
}

export default function ListingCard({ apartment }: ListingCardProps) {
  const bedLabel =
    apartment.bedrooms === 0 ? "Studio" : `${apartment.bedrooms} Bed`;

  return (
    <div className="listing-card">
      <h4>{apartment.name}</h4>
      <div className="neighborhood">{apartment.neighborhood}</div>
      <div className="details">
        <span>{bedLabel}</span>
        <span>{apartment.bathrooms} Bath</span>
        <span>{apartment.sqft.toLocaleString()} sqft</span>
      </div>
      <div className="price">${apartment.price.toLocaleString()}/mo</div>
      <div className="amenities">
        {apartment.amenities.map((a) => (
          <span key={a} className="amenity">
            {a}
          </span>
        ))}
      </div>
    </div>
  );
}
