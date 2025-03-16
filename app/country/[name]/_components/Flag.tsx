import {
  FlipCardContainer,
  FlipCardBack,
  FlipCardFront,
  FlipCardInner,
  Container,
  H2,
  Img,
  NoArms,
} from "@/styles/flag";
import Image from "next/image";

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
  return (
    <Container>
      <H2>Flag (Hover me)</H2>
      <FlipCardContainer>
        <FlipCardInner>
          {/* Front: Flag */}
          <FlipCardFront>
            <Img
              src={countryData.flags.png}
              alt={`${countryData.name.common} Flag`}
              width={250}
              height={1000}
            />
          </FlipCardFront>
          {/* Back: Coat of Arms */}
          <FlipCardBack>
            {countryData.coatOfArms.png ? (
              <Img
                src={countryData.coatOfArms.png}
                alt={`${countryData.name.common} Coat of Arms`}
                width={250}
                height={1000}
              />
            ) : (
              <NoArms>
                <p>No Coat of Arms Available</p>
              </NoArms>
            )}
          </FlipCardBack>
        </FlipCardInner>
      </FlipCardContainer>
    </Container>
  );
};

export default Flag;
