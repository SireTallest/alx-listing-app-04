import { PropertyCardProps } from "@/interfaces";

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { id, title, description, price, image, location } = property;

  return (
    <div className="border rounded-lg overflow-hidden shadow-md bg-white">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <p className="text-gray-600 mt-2">{location}</p>
        <p className="text-gray-800 font-bold mt-2">${price} / night</p>
        <p className="text-gray-800 font-bold mt-2">{id}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
