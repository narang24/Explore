'use client';
import { useState } from 'react';
import StudentLayout from '../../components-student/StudentLayout';
import ResumeBuilder from './ResumeBuilder';
import { 
  Calendar, 
  Award, 
  Download,
  Share2,
  FileText,
  Sparkles,
  GraduationCap,
  BookOpen,
  CheckCircle,
  Edit3,
  Eye,
  Link,
  Globe,
  Zap
} from 'lucide-react';

// Mock data for student's complete academic journey
const studentProfile = {
  name: 'John Doe',
  rollNumber: '22CS001',
  batch: '2024-2028',
  branch: 'Computer Science & Engineering',
  instituteName: 'Punjab Engineering College',
  currentYear: 3,
  admissionDate: '2024-08-15',
  email: 'john.doe@pec.edu.in',
  phone: '+91 9876543210',
  cgpa: 8.7,
  sgpa: 8.8,
  totalCredits: 156,
  completedSemesters: 4,
  validatedCertificates: [
    {
      activityName: 'Google Cloud Certified - Associate Cloud Engineer',
      achievement: 'Professional Certification',
      date: '2024-07-15',
      issuer: 'Google Cloud'
    },
    {
      activityName: 'AWS Certified Developer - Associate',
      achievement: 'Professional Certification',
      date: '2024-09-20',
      issuer: 'Amazon Web Services'
    },
    {
      activityName: 'Microsoft Azure Fundamentals',
      achievement: 'Foundational Certification',
      date: '2024-05-10',
      issuer: 'Microsoft'
    }
  ],
  validatedActivities: [
    {
      id: 1,
      title: 'Tech Fest 2024',
      type: 'Competition',
      date: '2024-03-15',
      category: 'Technical',
      achievement: 'Winner - 1st Position',
      validated: true
    },
    {
      id: 2,
      title: 'AI/ML Symposium',
      type: 'Symposium',
      date: '2024-11-08',
      category: 'Technical',
      achievement: 'Leadership Excellence',
      validated: true
    },
    {
      id: 3,
      title: 'Research Paper Presentation',
      type: 'Research',
      date: '2024-12-01',
      category: 'Academic',
      achievement: 'Best Paper Award',
      validated: true
    }
  ]
};

