export interface Location {
    id: string;
    name: string;
    description: string;
    address: string;
    phone: string;
    email: string;
}

const makeLocation = (name: string): Location => ({
    id: name.toLowerCase().replace(/\s+/g, '-'),
    name,
    description: `Expert astrology and spiritual guidance services available in ${name}.`,
    address: `${name}, USA`,
    phone: '+1(704)236-6628',
    email: 'mastergautham2006@gmail.com'
});

export const locations: Location[] = [
    'New York City', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
    'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose',
    'Austin', 'Jacksonville', 'San Francisco', 'Seattle', 'Miami',
    'Atlanta', 'Las Vegas', 'Boston', 'Washington', 'Charlotte',
    'Raleigh', 'Denver', 'Nashville', 'Orlando', 'Tampa',
    'Portland', 'Detroit', 'Minneapolis', 'New Orleans', 'Salt Lake City',
    'Kansas City', 'Indianapolis', 'Columbus', 'Cleveland', 'Cincinnati',
    'St. Louis', 'Milwaukee', 'Baltimore', 'Pittsburgh', 'Sacramento',
    'Memphis', 'Louisville', 'Oklahoma City', 'Albuquerque', 'Buffalo'
].map(makeLocation);

export const getLocationById = (id: string): Location | undefined => {
    return locations.find(location => location.id === id);
};
