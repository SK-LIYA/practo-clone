
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DoctorCard, DoctorProps } from "@/components/doctors/DoctorCard";
import { DoctorFilters } from "@/components/doctors/DoctorFilters";
import { DoctorSearchBar } from "@/components/doctors/DoctorSearchBar";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";

// Sample data
const sampleDoctors: DoctorProps[] = [
  {
    id: 1,
    name: "Dr. Emily Johnson",
    specialty: "Cardiologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 4.9,
    reviewCount: 127,
    availability: "Today, 2:30 PM",
    experience: "15 years",
    location: "New York Medical Center",
    availableToday: true,
    price: "$150",
    features: ["Video Consultation", "Instant Booking"]
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 4.8,
    reviewCount: 94,
    availability: "Tomorrow, 10:00 AM",
    experience: "12 years",
    location: "Columbia Medical Institute",
    availableToday: false,
    price: "$180",
    features: ["In-person only", "Lab Tests Available"]
  },
  {
    id: 3,
    name: "Dr. Sarah Williams",
    specialty: "Pediatrician",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 4.9,
    reviewCount: 156,
    availability: "Today, 3:15 PM",
    experience: "10 years",
    location: "Children's Health Center",
    availableToday: true,
    price: "$120",
    features: ["Video Consultation", "Home Visit Available"]
  },
  {
    id: 4,
    name: "Dr. Robert Davis",
    specialty: "Orthopedic Surgeon",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 4.7,
    reviewCount: 83,
    availability: "Today, 5:30 PM",
    experience: "18 years",
    location: "Orthopedic Specialists",
    availableToday: true,
    price: "$200",
    features: ["Surgery Consult", "Physiotherapy"]
  },
  {
    id: 5,
    name: "Dr. Jennifer Lee",
    specialty: "Dermatologist",
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 4.8,
    reviewCount: 112,
    availability: "Tomorrow, 1:00 PM",
    experience: "8 years",
    location: "Skin Care Clinic",
    availableToday: false,
    price: "$160",
    features: ["Cosmetic Procedures", "Video Consultation"]
  },
  {
    id: 6,
    name: "Dr. David Wilson",
    specialty: "Ophthalmologist",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 4.6,
    reviewCount: 78,
    availability: "Today, 4:45 PM",
    experience: "14 years",
    location: "Vision Care Center",
    availableToday: true,
    price: "$170",
    features: ["Eye Surgery", "Vision Tests"]
  }
];

const DoctorListing = () => {
  const [searchParams] = useSearchParams();
  const [doctors, setDoctors] = useState<DoctorProps[]>(sampleDoctors);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<any>({});
  
  // Apply initial search params if any
  useEffect(() => {
    const search = searchParams.get("search");
    const location = searchParams.get("location");
    const specialty = searchParams.get("specialty");
    
    // In a real app, this would be a server call with these params
    console.log("Initial search params:", { search, location, specialty });
  }, [searchParams]);
  
  const handleSearch = (searchParams: any) => {
    console.log("Search params:", searchParams);
    // In a real app, this would filter doctors based on search criteria
  };
  
  const handleFilterChange = (filters: any) => {
    setActiveFilters(filters);
    console.log("Filter params:", filters);
    // In a real app, this would filter doctors based on criteria
  };
  
  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Find Doctors in Your Area</h1>
          
          <DoctorSearchBar onSearch={handleSearch} toggleMobileFilters={toggleMobileFilters} />
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Mobile filters drawer */}
            {showMobileFilters && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
                <div className="bg-white h-full w-80 p-4 overflow-y-auto">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <Button variant="ghost" size="sm" onClick={toggleMobileFilters}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <DoctorFilters onFilterChange={handleFilterChange} />
                </div>
              </div>
            )}
            
            {/* Desktop filters sidebar */}
            <div className="hidden md:block md:w-1/4 lg:w-1/5">
              <DoctorFilters onFilterChange={handleFilterChange} />
            </div>
            
            {/* Doctor listings */}
            <div className="md:w-3/4 lg:w-4/5">
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-600">
                  {doctors.length} doctors found
                </p>
                <div className="flex items-center">
                  <span className="text-sm mr-2">Sort by:</span>
                  <select className="text-sm border rounded p-1">
                    <option>Relevance</option>
                    <option>Rating: High to Low</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Experience</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-4">
                {doctors.map(doctor => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="mx-auto">
                  Load More Doctors
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DoctorListing;
