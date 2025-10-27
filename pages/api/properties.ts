import { NextApiRequest, NextApiResponse } from "next";
import { Property } from "@/interfaces";

const properties: Property[] = [
  {
    id: "1",
    title: "Cozy Apartment",
    description: "Nice 2 bedroom apartment",
    price: 120,
    image: "/assets/image3.png",
    location: "Kigali",
  },
  {
    id: "2",
    title: "Modern Villa",
    description: "Luxury villa with pool",
    price: 500,
    image: "/assets/image2.png",
    location: "Musanze",
  },
  {
    id: "3",
    title: "Beach House",
    description: "Ocean view with private beach",
    price: 350,
    image: "/assets/image3.png",
    location: "Gisenyi",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Property[]>
) {
  res.status(200).json(properties);
}
