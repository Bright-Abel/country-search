import CountryDetails from "./_components/CountryDetails";

const page = async ({ params }: SearchParamProps) => {
  const type = (await params)?.name as string;

  return <CountryDetails country={type.replace(/-/g, " ")} />;
};

export default page;
