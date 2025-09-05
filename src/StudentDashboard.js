import React, { useState } from 'react';
import { Bell, Calendar, DollarSign, Home, Book, User, Settings, LogOut, Download, ChevronRight, AlertCircle, CheckCircle, Clock, Star, Mail, Phone } from 'lucide-react';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock student data
  const studentData = {
    name: "Priya Sharma",
    studentId: "CS21B1056",
    course: "B.Tech Computer Science",
    semester: "6th Semester",
    year: "3rd Year",
    cgpa: "8.7",
    profileImage: "/api/placeholder/80/80"
  };

  const notifications = [
    { id: 1, type: "urgent", message: "Fee payment due in 3 days", time: "2 hours ago" },
    { id: 2, type: "info", message: "New assignment uploaded in Data Structures", time: "1 day ago" },
    { id: 3, type: "success", message: "Hostel room cleaning scheduled", time: "2 days ago" }
  ];

  const upcomingEvents = [
    { id: 1, title: "Database Systems Exam", date: "2025-09-15", time: "10:00 AM", type: "exam" },
    { id: 2, title: "Project Submission", date: "2025-09-18", time: "11:59 PM", type: "assignment" },
    { id: 3, title: "Career Guidance Session", date: "2025-09-20", time: "2:00 PM", type: "event" }
  ];

  const recentGrades = [
    { subject: "Machine Learning", grade: "A", credits: 4, points: 9.0 },
    { subject: "Computer Networks", grade: "A-", credits: 3, points: 8.5 },
    { subject: "Software Engineering", grade: "B+", credits: 4, points: 8.0 }
  ];

  const feeDetails = {
    totalFee: 85000,
    paidAmount: 60000,
    pendingAmount: 25000,
    dueDate: "2025-09-15",
    installments: [
      { name: "Tuition Fee", amount: 15000, status: "pending" },
      { name: "Hostel Fee", amount: 8000, status: "pending" },
      { name: "Library Fee", amount: 2000, status: "pending" }
    ]
  };

  const hostelInfo = {
    block: "Block A",
    room: "A-304",
    roommate: "Ananya Singh",
    floor: "3rd Floor",
    warden: "Dr. Meera Patel",
    complaints: 0,
    lastCleaning: "2025-09-03"
  };

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'academics', label: 'Academics', icon: Book },
    { id: 'fees', label: 'Fees & Payments', icon: DollarSign },
    { id: 'hostel', label: 'Hostel', icon: Home },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back, {studentData.name}!</h2>
        <p className="opacity-90">Here's what's happening in your academic journey today.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Current CGPA</p>
              <p className="text-2xl font-bold text-green-600">{studentData.cgpa}</p>
            </div>
            <Star className="h-8 w-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Attendance</p>
              <p className="text-2xl font-bold text-blue-600">87%</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border">
          <div>
            <p className="text-sm text-gray-600">Pending Fee</p>
            <p className="text-2xl font-bold text-red-600">₹{feeDetails.pendingAmount.toLocaleString()}</p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border">
          <div>
            <p className="text-sm text-gray-600">Room Number</p>
            <p className="text-2xl font-bold text-purple-600">{hostelInfo.room}</p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Events */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border">
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-blue-600" />
              Upcoming Events
            </h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {upcomingEvents.map(event => (
                <div key={event.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{event.title}</p>
                    <p className="text-sm text-gray-600">{event.date} at {event.time}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    event.type === 'exam' ? 'bg-red-100 text-red-800' :
                    event.type === 'assignment' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {event.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Grades */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold">Recent Grades</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {recentGrades.map((grade, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">{grade.subject}</p>
                    <p className="text-xs text-gray-600">{grade.credits} Credits</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-sm font-medium ${
                    grade.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                    grade.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {grade.grade}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAcademics = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Academics</h2>
      
      {/* Current Semester */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold">Current Semester - Semester 6</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-3">Enrolled Subjects</h4>
              <div className="space-y-2">
                {['Machine Learning', 'Computer Networks', 'Software Engineering', 'Database Management', 'Web Technologies'].map(subject => (
                  <div key={subject} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm">{subject}</span>
                    <button className="text-blue-600 text-sm hover:underline">View Details</button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3">Attendance Overview</h4>
              <div className="space-y-2">
                {[
                  { subject: 'Machine Learning', attendance: 92 },
                  { subject: 'Computer Networks', attendance: 85 },
                  { subject: 'Software Engineering', attendance: 88 },
                  { subject: 'Database Management', attendance: 91 },
                  { subject: 'Web Technologies', attendance: 78 }
                ].map(item => (
                  <div key={item.subject} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm">{item.subject}</span>
                    <span className={`text-sm font-medium ${
                      item.attendance >= 85 ? 'text-green-600' : 
                      item.attendance >= 75 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {item.attendance}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Assignments */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold">Pending Assignments</h3>
        </div>
        <div className="p-4">
          <div className="space-y-3">
            {[
              { title: 'ML Algorithm Implementation', subject: 'Machine Learning', dueDate: '2025-09-18', status: 'pending' },
              { title: 'Network Protocol Analysis', subject: 'Computer Networks', dueDate: '2025-09-22', status: 'in-progress' },
              { title: 'Database Design Project', subject: 'Database Management', dueDate: '2025-09-25', status: 'not-started' }
            ].map((assignment, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{assignment.title}</p>
                  <p className="text-sm text-gray-600">{assignment.subject} • Due: {assignment.dueDate}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    assignment.status === 'pending' ? 'bg-red-100 text-red-800' :
                    assignment.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {assignment.status.replace('-', ' ')}
                  </span>
                  <button className="text-blue-600 hover:text-blue-800">
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderFees = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Fees & Payments</h2>
      
      {/* Fee Overview */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold">Fee Overview - Academic Year 2024-25</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">Total Fee</p>
              <p className="text-2xl font-bold text-blue-600">₹{feeDetails.totalFee.toLocaleString()}</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600">Paid Amount</p>
              <p className="text-2xl font-bold text-green-600">₹{feeDetails.paidAmount.toLocaleString()}</p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <p className="text-sm text-gray-600">Pending Amount</p>
              <p className="text-2xl font-bold text-red-600">₹{feeDetails.pendingAmount.toLocaleString()}</p>
            </div>
          </div>

          {/* Payment Progress */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Payment Progress</span>
              <span className="text-sm text-gray-600">{Math.round((feeDetails.paidAmount / feeDetails.totalFee) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full" 
                style={{ width: `${(feeDetails.paidAmount / feeDetails.totalFee) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Pending Installments */}
          <div>
            <h4 className="font-medium mb-3">Pending Installments (Due: {feeDetails.dueDate})</h4>
            <div className="space-y-2">
              {feeDetails.installments.map((installment, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{installment.name}</p>
                    <p className="text-sm text-gray-600">₹{installment.amount.toLocaleString()}</p>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Pay Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold">Payment History</h3>
        </div>
        <div className="p-4">
          <div className="space-y-3">
            {[
              { date: '2025-08-15', description: 'Semester 6 - Partial Payment', amount: 30000, method: 'UPI', status: 'Success' },
              { date: '2025-06-20', description: 'Hostel Fee - Semester 6', amount: 20000, method: 'Net Banking', status: 'Success' },
              { date: '2025-05-10', description: 'Tuition Fee - Semester 6', amount: 10000, method: 'Card', status: 'Success' }
            ].map((payment, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{payment.description}</p>
                  <p className="text-sm text-gray-600">{payment.date} • {payment.method}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">₹{payment.amount.toLocaleString()}</p>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">{payment.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderHostel = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Hostel Information</h2>
      
      {/* Room Details */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold">Room Details</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Block:</span>
                <span className="font-medium">{hostelInfo.block}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Room Number:</span>
                <span className="font-medium">{hostelInfo.room}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Floor:</span>
                <span className="font-medium">{hostelInfo.floor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Roommate:</span>
                <span className="font-medium">{hostelInfo.roommate}</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Warden:</span>
                <span className="font-medium">{hostelInfo.warden}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Last Cleaning:</span>
                <span className="font-medium">{hostelInfo.lastCleaning}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Active Complaints:</span>
                <span className="font-medium text-green-600">{hostelInfo.complaints}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'Request Maintenance', icon: Settings, color: 'blue' },
          { title: 'Report Complaint', icon: AlertCircle, color: 'red' },
          { title: 'Book Visitor', icon: User, color: 'green' },
          { title: 'Mess Menu', icon: Calendar, color: 'purple' }
        ].map((action, index) => (
          <button key={index} className={`p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow`}>
            <div className="text-center">
              <action.icon className={`h-8 w-8 mx-auto mb-2 text-${action.color}-600`} />
              <p className="font-medium">{action.title}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Mess Schedule */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold">This Week's Mess Menu</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { day: 'Monday', meals: ['Aloo Paratha', 'Dal Rice', 'Paneer Curry'] },
              { day: 'Tuesday', meals: ['Poha', 'Rajma Rice', 'Mixed Veg'] },
              { day: 'Wednesday', meals: ['Upma', 'Chole Rice', 'Palak Paneer'] },
              { day: 'Thursday', meals: ['Sandwich', 'Dal Rice', 'Chicken Curry'] },
              { day: 'Friday', meals: ['Dosa', 'Sambar Rice', 'Fish Curry'] },
              { day: 'Saturday', meals: ['Paratha', 'Biryani', 'Raita'] },
              { day: 'Sunday', meals: ['Pancakes', 'Special Thali', 'Ice Cream'] }
            ].map((menu, index) => (
              <div key={index} className="p-3 border rounded-lg">
                <h4 className="font-medium mb-2">{menu.day}</h4>
                <div className="space-y-1">
                  {menu.meals.map((meal, mealIndex) => (
                    <p key={mealIndex} className="text-sm text-gray-600">• {meal}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard': return renderDashboard();
      case 'academics': return renderAcademics();
      case 'fees': return renderFees();
      case 'hostel': return renderHostel();
      case 'profile': return (
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-2xl font-bold mb-4">Student Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
              <div className="space-y-2">
                <p><span className="text-gray-600">Name:</span> {studentData.name}</p>
                <p><span className="text-gray-600">Student ID:</span> {studentData.studentId}</p>
                <p><span className="text-gray-600">Course:</span> {studentData.course}</p>
                <p><span className="text-gray-600">Current Semester:</span> {studentData.semester}</p>
                <p><span className="text-gray-600">Email:</span> priya.sharma@college.edu</p>
                <p><span className="text-gray-600">Phone:</span> +91 9876543210</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Academic Details</h3>
              <div className="space-y-2">
                <p><span className="text-gray-600">Current CGPA:</span> {studentData.cgpa}</p>
                <p><span className="text-gray-600">Year:</span> {studentData.year}</p>
                <p><span className="text-gray-600">Admission Date:</span> August 2021</p>
                <p><span className="text-gray-600">Expected Graduation:</span> May 2025</p>
              </div>
            </div>
          </div>
        </div>
      );
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-blue-600">Acadus</h1>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">Student Portal</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-800" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={studentData.profileImage} alt="Profile" className="h-8 w-8 rounded-full" />
              <span className="text-sm font-medium">{studentData.name}</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm h-screen sticky top-0">
          <div className="p-4">
            <div className="flex items-center space-x-3 mb-6">
              <img src={studentData.profileImage} alt="Profile" className="h-12 w-12 rounded-full" />
              <div>
                <p className="font-medium">{studentData.name}</p>
                <p className="text-sm text-gray-600">{studentData.studentId}</p>
              </div>
            </div>
            <nav className="space-y-2">
              {sidebarItems.map(item => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === item.id 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-gray-700 hover:bg-gray-100 mt-8">
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Notifications Bar */}
          {activeTab === 'dashboard' && notifications.length > 0 && (
            <div className="mb-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="text-sm font-medium text-yellow-800 mb-2">Recent Notifications</h3>
                <div className="space-y-1">
                  {notifications.slice(0, 2).map(notification => (
                    <p key={notification.id} className="text-sm text-yellow-700">
                      • {notification.message}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;