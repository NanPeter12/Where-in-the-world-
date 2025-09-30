import SearchWrapper from "./_Components/SearchWrapper/SearchWrapper";
import { getAllCountries } from "./services/countries-services";

export default async function Home() {

  const allCountries = await getAllCountries();

  return (
    <main className="container mx-auto px-4 py-8">
      <SearchWrapper countries={allCountries} />
    </main>
  );
}
