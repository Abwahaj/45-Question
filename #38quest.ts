function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  
  // Call the function with three city-country pairs and print the returned values
  const city1 = city_country("Lahore", "Pakistan");
  const city2 = city_country("Paris", "France");
  const city3 = city_country("New York", "USA");
  
  console.log(city1);
  console.log(city2);
  console.log(city3);
  