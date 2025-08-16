import React, { useState } from 'react';
import { Users, Heart, Calendar, Search, Filter, Plus } from 'lucide-react';
import DonorList from '../components/DonorList';
import BloodRequest from '../components/BloodRequest';
import DonationHistory from '../components/DonationHistory';
import UpcomingEvents from '../components/UpcomingEvents';
import HealthTips from '../components/HealthTips';
import { Link } from 'react-router-dom';

type TabType = 'donors' | 'request' | 'history' | 'events' | 'tips';

function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('donors');

  const tabs = [
    { id: 'donors' as TabType, label: 'Donor List', icon: Users },
    { id: 'request' as TabType, label: 'Request Blood', icon: Heart },
    { id: 'history' as TabType, label: 'Donation History', icon: Calendar },
    { id: 'events' as TabType, label: 'Upcoming Events', icon: Calendar },
    { id: 'tips' as TabType, label: 'Health Tips', icon: Heart },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'donors':
        return <DonorList />;
      case 'request':
        return <BloodRequest />;
      case 'history':
        return <DonationHistory />;
      case 'events':
        return <UpcomingEvents />;
      case 'tips':
        return <HealthTips />;
      default:
        return <DonorList />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">NSS MMMUT Blood Donation Camp</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our mission to save lives through blood donation. Every drop counts in making a difference in someone's life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>Register as Donor</span>
            </Link>
            <button
  onClick={() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
    setActiveTab('request')
  }}
  className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-400 transition-colors inline-flex items-center justify-center space-x-2"
>
  <Heart className="h-5 w-5" />
  <span>Request Blood</span>
</button>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 dark:bg-red-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">500+</h3>
              <p className="text-gray-600 dark:text-gray-400">Registered Donors</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 dark:bg-red-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">1200+</h3>
              <p className="text-gray-600 dark:text-gray-400">Lives Saved</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 dark:bg-red-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">50+</h3>
              <p className="text-gray-600 dark:text-gray-400">Donation Camps</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 dark:bg-red-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">24/7</h3>
              <p className="text-gray-600 dark:text-gray-400">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="flex overflow-x-auto">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-6 py-4 font-medium whitespace-nowrap transition-colors ${
                        activeTab === tab.id
                          ? 'border-b-2 border-red-600 text-red-600 dark:text-red-400'
                          : 'text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;