function describe_city(city: string, country: string = "Default Country"): void {
    console.log(`${city} is in ${country}.`);
  }
  
  // Call the function for three different cities
  describe_city("Karachi", "Pakistan");
  describe_city("Paris");
  describe_city("New York", "USA");
  