export default function PortfolioPage() {
  const [showResumeBuilder, setShowResumeBuilder] = useState(false);
  const [showPortfolioPreview, setShowPortfolioPreview] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePortfolioPDF = () => {
    setIsGenerating(true);
    
    // Simulate PDF generation
    setTimeout(() => {
      const element = document.getElementById('portfolio-content');
      
      // Create a simple PDF-like content
      const portfolioContent = `
${studentProfile.name}
${studentProfile.branch} Student
${studentProfile.email} | ${studentProfile.phone}
${studentProfile.instituteName}

ACADEMIC DETAILS
Current Year: ${studentProfile.currentYear}${['st', 'nd', 'rd', 'th'][studentProfile.currentYear-1] || 'th'} Year
CGPA: ${studentProfile.cgpa}
SGPA: ${studentProfile.sgpa}
Batch: ${studentProfile.batch}

VERIFIED CERTIFICATIONS
${studentProfile.validatedCertificates.map(cert => 
  `- ${cert.activityName}\n  ${cert.achievement} | ${cert.issuer} | ${new Date(cert.date).toLocaleDateString()}`
).join('\n')}

VERIFIED ACTIVITIES & ACHIEVEMENTS
${studentProfile.validatedActivities.map(activity => 
  `- ${activity.title} (${activity.type})\n  ${activity.achievement} | ${new Date(activity.date).toLocaleDateString()}`
).join('\n')}
      `;
      
      // Create blob and download
      const blob = new Blob([portfolioContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${studentProfile.name.replace(/\s+/g, '_')}_Portfolio.txt`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      setIsGenerating(false);
      alert('Portfolio PDF downloaded successfully!');
    }, 1500);
  };

  const handleGenerateWebLink = () => {
    setIsGenerating(true);
    
    // Simulate web link generation
    setTimeout(() => {
      const uniqueId = Math.random().toString(36).substring(2, 15);
      const webLink = `https://portfolio.pec.edu.in/${studentProfile.rollNumber.toLowerCase()}/${uniqueId}`;
      
      // Copy to clipboard
      navigator.clipboard.writeText(webLink).then(() => {
        setIsGenerating(false);
        alert(`Portfolio web link generated and copied to clipboard!\n\n${webLink}`);
      }).catch(() => {
        setIsGenerating(false);
        alert(`Portfolio web link generated:\n\n${webLink}`);
      });
    }, 1500);
  };

  const handleOneClickGeneration = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      generatePortfolioPDF();
      setTimeout(() => {
        handleGenerateWebLink();
      }, 500);
    }, 500);
  };

  if (showResumeBuilder) {
    return (
      <StudentLayout>
        <ResumeBuilder 
          defaultData={studentProfile}
          onBack={() => setShowResumeBuilder(false)}
        />
      </StudentLayout>
    );
  }

  return (
    <StudentLayout>
      <div className="space-y-6">
        {/* Student Profile Card */}
        <div className="bg-gradient-to-r from-[var(--planetary)] to-[var(--sapphire)] rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{studentProfile.name}</h2>
                <p className="text-white/90">{studentProfile.branch}</p>
                <div className="flex items-center gap-4 mt-2 text-white/80">
                  <span>{studentProfile.currentYear}{['st', 'nd', 'rd', 'th'][studentProfile.currentYear-1] || 'th'} Year</span>
                  <span>•</span>
                  <span>CGPA: {studentProfile.cgpa}</span>
                  <span>•</span>
                  <span>SGPA: {studentProfile.sgpa}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-white/20 rounded-xl p-4">
                <div className="text-sm text-white/80">Institute</div>
                <div className="font-semibold">{studentProfile.instituteName}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-4">
          <button 
            onClick={handleOneClickGeneration}
            disabled={isGenerating}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl p-5 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Zap className="text-white" size={22} />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-white">One-Click Generate</h3>
                <p className="text-sm text-white/80">PDF + Web Link instantly</p>
              </div>
            </div>
          </button>

          <button 
            onClick={() => setShowPortfolioPreview(true)}
            className="bg-white hover:bg-gray-50 rounded-xl p-5 border border-gray-200 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[var(--sky)] rounded-xl flex items-center justify-center group-hover:bg-[var(--planetary)] transition-colors">
                <Eye className="text-[var(--planetary)] group-hover:text-white" size={20} />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-[var(--galaxy)]">Preview Portfolio</h3>
                <p className="text-sm text-[var(--planetary)]">View full portfolio</p>
              </div>
            </div>
          </button>

          <button 
            onClick={() => setShowResumeBuilder(true)}
            className="bg-white hover:bg-gray-50 rounded-xl p-5 border border-gray-200 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[var(--sky)] rounded-xl flex items-center justify-center group-hover:bg-[var(--planetary)] transition-colors">
                <Edit3 className="text-[var(--planetary)] group-hover:text-white" size={20} />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-[var(--galaxy)]">Customize Portfolio</h3>
                <p className="text-sm text-[var(--planetary)]">Build custom resume</p>
              </div>
            </div>
          </button>
        </div>

        {/* Portfolio Template Preview */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[var(--galaxy)]">Portfolio Template Preview</h3>
                <p className="text-sm text-[var(--planetary)] mt-1">Auto-generated from your verified academic data</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex items-center gap-1">
                  <CheckCircle size={12} />
                  All Data Verified
                </span>
                <button
                  onClick={generatePortfolioPDF}
                  disabled={isGenerating}
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--planetary)] text-white rounded-lg text-sm font-medium hover:bg-[var(--sapphire)] transition-colors disabled:opacity-50"
                >
                  <Download size={14} />
                  Download PDF
                </button>
                <button
                  onClick={handleGenerateWebLink}
                  disabled={isGenerating}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors disabled:opacity-50"
                >
                  <Link size={14} />
                  Generate Link
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gray-50">
            {/* Portfolio Preview Content */}
            <div id="portfolio-content" className="bg-white rounded-xl shadow-sm max-w-4xl mx-auto p-8">
              {/* Header */}
              <div className="text-center mb-8 pb-6 border-b-2 border-gray-200">
                <h1 className="text-3xl font-bold text-[var(--galaxy)] mb-2">
                  {studentProfile.name}
                </h1>
                <p className="text-lg text-[var(--planetary)] mb-4">
                  {studentProfile.branch} Student
                </p>
                <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                  <span>{studentProfile.email}</span>
                  <span>•</span>
                  <span>{studentProfile.phone}</span>
                  <span>•</span>
                  <span>{studentProfile.instituteName}</span>
                </div>
              </div>

              {/* Academic Information */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-xl font-bold text-[var(--galaxy)] mb-4 flex items-center gap-2">
                    <GraduationCap size={20} /> Academic Details
                  </h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Current Year:</span>
                      <span className="font-medium text-sm">{studentProfile.currentYear}{['st', 'nd', 'rd', 'th'][studentProfile.currentYear-1] || 'th'} Year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">CGPA:</span>
                      <span className="font-medium text-[var(--planetary)] text-sm">{studentProfile.cgpa}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">SGPA:</span>
                      <span className="font-medium text-[var(--planetary)] text-sm">{studentProfile.sgpa}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[var(--galaxy)] mb-4 flex items-center gap-2">
                    <BookOpen size={20} /> Program Details
                  </h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Branch:</span>
                      <span className="font-medium text-sm">{studentProfile.branch}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Batch:</span>
                      <span className="font-medium text-sm">{studentProfile.batch}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Institute:</span>
                      <span className="font-medium text-sm">{studentProfile.instituteName}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Certifications */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[var(--galaxy)] mb-4 flex items-center gap-2">
                  <Award size={20} /> Verified Certifications
                </h2>
                <div className="grid gap-4">
                  {studentProfile.validatedCertificates.map((cert, index) => (
                    <div key={index} className="border border-green-200 bg-green-50 rounded-xl p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-[var(--galaxy)]">{cert.activityName}</h3>
                            <CheckCircle className="text-green-600" size={16} />
                          </div>
                          <p className="text-[var(--planetary)] font-medium mb-1">{cert.achievement}</p>
                          <p className="text-sm text-gray-600">{cert.issuer}</p>
                        </div>
                        <span className="text-sm text-gray-600">
                          {new Date(cert.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Activities */}
              <div>
                <h2 className="text-xl font-bold text-[var(--galaxy)] mb-4 flex items-center gap-2">
                  <Calendar size={20} /> Verified Activities & Achievements
                </h2>
                <div className="grid gap-4">
                  {studentProfile.validatedActivities.map((activity) => (
                    <div key={activity.id} className="border border-blue-200 bg-blue-50 rounded-xl p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-[var(--galaxy)]">{activity.title}</h3>
                            <CheckCircle className="text-green-600" size={16} />
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                              activity.category === 'Technical' ? 'bg-blue-100 text-blue-700' :
                              activity.category === 'Academic' ? 'bg-indigo-100 text-indigo-700' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {activity.category}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-gray-600">
                            <span>{activity.type}</span>
                            <span>•</span>
                            <span>{new Date(activity.date).toLocaleDateString()}</span>
                            <span>•</span>
                            <span className="text-green-600 font-medium">{activity.achievement}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}