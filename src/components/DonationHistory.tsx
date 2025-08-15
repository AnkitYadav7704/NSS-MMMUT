import React, { useState } from 'react';
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

interface DonationRecord {
  id: string;
  donorName: string;
  bloodGroup: string;
  donationDate: string;
  location: string;
  units: number;
  status: 'completed' | 'pending' | 'cancelled';
}

const mockDonations: DonationRecord[] = [
  {
    id: '1',
    donorName: 'Rahul Kumar',
    bloodGroup: 'O+',
    donationDate: '2024-01-15',
    location: 'MMMUT Medical Center',
    units: 1,
    status: 'completed'
  },
  {
    id: '2',
    donorName: 'Priya Sharma',
    bloodGroup: 'A+',
    donationDate: '2024-02-10',
    location: 'City Blood Bank',
    units: 1,
    status: 'completed'
  },
  {
    id: '3',
    donorName: 'Amit Singh',
    bloodGroup: 'B+',
    donationDate: '2024-01-28',
    location: 'NSS Camp - MMMUT',
    units: 1,
    status: 'completed'
  },
  {
    id: '4',
    donorName: 'Neha Gupta',
    bloodGroup: 'AB+',
    donationDate: '2024-02-25',
    location: 'Emergency Request',
    units: 1,
    status: 'pending'
  }
];

function DonationHistory() {
  const [donations] = useState<DonationRecord[]>(mockDonations);
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'year' | 'all'>('all');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const totalDonations = donations.filter(d => d.status === 'completed').length;
  const totalUnits = donations
    .filter(d => d.status === 'completed')
    .reduce((sum, d) => sum + d.units, 0);

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Donation History</h2>
        
        <div className="flex items-center space-x-4">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value as any)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
            <option value="all">All Time</option>
          </select>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-red-100 text-sm">Total Donations</p>
              <p className="text-3xl font-bold">{totalDonations}</p>
            </div>
            <Award className="h-10 w-10 text-red-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Units Donated</p>
              <p className="text-3xl font-bold">{totalUnits}</p>
            </div>
            <TrendingUp className="h-10 w-10 text-green-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Lives Impacted</p>
              <p className="text-3xl font-bold">{totalUnits * 3}</p>
            </div>
            <Award className="h-10 w-10 text-blue-200" />
          </div>
        </div>
      </div>

      {/* Donations List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Donations</h3>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {donations.map((donation) => (
            <div key={donation.id} className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0">
                <div className="flex items-center space-x-4">
                  <div className="bg-red-100 dark:bg-red-900 rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="text-red-600 dark:text-red-400 font-bold text-sm">
                      {donation.bloodGroup}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {donation.donorName}
                    </h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300 mt-1">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{donation.donationDate}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{donation.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {donation.units} unit{donation.units > 1 ? 's' : ''}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(donation.status)}`}>
                    {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {donations.length === 0 && (
          <div className="px-6 py-12 text-center">
            <Calendar className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-lg">No donation records found</p>
            <p className="text-gray-400 dark:text-gray-500">Start by making your first donation!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DonationHistory;