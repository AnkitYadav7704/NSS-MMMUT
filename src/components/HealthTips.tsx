import React from 'react';
import { Heart, Activity, Apple, Shield, Clock, AlertCircle } from 'lucide-react';

const healthTips = [
  {
    id: 1,
    category: 'Before Donation',
    icon: Clock,
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    tips: [
      'Get a good night\'s sleep (at least 6-8 hours)',
      'Eat a healthy meal 3-4 hours before donation',
      'Drink plenty of water and stay hydrated',
      'Avoid alcohol 24 hours before donation',
      'Avoid smoking 2 hours before donation',
      'Bring valid ID and donor card if you have one'
    ]
  },
  {
    id: 2,
    category: 'During Donation',
    icon: Activity,
    color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    tips: [
      'Relax and breathe normally during the process',
      'Squeeze your hand every few seconds to help blood flow',
      'Alert staff if you feel dizzy or unwell',
      'Stay in the donation chair until staff says it\'s safe to get up',
      'The entire process takes about 10-15 minutes',
      'Don\'t look at the needle if you\'re squeamish'
    ]
  },
  {
    id: 3,
    category: 'After Donation',
    icon: Heart,
    color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    tips: [
      'Rest for 10-15 minutes before leaving',
      'Keep the bandage on for several hours',
      'Drink extra fluids for the next 24-48 hours',
      'Eat iron-rich foods to help replace lost iron',
      'Avoid heavy lifting with your donation arm',
      'Contact us if you experience any unusual symptoms'
    ]
  },
  {
    id: 4,
    category: 'General Health',
    icon: Apple,
    color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    tips: [
      'Maintain a balanced diet rich in iron and vitamins',
      'Exercise regularly to maintain good health',
      'Get regular health check-ups',
      'Stay hydrated throughout the day',
      'Avoid smoking and excessive alcohol consumption',
      'Manage stress through relaxation techniques'
    ]
  },
  {
    id: 5,
    category: 'Eligibility',
    icon: Shield,
    color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    tips: [
      'Must be between 18-65 years old',
      'Weight should be at least 50 kg',
      'Hemoglobin level should be at least 12.5 g/dL',
      'Should not have donated blood in the last 3 months',
      'Must be free from infections and chronic diseases',
      'Blood pressure should be within normal range'
    ]
  },
  {
    id: 6,
    category: 'Warning Signs',
    icon: AlertCircle,
    color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    tips: [
      'Contact us if you develop flu-like symptoms within 48 hours',
      'Seek medical attention for persistent dizziness or weakness',
      'Report any signs of infection at the needle site',
      'Call if you experience severe bruising or swelling',
      'Don\'t donate if you feel unwell on donation day',
      'Inform staff about any medications you\'re taking'
    ]
  }
];

function HealthTips() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Health Tips for Blood Donors</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Follow these important guidelines to ensure a safe and successful blood donation experience.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {healthTips.map((section) => {
          const Icon = section.icon;
          return (
            <div key={section.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-2">
                    <Icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {section.category}
                    </h3>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${section.color}`}>
                      {section.tips.length} tips
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {section.tips.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {tip}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Emergency Contact */}
      <div className="mt-8 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
              Emergency Contact
            </h3>
            <p className="text-red-700 dark:text-red-300 mb-3">
              If you experience any complications after donating blood, please contact us immediately:
            </p>
            <div className="space-y-1 text-red-700 dark:text-red-300">
              <p><strong>Phone:</strong> +91 532 2271204</p>
              <p><strong>Email:</strong> nss@mmmut.ac.in</p>
              <p><strong>Emergency Hotline:</strong> +91 9415234567 (24/7)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthTips;