import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Heart } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  organizer: string;
  expectedDonors: number;
  registeredDonors: number;
  status: 'upcoming' | 'ongoing' | 'completed';
  category: 'camp' | 'awareness' | 'emergency';
}

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Annual Blood Donation Camp 2024',
    description: 'Join us for our annual blood donation camp at MMMUT campus. Free health checkup and refreshments for all donors.',
    date: '2024-03-15',
    time: '09:00',
    location: 'MMMUT Main Auditorium',
    organizer: 'NSS MMMUT',
    expectedDonors: 200,
    registeredDonors: 87,
    status: 'upcoming',
    category: 'camp'
  },
  {
    id: '2',
    title: 'Emergency Blood Drive',
    description: 'Urgent blood donation drive for accident victims at local hospital. All blood groups needed.',
    date: '2024-02-28',
    time: '10:00',
    location: 'City Hospital, Allahabad',
    organizer: 'Red Cross Society',
    expectedDonors: 50,
    registeredDonors: 23,
    status: 'upcoming',
    category: 'emergency'
  },
  {
    id: '3',
    title: 'Blood Donation Awareness Workshop',
    description: 'Educational session on importance of blood donation and health benefits for donors.',
    date: '2024-03-05',
    time: '14:00',
    location: 'MMMUT Conference Hall',
    organizer: 'NSS MMMUT',
    expectedDonors: 100,
    registeredDonors: 45,
    status: 'upcoming',
    category: 'awareness'
  }
];

function UpcomingEvents() {
  const [events] = useState<Event[]>(mockEvents);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'camp':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'emergency':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'awareness':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'ongoing':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'completed':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const filteredEvents = events.filter(event => 
    selectedCategory === 'all' || event.category === selectedCategory
  );

  const handleRegister = (eventId: string) => {
    alert('Registration functionality will be implemented with backend integration.');
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Upcoming Events</h2>
        
        <div className="flex items-center space-x-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="all">All Categories</option>
            <option value="camp">Blood Camps</option>
            <option value="emergency">Emergency Drives</option>
            <option value="awareness">Awareness Programs</option>
          </select>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {event.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                {event.description}
              </p>

              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-red-500" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-red-500" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-red-500" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-red-500" />
                  <span>Organized by: {event.organizer}</span>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-300">Registration Progress</span>
                  <span className="text-red-600 dark:text-red-400 font-medium">
                    {event.registeredDonors}/{event.expectedDonors} donors
                  </span>
                </div>
                <div className="mt-2 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${Math.min((event.registeredDonors / event.expectedDonors) * 100, 100)}%`
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                  <Heart className="h-4 w-4" />
                  <span>{event.registeredDonors} registered</span>
                </div>
                <button
                  onClick={() => handleRegister(event.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-gray-500 dark:text-gray-400 text-lg">No events found</p>
          <p className="text-gray-400 dark:text-gray-500">Check back later for upcoming events!</p>
        </div>
      )}
    </div>
  );
}

export default UpcomingEvents;