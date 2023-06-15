import Image from "next/image";
import { Hero, Searchbar, CustomFilter, CarCard } from "../../components";
import { fetchCars } from "../../utils";

export interface Car {
  city_mpg: number,
  class: string,
  combination_mpg: number,
  cylinders: number,
  displacement: number,
  drive: string,
  fuel_type: string,
  highway_mpg: number,
  make: string,
  model: string,
  transmission: string,
  year: number
}

export default async function Home() {
  const allcars = await fetchCars()

  const isDataEmpty = allcars && allcars.length === 0 || allcars === undefined || allcars === null

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car catalogue</h1>
          <p>Explore the car you might like</p>
        </div>
        <div className="home__filters">
          <Searchbar />
          <div className="home__filter-container">
            {/* <CustomFilter title="fuel" />
            <CustomFilter title="year" /> */}
            {!isDataEmpty ? (<section>
              <div className="home__cars-wrapper">
                {allcars?.map((car: Car) => (
                  <CarCard car={car} />
                ))}
              </div>
            </section>): (<h2>we don't</h2>)}
          </div>
        </div>
      </div>
    </main>
  );
}
