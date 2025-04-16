
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Sample data for featured doctors
const featuredDoctors = [
  {
    id: 1,
    name: "Dr. Emily Johnson",
    specialty: "Cardiologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 4.9,
    reviewCount: 127,
    availableToday: true,
    experience: "15 years",
    location: "New York Medical Center"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 4.8,
    reviewCount: 94,
    availableToday: false,
    experience: "12 years",
    location: "Columbia Medical Institute"
  },
  {
    id: 3,
    name: "Dr. Sarah Williams",
    specialty: "Pediatrician",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 4.9,
    reviewCount: 156,
    availableToday: true,
    experience: "10 years",
    location: "Children's Health Center"
  },
  {
    id: 4,
    name: "Dr. Robert Davis",
    specialty: "Orthopedic Surgeon",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 4.7,
    reviewCount: 83,
    availableToday: true,
    experience: "18 years",
    location: "Orthopedic Specialists"
  }
];

export function FeaturedDoctorsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Doctors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Top-rated healthcare professionals trusted by thousands of patients
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white border border-gray-100 rounded-lg overflow-hidden transition-all hover:shadow-md">
              <div className="p-4">
                <div className="flex items-center space-x-4">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{doctor.name}</h3>
                    <p className="text-gray-500 text-sm">{doctor.specialty}</p>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm ml-1">{doctor.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">({doctor.reviewCount})</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Experience:</span> {doctor.experience}
                    </div>
                    {doctor.availableToday && (
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Available Today
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{doctor.location}</p>
                  <Link to={`/doctor/${doctor.id}`}>
                    <Button className="w-full">Book Appointment</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/find-doctors"
            className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
          >
            View all doctors
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
