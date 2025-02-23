import { PropertyProps } from '@/interfaces/index'
import { useState } from 'react'
import Button from '../common/Button'

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({
  property,
}) => {
  const [activeTab, setActiveTab] = useState(0)
  const taps = ['Description', 'What we offer', 'Reviews', 'About host']
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold ">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500">{property.rating} stars</span>
        <span>
          {property.address.city}, {property.address.country}
        </span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <img
          src={property.image}
          alt={property.name}
          className="col-span-2 w-full h-96 object-cover rounded-lg"
        />
        <img
          src={property.image}
          alt={property.name}
          className="col-span-2 col-start-3 w-full h-96 object-cover rounded-lg"
        />

        {/* Add more images */}
      </div>
      <div>
        {taps.map((tap, index) => (
          <Button>{tap}</Button>
        ))}
      </div>
      {/* Description */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p className="text-[#161117] font-normal text-base max-w-2xl">
          {property.description}
        </p>
      </div>

      {/* Amenities */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">What this place offers</h2>
        <ul className="flex flex-wrap space-x-4">
          {property.category.map((amenity, index) => (
            <li key={index} className=" p-2 rounded-md">
              {amenity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PropertyDetail
