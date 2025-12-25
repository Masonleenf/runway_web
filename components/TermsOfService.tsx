import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
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
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-gray-400">Effective Date: November 26, 2025</p>
          </div>

          <div className="space-y-8 leading-relaxed">
            <p>
              Welcome to Runway! These Terms of Service ("Terms") govern your use of the Runway mobile application ("App," "Service," "we," "our," or "us"). By accessing or using Runway, you agree to be bound by these Terms.
              <br/>
              Please read these Terms carefully before using our App. If you do not agree with any part of these Terms, you must not use our Service.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. About Runway</h2>
              <p className="mb-4">Runway is a GPS-based running tracking and course sharing platform that allows users to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Track running activities using GPS</li>
                <li>Automatically create and discover running courses</li>
                <li>Share routes and rate courses</li>
                <li>View running statistics and progress</li>
                <li>Use the app offline with local data storage</li>
              </ul>
              <p className="mt-4">Runway is provided by an individual developer and is free to use.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Acceptance of Terms</h2>
              <p className="mb-4">By creating an account or using any features of Runway, you acknowledge that:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>You have read and understood these Terms</li>
                <li>You agree to comply with these Terms</li>
                <li>You are at least 14 years old (or have parental/guardian consent if under 14)</li>
                <li>You have the legal capacity to enter into a binding agreement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Account Registration</h2>
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">3.1 Account Creation</h3>
              <p className="mb-2">To use Runway, you must:</p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Provide accurate and complete registration information (email, username, password)</li>
                <li>Maintain the security of your account credentials</li>
                <li>Promptly update your information if it changes</li>
                <li>Be responsible for all activities under your account</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">3.2 Account Security</h3>
              <p className="mb-2">You are responsible for:</p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Keeping your password confidential</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
              <p>We are not liable for any loss or damage arising from your failure to protect your account credentials.</p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">3.3 Google Sign-In</h3>
              <p className="mb-2">If you use Google Sign-In:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>You authorize us to access your basic Google profile information (email, name)</li>
                <li>Your use is also subject to Google's Terms of Service</li>
                <li>You can revoke access through your Google account settings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Acceptable Use</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold text-brand-lime mb-4">4.1 You May:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Use the App for personal, non-commercial purposes</li>
                    <li>Track your own running activities</li>
                    <li>Share and discover running courses</li>
                    <li>Rate and review courses honestly</li>
                    <li>Download and use the App on your personal devices</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold text-red-400 mb-4">4.2 You May NOT:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Use the App for any illegal or unauthorized purpose</li>
                    <li>Violate any laws in your jurisdiction</li>
                    <li>Infringe on the intellectual property rights of others</li>
                    <li>Transmit viruses, malware, or other malicious code</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Harass, abuse, or harm other users</li>
                    <li>Submit false, misleading, or fraudulent information</li>
                    <li>Use automated systems (bots, scrapers) to access the App</li>
                    <li>Interfere with or disrupt the operation of the Service</li>
                    <li>Create multiple accounts to abuse features or ratings</li>
                    <li>Reverse engineer, decompile, or disassemble the App</li>
                    <li>Use the App for commercial purposes without written permission</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. User-Generated Content</h2>
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">5.1 Your Content</h3>
              <p>When you use Runway, you may create: Running courses (GPS routes), Course ratings and reviews, Comments and feedback. You retain all rights to your content.</p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">5.2 License Grant</h3>
              <p>By submitting content, you grant us: A worldwide, non-exclusive, royalty-free license to use, display, reproduce, and distribute your content for the purpose of operating and improving the Service. This license ends when you delete your content or account.</p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">5.3 Content Standards</h3>
              <p>Your content must NOT: Contain offensive, abusive, or discriminatory language; Violate any third party's rights; Contain false or misleading information; Include spam or advertising; Violate applicable laws.</p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">5.4 Content Removal</h3>
              <p>We reserve the right to: Remove any content that violates these Terms; Suspend or terminate accounts that repeatedly violate our standards; Take action without prior notice.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. GPS and Location Data</h2>
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">6.1 GPS Tracking</h3>
              <p>Runway uses GPS to: Track your running routes in real-time; Calculate distance, pace, and other metrics; Match your runs to existing courses; Recommend nearby courses.</p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">6.2 Your Responsibilities</h3>
              <p>When using GPS tracking:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong>Safety First:</strong> Always be aware of your surroundings while running</li>
                <li>Do not use the App while driving</li>
                <li>Ensure you have permission to run in certain areas</li>
                <li>Follow all local traffic and safety regulations</li>
                <li>We are not responsible for accidents or injuries during your runs</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">6.3 Location Accuracy</h3>
              <p>GPS accuracy depends on your device and environmental factors. We do not guarantee 100% accuracy of location data. Distances and routes are estimates.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Offline Functionality</h2>
              <p>Runway allows offline use by: Storing data locally on your device (using Hive database); Syncing data when you reconnect to the internet.</p>
              <p className="mt-2">You understand that: Local data is deleted when you uninstall the App; We are not responsible for data loss if you don't sync; Some features require internet connectivity.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Intellectual Property</h2>
              <p><strong>8.1 Our Rights:</strong> All rights, title, and interest in Runway, including App design, code, functionality, trademarks, logos, and branding are owned by us and protected by intellectual property laws.</p>
              <p className="mt-2"><strong>8.2 Limited License:</strong> We grant you a limited, non-exclusive, non-transferable license to download and use the App for personal purposes. This license does not allow you to copy, modify, distribute the App, create derivative works, or use our trademarks without permission.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Third-Party Services</h2>
              <p>Runway integrates with third-party services like Google Maps and Google OAuth. Your use of these services is subject to their respective terms and privacy policies. We are not responsible for third-party services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Service Availability</h2>
              <p><strong>10.1 Service Changes:</strong> We reserve the right to modify, suspend, or discontinue any feature, update the App with or without notice, or perform maintenance that may temporarily affect availability.</p>
              <p className="mt-2"><strong>10.2 No Guarantee:</strong> We provide the Service "as is" and do not guarantee uninterrupted or error-free operation. We are not liable for any service interruptions.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Termination</h2>
              <p><strong>11.1 By You:</strong> You may stop using the App at any time or delete your account through the "Delete Account" option. Your data will be permanently deleted upon account deletion.</p>
              <p className="mt-2"><strong>11.2 By Us:</strong> We may suspend or terminate your account if you violate these Terms, engage in fraudulent or illegal activity, or if we believe it's necessary to protect our Service or other users.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Disclaimers</h2>
              <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl">
                <h3 className="font-bold text-white mb-2">12.1 "AS IS" Service</h3>
                <p className="text-sm text-gray-300 mb-4 uppercase">
                  Runway is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, accuracy, reliability, or availability.
                </p>
                <h3 className="font-bold text-white mb-2">12.2 Health and Safety</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Runway is a tracking tool, NOT medical advice. Consult a physician before starting any exercise program. We are not responsible for injuries, health issues, or accidents. Always prioritize your safety while running.
                </p>
                <h3 className="font-bold text-white mb-2">12.3 Data Accuracy</h3>
                <p className="text-sm text-gray-300">
                  GPS data may be inaccurate due to environmental factors. Statistics (distance, pace, calories) are estimates. We do not guarantee the accuracy of any data.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Limitation of Liability</h2>
              <p className="uppercase text-sm leading-relaxed text-gray-300">
                To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, loss of profits, data, or goodwill, service interruptions or data loss, or any damages arising from your use of the App. Our total liability shall not exceed $50 USD or the amount you paid to use the service (currently $0), whichever is greater.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">14. Indemnification</h2>
              <p>You agree to indemnify, defend, and hold us harmless from any claims, damages, losses, or expenses (including legal fees) arising from your use of the App, your violation of these Terms, your violation of any third-party rights, or your content or activities.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">15. Dispute Resolution</h2>
              <p><strong>15.1 Informal Resolution:</strong> If you have a dispute, please contact us first at <a href="mailto:runwayteams@gmail.com" className="text-brand-lime hover:underline">runwayteams@gmail.com</a>. We'll try to resolve it informally.</p>
              <p className="mt-2"><strong>15.2 Governing Law:</strong> These Terms are governed by the laws of the Republic of Korea, without regard to conflict of law principles.</p>
              <p className="mt-2"><strong>15.3 Arbitration (Optional):</strong> For users in jurisdictions requiring arbitration, disputes will be resolved through binding arbitration, you waive your right to a jury trial, and class action lawsuits are not permitted. For all other users, disputes may be brought in the courts of competent jurisdiction.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">16. Changes to These Terms</h2>
              <p>We may update these Terms from time to time. We will notify you by posting the new Terms in the App, updating the "Effective Date" at the top, or sending an in-app notification or email for material changes. Your continued use of the App after changes become effective constitutes your acceptance of the new Terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">17. General Provisions</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Entire Agreement:</strong> These Terms, along with our Privacy Policy, constitute the entire agreement between you and us.</li>
                <li><strong>Severability:</strong> If any provision is found to be unenforceable, the remaining provisions will remain in effect.</li>
                <li><strong>No Waiver:</strong> Our failure to enforce any right or provision does not constitute a waiver of that right.</li>
                <li><strong>Assignment:</strong> You may not transfer your rights under these Terms. We may assign our rights to any successor or affiliate.</li>
                <li><strong>Language:</strong> This document is provided in English. In case of any translation, the English version prevails.</li>
              </ul>
            </section>

            <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">18. Contact Us</h2>
              <p className="mb-4">If you have any questions, concerns, or feedback about these Terms, please contact us:</p>
              <div className="space-y-2">
                <p><span className="text-gray-400">Developer Contact:</span> Runway Support</p>
                <p><span className="text-gray-400">Email:</span> <a href="mailto:runwayteams@gmail.com" className="text-brand-lime hover:underline">runwayteams@gmail.com</a></p>
                <p><span className="text-gray-400">Response Time:</span> We aim to respond within 7 business days</p>
              </div>
              <p className="mt-4 text-sm text-gray-500">For privacy-related inquiries, please refer to our Privacy Policy.</p>
            </section>

            <section className="text-sm text-gray-500 border-t border-white/10 pt-8">
               <h3 className="font-bold text-gray-400 mb-2">19. Acknowledgment</h3>
               <p>BY USING RUNWAY, YOU ACKNOWLEDGE THAT: You have read and understood these Terms; You agree to be bound by these Terms; You understand the risks associated with running and outdoor activities; You use the App at your own risk.</p>
               <p className="mt-4 text-brand-lime font-bold">Thank you for using Runway! Happy running! 🏃‍♂️🏃‍♀️</p>
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