import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black text-gray-300 font-sans selection:bg-brand-lime selection:text-black">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-brand-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-white hover:text-brand-lime transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Back to Home</span>
          </button>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="space-y-12">
          
          {/* Title Section */}
          <div className="border-b border-white/10 pb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-400">Effective Date: November 26, 2025</p>
          </div>

          <div className="space-y-8 leading-relaxed">
            <p>
              Runway ("we," "our," or "the App") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you use our mobile application.
              <br/>
              By using Runway, you agree to the collection and use of information in accordance with this policy.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">1.1 Personal Information You Provide</h3>
              <p className="mb-4">We collect the following information when you register and use our services:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li><strong>(1) Account Registration:</strong> Email address (required), Password (encrypted and stored securely), Username (required).</li>
                <li><strong>(2) Google Sign-In (Optional):</strong> Google account information (email, name) via Google OAuth.</li>
                <li><strong>(3) Running Activity Data:</strong> Location data (GPS coordinates): Used to track your running routes and create courses; Activity metrics: Distance, duration, speed, pace, calories burned, elevation gain; Course ratings: Your ratings and comments on running courses.</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">1.2 Automatically Collected Information</h3>
              <p>We automatically collect: App usage data, Device information (OS version, device model), Network connection information.</p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">1.3 Collection Methods</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Direct input during registration and service usage</li>
                <li>Google OAuth for social login</li>
                <li>GPS sensors with your permission</li>
                <li>Automatic collection through app functionality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>(1) Account Management:</strong> Provide member services and verify user identity; Prevent fraudulent use and ensure account security.</li>
                <li><strong>(2) Running Services:</strong> Track GPS-based running routes and automatically generate courses; Store running records and provide statistics; Recommend and search for courses based on your location.</li>
                <li><strong>(3) Service Improvement:</strong> Analyze user feedback and improve services; Develop new features.</li>
                <li><strong>(4) Offline Functionality:</strong> Store running data locally on your device when offline; Sync data with our servers when you're back online.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Data Retention and Deletion</h2>
              <ul className="list-disc pl-5 space-y-4">
                <li>
                  <strong>(1) Account Deletion:</strong> Your personal data is immediately deleted when you delete your account. 
                  <br/><em>Exception: Data required by law will be retained for the period specified below: Fraudulent use records: 1 year (as required by consumer protection laws).</em>
                </li>
                <li>
                  <strong>(2) Service Usage Data:</strong> Deleted immediately upon account deletion or user request. Local data stored on your device is automatically deleted when you uninstall the app.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Sharing Your Information with Third Parties</h2>
              <p>We do not sell, rent, or share your personal information with third parties, except in the following cases:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>When you have given explicit consent</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights, safety, or property</li>
                <li>In connection with service providers (see Section 5)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Service Providers</h2>
              <p className="mb-4">We use the following third-party services to operate our app:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse border border-white/20">
                  <thead className="bg-white/10">
                    <tr>
                      <th className="p-3 border border-white/20">Service Provider</th>
                      <th className="p-3 border border-white/20">Purpose</th>
                      <th className="p-3 border border-white/20">Data Retention</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-white/20">MongoDB Atlas</td>
                      <td className="p-3 border border-white/20">Database hosting</td>
                      <td className="p-3 border border-white/20">Until account deletion or contract termination</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-white/20">CloudType</td>
                      <td className="p-3 border border-white/20">Server hosting</td>
                      <td className="p-3 border border-white/20">Until account deletion or contract termination</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-white/20">Google (OAuth)</td>
                      <td className="p-3 border border-white/20">Authentication (optional)</td>
                      <td className="p-3 border border-white/20">Immediately after authentication</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500">These providers are obligated to protect your data and use it only for the specified purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights and Choices</h2>
              <p>You have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>(1) Access Your Data:</strong> View your personal information in the "Profile" section of the app.</li>
                <li><strong>(2) Update Your Information:</strong> Edit your profile through the "Edit Profile" menu.</li>
                <li><strong>(3) Delete Your Account:</strong> Request account deletion through the "Delete Account" option in the app. All your data will be permanently deleted.</li>
                <li><strong>(4) Location Permission:</strong> You can revoke location access in your device settings. Note: Running tracking features will not work without location permission.</li>
                <li><strong>(5) Data Portability:</strong> Contact us to request a copy of your data in a portable format.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Data Security</h2>
              <p>We implement the following security measures to protect your personal data:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Password Encryption: Passwords are hashed using bcrypt algorithm</li>
                <li>Access Control: Database access is restricted with JWT-based authentication</li>
                <li>Secure Communication: HTTPS protocol for all data transmission</li>
                <li>Local Data Protection: Data stored on your device is automatically deleted when you uninstall the app</li>
                <li>Regular Security Audits: We regularly review our security practices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. International Data Transfers</h2>
              <p>Your data may be transferred to and stored on servers located outside your country. We ensure that appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
              <h3 className="text-xl font-semibold text-white mt-4 mb-2">All Ages Welcome</h3>
              <p className="mb-4">
                Runway is designed to be safe for users of all ages. We collect the same information from all users regardless of age, as described in Section 1 of this policy.
              </p>
              
              <strong className="text-white block mt-4 mb-2">Information We Collect from All Users:</strong>
              <ul className="list-disc pl-5 space-y-1 mb-4 text-gray-300">
                <li>Account information (email, username, password)</li>
                <li>Location data (GPS) for running tracking purposes</li>
                <li>Activity data (distance, time, pace)</li>
              </ul>

              <strong className="text-white block mt-4 mb-2">For Parents and Guardians:</strong>
              <p className="mb-2">If your child is using Runway, please be aware:</p>
              <ul className="list-disc pl-5 space-y-1 mb-4 text-gray-300">
                <li>Location tracking is used only during active running sessions</li>
                <li>Data is stored securely and not shared with third parties</li>
                <li>You can request deletion of your child's account at any time by contacting us at <a href="mailto:runwayteams@gmail.com" className="text-brand-lime hover:underline">runwayteams@gmail.com</a></li>
                <li>You have the right to review your child's information</li>
              </ul>
              <p className="mb-4">We encourage parents to monitor their children's use of our app and discuss online safety practices.</p>

              <strong className="text-white block mt-4 mb-2">Parental Controls:</strong>
              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                <li>Parents can disable location permissions in device settings</li>
                <li>Parents can request a copy of their child's data</li>
                <li>Parents can request immediate account deletion</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Cookies and Tracking Technologies</h2>
              <p><strong>(1) Cookies:</strong> We do not use cookies in our app.</p>
              <p className="mt-2"><strong>(2) Automatic Data Collection:</strong> GPS Location Data (Collected with your permission for route tracking); Device Information (Used for app optimization and error analysis).</p>
              <p className="mt-2 text-sm text-gray-400">You can disable location tracking in your device settings, but this will prevent you from using running tracking features.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Your Privacy Rights by Region</h2>
              <h3 className="text-xl font-semibold text-white mt-4 mb-2">(1) For European Users (GDPR)</h3>
              <p>If you are in the European Economic Area (EEA), you have additional rights:</p>
              <ul className="list-disc pl-5 space-y-1 mt-1 text-sm text-gray-400">
                <li>Right to access, rectify, or erase your data</li>
                <li>Right to restrict or object to data processing</li>
                <li>Right to data portability</li>
                <li>Right to withdraw consent at any time</li>
                <li>Right to lodge a complaint with your local data protection authority</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-white mt-4 mb-2">(2) For California Residents (CCPA)</h3>
              <p>California residents have the right to:</p>
              <ul className="list-disc pl-5 space-y-1 mt-1 text-sm text-gray-400">
                <li>Know what personal information is collected</li>
                <li>Request deletion of personal information</li>
                <li>Opt-out of the sale of personal information (Note: We do not sell your data)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by: Posting an in-app notification; Sending an email to your registered address; or Updating the "Effective Date" at the top of this policy.</p>
              <p className="mt-2">Your continued use of the app after changes become effective constitutes your acceptance of the updated policy.</p>
            </section>

            <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">13. Contact Us</h2>
              <p className="mb-4">If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:</p>
              <div className="space-y-2">
                <p><span className="text-gray-400">Privacy Contact:</span> Runway Privacy Team</p>
                <p><span className="text-gray-400">Email:</span> <a href="mailto:runwayteams@gmail.com" className="text-brand-lime hover:underline">runwayteams@gmail.com</a></p>
                <p><span className="text-gray-400">Response Time:</span> We aim to respond within 7 business days</p>
              </div>
            </section>

            <section className="text-sm text-gray-500 border-t border-white/10 pt-8">
               <h3 className="font-bold text-gray-400 mb-2">14. Legal Compliance</h3>
               <p>This Privacy Policy complies with: General Data Protection Regulation (GDPR) - EU; California Consumer Privacy Act (CCPA) - USA; Personal Information Protection Act - South Korea; Other applicable data protection laws.</p>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-black py-8 border-t border-white/10 text-center text-sm text-gray-600">
        &copy; 2025 Runway Inc. All rights reserved.
      </footer>
    </div>
  );
};