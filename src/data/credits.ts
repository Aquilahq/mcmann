export type Credit = {
  title: string;
  role: string;
  format: "TV" | "Film" | "Short";
  year: string;
  detail?: string;
  department: "Actor" | "Crew" | "Writer" | "Producer" | "Production";
};

// Sourced from IMDb: https://www.imdb.com/name/nm2282094/
export const credits: Credit[] = [
  { title: "Fuller House", role: "Larry (uncredited)", format: "TV", year: "2017", detail: "1 episode", department: "Actor" },
  { title: "Fifty Shades of Black", role: "Sick Airline Passenger (uncredited)", format: "Film", year: "2016", department: "Actor" },
  { title: "The Middle", role: "VP of Product Development / Birthday Party Guest", format: "TV", year: "2015–2016", detail: "2 episodes", department: "Actor" },
  { title: "Shameless", role: "Guard (uncredited)", format: "TV", year: "2016", detail: "1 episode", department: "Actor" },
  { title: "Weird City: Power Gamers", role: "George", format: "Short", year: "2015", department: "Actor" },
  { title: "Coffee Town", role: "Bar Patron (uncredited)", format: "Film", year: "2013", department: "Actor" },
  { title: "Live Free or Die Hard", role: "Decontaminated FBI Agent", format: "Film", year: "2007", department: "Actor" },
  { title: "The Fall", role: "Attorney", format: "Film", year: "2006", detail: "Credited as James R. McMann", department: "Actor" },
  { title: "Pushing Daisies", role: "Mr. Biggs", format: "TV", year: "2007–2009", detail: "6 episodes", department: "Actor" },
  { title: "Close to Home", role: "Detective / Attorney", format: "TV", year: "2005–2007", detail: "7 episodes", department: "Actor" },
  { title: "Las Vegas", role: "Pit Boss / Boxman", format: "TV", year: "2003–2008", detail: "Multiple episodes", department: "Actor" },
  { title: "Crossing Jordan", role: "James the Videographer / News Cameraman", format: "TV", year: "2001–2007", detail: "Multiple episodes", department: "Actor" },
  { title: "My Name Is Earl", role: "Club Patron / Teacher / Winky Dinky Employee", format: "TV", year: "2005–2009", detail: "3 episodes", department: "Actor" },
  { title: "The West Wing", role: "Secret Service Agent / Press / Guest", format: "TV", year: "2000–2006", detail: "Multiple episodes", department: "Actor" },
  { title: "The Other Mall", role: "Angry Parent", format: "Film", year: "—", detail: "Credited as James R. McMann", department: "Actor" },
  { title: "Austin & Ally", role: "Big Airline Passenger", format: "TV", year: "2012", detail: "1 episode", department: "Actor" },
  { title: "Hollywoo", role: "American Tourist (uncredited)", format: "Film", year: "2011", department: "Actor" },
  { title: "Enlightened", role: "Cogentiva Employee (uncredited)", format: "TV", year: "2011", detail: "1 episode", department: "Actor" },
  { title: "Raising Hope", role: "Execution Witness (uncredited)", format: "TV", year: "2010", detail: "1 episode", department: "Actor" },
  { title: "Hung", role: "Alumni Baseball Player (uncredited)", format: "TV", year: "2010", detail: "1 episode", department: "Actor" },
  { title: "Jonas", role: "Beached Sunbather (uncredited)", format: "TV", year: "2010", detail: "1 episode", department: "Actor" },
  { title: "State of the Union", role: "Jeffery (uncredited)", format: "TV", year: "2010", detail: "2 episodes", department: "Actor" },
  { title: "Bones", role: "Dave / Santa #5 (uncredited)", format: "TV", year: "2007–2010", detail: "2 episodes", department: "Actor" },
  { title: "The Office", role: "Warehouse Guy (uncredited)", format: "TV", year: "2009", detail: "1 episode", department: "Actor" },
  { title: "The Last Man on Earth", role: "Stand-in · Photo double: Mel Rodriguez", format: "TV", year: "2015–2017", detail: "4 episodes", department: "Crew" },
  { title: "Deja Vu", role: "Stand-in (as James R. McMann)", format: "Film", year: "2006", department: "Crew" },
  { title: "Gone", role: "Creator · Story", format: "TV", year: "2011", detail: "1 episode", department: "Writer" },
  { title: "Gone", role: "Producer", format: "TV", year: "2011", detail: "1 episode", department: "Producer" },
  { title: "Sumo Joe", role: "Co-producer", format: "Film", year: "2010", department: "Producer" },
  { title: "Close to Home", role: "Production assistant (uncredited)", format: "TV", year: "2006", detail: "1 episode", department: "Production" },
];

export const departments = ["All", "Actor", "Crew", "Writer", "Producer", "Production"] as const;
