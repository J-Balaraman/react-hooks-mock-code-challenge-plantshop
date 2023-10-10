import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]); // Maintain filtered list

  // Fetch the initial list of plants when the component mounts
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setFilteredPlants(data); // Initialize filtered list with all plants
      });
  }, []);

  // Search callback function
  function handleSearch(query) {
    // Filter the list of plants based on the search query
    const filtered = plants.filter((plant) =>
      plant.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPlants(filtered);
  }

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearch={handleSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
