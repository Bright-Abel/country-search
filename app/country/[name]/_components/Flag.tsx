import Image from "next/image";
import React from "react";

interface Country {
  countryData: {
    flags: {
      png: string;
    };
    coatOfArms: {
      png: string;
    };
    name: {
      common: string;
    };
  };
}

const Flag = ({ countryData }: Country) => {
  console.log(countryData);
  return (
    <div className="mt-6 text-center">
      <h2 className="text-xl font-semibold">Flag (Hover me)</h2>
      <div className="flip-card">
        <div className="flip-card-inner">
          {/* Front: Flag */}
          <div className="flip-card-front">
            <Image
              src={countryData.flags.png}
              alt={`${countryData.name.common} Flag`}
              width={250}
              height={1000}
              className="mx-auto border-2 size-full border-gray-300 rounded-lg"
            />
          </div>
          {/* Back: Coat of Arms */}
          <div className="flip-card-back">
            {countryData.coatOfArms.png ? (
              <Image
                src={countryData.coatOfArms.png}
                alt={`${countryData.name.common} Coat of Arms`}
                width={250}
                height={1000}
                className="mx-auto border-2 object-contain size-full border-gray-300 rounded-lg"
              />
            ) : (
              <div className="size-full flex items-center justify-center">
                <p className="text-gray-500">No Coat of Arms Available</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flag;
