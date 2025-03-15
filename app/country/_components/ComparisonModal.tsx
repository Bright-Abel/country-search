import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import { IoClose } from "react-icons/io5";
import Chart from "./Chart";

interface Props {
  length: number;
  countries: Country[];
}

const ComparisonModal = ({ length, countries }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const formattedData = countries.map((country) => ({
    name: country.name.common,
    //  GDP: country.GDP,
    Population: Number(country.population),
    Area: Number(country.area),
  }));
  return (
    <>
      {length > 1 && (
        <button
          onClick={onOpen}
          aria-label="Open Comparison Modal"
          type="button"
          className="w-[200px] outline-none focus:outline-none hover:bg-opacity-85 duration-300 flex cursor-pointer justify-center items-center text-base font-bold h-[40px] rounded text-light-100 dark:text-light-100 bg-brand-100 dark:bg-brand-200"
        >
          Compare Country
        </button>
      )}
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        placement="center"
        hideCloseButton
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
        // onOpenChange={onOpenChange}
      >
        <ModalContent className="rounded-lg w-[90%] h-[60%] max-w-[800px] py-2 shadow-lg  bg-white dark:bg-dark-400">
          {(onClose) => (
            <>
              <ModalHeader className=" w-full flex  justify-between px-4 text-dark-300 dark:text-light-500">
                <div className="flex flex-col px-0">
                  <h2 className="">Compare country</h2>
                  <div className="flex items-center gap-2">
                    {countries.map((country, index) => (
                      <p className="text-sm" key={country.name.common}>
                        {index > 0 && index === countries.length - 1
                          ? "and "
                          : index > 0
                          ? ","
                          : ""}
                        {country.name.common}
                      </p>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  className="cursor-pointer"
                  onClick={onOpenChange}
                >
                  <IoClose className="text-xl" />
                </button>
              </ModalHeader>
              <ModalBody className="w-full px-4">
                <Chart data={formattedData} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ComparisonModal;
