import { PropertyCardProps } from "@/interfaces";

const PropertyDetail: React.FC<PropertyCardProps> = ({ property }) => {
  const { id, title, description, price, image, location } = property;
  return (
    <div className="border rounded-lg overflow-hidden shadow-md bg-white">
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <h3 className="text-lg font-semibold">{description}</h3>
        <p className="text-gray-600">{location}</p>
        <p className="text-gray-600">${price} / night</p>
        <img className="text-yellow-500" src={image}></img>
        <p>{id}</p>
      </div>
    </div>
  );
};

export default PropertyDetail;
