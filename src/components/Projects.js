import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'EcoRide Parada',
      description: 'A comprehensive bike-renting system with mobile app for users and web dashboard for administrators, promoting eco-friendly transportation in the community.',
      image: process.env.PUBLIC_URL + '/images/projects/ecoride-placeholder.png', // TODO: Replace with actual image
      longDescription: `An innovative bike-sharing platform that combines mobile and web technologies 
        to create a seamless renting experience. The system features QR-based authentication, 
        real-time admin notifications, and comprehensive ride tracking including distance, carbon 
        savings, and calories burned. The project consists of a Flutter-based mobile app for users 
        and a React.js admin dashboard for system management.`,
      technologies: [
        {
          name: 'Flutter',
          description: 'Mobile app development for Android users'
        },
        {
          name: 'React.js',
          description: 'Web dashboard for system administrators'
        },
        {
          name: 'Firebase',
          description: 'Real-time database and authentication'
        },
        {
          name: 'AWS',
          description: 'Cloud infrastructure and hosting'
        },
        {
          name: 'Node.js',
          description: 'Backend server development'
        }
      ],
      keyFeatures: [
        'QR-based bike unlocking system',
        'Two-factor authentication with admin QR verification',
        'Real-time ride tracking and monitoring',
        'Carbon footprint and calorie calculation',
        'Admin dashboard for system management',
        'Real-time notifications for administrators',
        'Comprehensive ride analytics'
      ]
    },
    {
      title: 'PLV Lost & Found',
      description: 'A web application designed to help students and staff at Pamantasan ng Lungsod ng Valenzuela locate and manage lost items within the university campus.',
      image: process.env.PUBLIC_URL + '/images/projects/plvlostandfound.png',
      longDescription: `An interactive lost and found platform that enables users to post found items
        and search for lost belongings. The system features real-time chat functionality using AJAX,
        allowing users to communicate directly about found items. This streamlines the process of
        returning lost items to their rightful owners within the university community.`,
      technologies: [
        {
          name: 'XAMPP',
          description: 'Local development environment with Apache, MySQL, and PHP'
        },
        {
          name: 'MySQL',
          description: 'Database management for storing user data, item listings, and chat messages'
        },
        {
          name: 'AJAX',
          description: 'Asynchronous JavaScript for real-time chat functionality and dynamic updates'
        },
        {
          name: 'PHP',
          description: 'Backend development and server-side processing'
        },
        {
          name: 'CSS',
          description: 'Custom styling and responsive design'
        }
      ],
      keyFeatures: [
        'Real-time chat system between users',
        'Item posting and search functionality',
        'User authentication and profiles',
        'Image upload for lost/found items',
        'Responsive design for mobile and desktop'
      ]
    }
  ];

  return (
    <section id="projects" className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24">
      <div className="max-w-4xl w-full">
        <h2 className="text-[#F2F4CB] text-5xl font-light mb-12">
          my <span className="font-bold">projects</span>
        </h2>

        {projects.map((project, index) => (
          <div key={index} className="bg-[#110B11]/50 rounded-xl p-6 mb-12 border border-[#B7990D]/20">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Project Image */}
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden border-2 border-[#B7990D]/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full md:w-1/2">
                <h3 className="text-[#F2F4CB] text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                
                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-[#F2F4CB] text-lg font-semibold mb-2">Key Features</h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    {project.keyFeatures.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-[#F2F4CB] text-lg font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="bg-[#B7990D]/10 border border-[#B7990D]/20 rounded-full px-3 py-1"
                      >
                        <span className="text-[#F2F4CB] text-sm">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="mt-8">
              <p className="text-gray-400">{project.longDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
