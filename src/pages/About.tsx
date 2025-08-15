import React from 'react';
import { Heart, Users, Award, Target, Eye, Handshake } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About NSS MMMUT</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            National Service Scheme at Madan Mohan Malaviya University of Technology is committed to serving society through various social initiatives, with blood donation being one of our primary focuses.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="bg-red-100 dark:bg-red-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                To create a sustainable blood donation ecosystem that ensures no patient suffers due to blood shortage. We aim to build a community of voluntary blood donors who contribute regularly to save lives.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 dark:bg-red-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                To establish MMMUT as a leading institution in voluntary blood donation, creating awareness about the importance of blood donation and building a network of committed donors across the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Compassion</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in the power of human compassion and the willingness to help others in their time of need.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Community</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building a strong community of donors and volunteers who work together towards a common goal.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Maintaining the highest standards in all our blood donation activities and donor care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About MMMUT */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              About Madan Mohan Malaviya University of Technology
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
              <p className="mb-6">
                Madan Mohan Malaviya University of Technology (MMMUT), formerly known as Madan Mohan Malaviya Engineering College (MMMEC), is a premier technical institution located in Gorakhpur, Uttar Pradesh. Established in 1962, the university has been at the forefront of technical education and research in India.
              </p>
              <p className="mb-6">
                The National Service Scheme (NSS) unit at MMMUT has been actively involved in various social service activities since its inception. Our blood donation initiative is one of the most successful programs, having organized numerous blood donation camps and saved thousands of lives over the years.
              </p>
              <p>
                Through this digital platform, we aim to modernize our blood donation process, making it more accessible and efficient for both donors and recipients. Our goal is to create a seamless experience that encourages more people to participate in this noble cause.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="w-20 h-20 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">NSS Program Officer</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">Overall coordination and management</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Leading the blood donation initiatives</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Medical Team</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">Health screening and medical support</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Ensuring donor safety and care</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="h-10 w-10 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Student Volunteers</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">Event organization and donor support</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Dedicated student community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of our life-saving community. Every donation counts, every donor matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Become a Donor
            </button>
            <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-400 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;