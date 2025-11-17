import React, { useState, useEffect } from 'react';

// This tells TypeScript that JSZip will be available on the global window object
declare var JSZip: any;

type Tab = 'store' | 'partner';

// =================================================================================
// BACKEND CONFIGURATION - ACTION REQUIRED
// =================================================================================
// This frontend is configured to send registration data to a Google Apps Script backend.
// You MUST create and deploy this script yourself for the form to work.
//
// STEP 1: Create a Google Apps Script associated with your Google Sheet.
// STEP 2: Paste the required backend script code into your Apps Script project.
// STEP 3: Deploy the script as a Web App (with access for "Anyone").
// STEP 4: Paste your unique Web App URL here to connect the form.
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycb.../exec'; // <-- PASTE YOUR WEB APP URL HERE

// This is the ID of the Google Drive folder where zipped documents will be stored.
// This has been set based on the link you provided.
const GOOGLE_DRIVE_FOLDER_ID = '1ZTeP3cvkzfUGX4OMIOw7XZEnzdN';
// =================================================================================


interface OfferState {
  enabled: boolean;
  limit: number;
  currentCount: number;
}

const RegistrationPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('store');
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [formType, setFormType] = useState<Tab | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    // --- Dynamic Offer State ---
    const [offer, setOffer] = useState<OfferState | null>(null);
    const [offerLoading, setOfferLoading] = useState(true);

    // This simulates fetching the current promotion status from your backend.
    // In a real application, you would replace this with a `fetch` call.
    useEffect(() => {
        const fetchOfferStatus = () => {
            try {
                // --- DEMO LOGIC ---
                // In a real app, you would fetch this data.
                // You can change `enabled` to `false` to test the payment flow.
                const backendResponse: OfferState = {
                    enabled: true, 
                    limit: 777,
                    currentCount: parseInt(localStorage.getItem('storeRegistrationsCount') || '770', 10),
                };
                setOffer(backendResponse);
                // --- END DEMO LOGIC ---
            } catch (err) {
                console.error("Failed to fetch offer status:", err);
                // Fallback to payment mode if the backend fails
                setOffer({ enabled: false, limit: 0, currentCount: 0 });
            } finally {
                setOfferLoading(false);
            }
        };

        fetchOfferStatus();
    }, []);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setSubmitted(false);

        const formElement = e.target as HTMLFormElement;
        const formData = new FormData(formElement);
        const name = formData.get('name') as string;

        if (GOOGLE_SCRIPT_URL.includes('AKfycb...')) {
            setError('DEMO MODE: The Google Apps Script backend URL has not been configured in the code. Form submission is disabled.');
            setIsLoading(false);
            return;
        }

        try {
            // 1. Zip all uploaded files
            const zip = new JSZip();
            const fileInputs = formElement.querySelectorAll<HTMLInputElement>('input[type="file"]');
            let fileFound = false;
            for (const input of fileInputs) {
                if (input.files && input.files.length > 0) {
                    for (let i = 0; i < input.files.length; i++) {
                        const file = input.files[i];
                        zip.file(file.name, file);
                        fileFound = true;
                    }
                }
            }

            // 2. Prepare data for Google Apps Script
            const postData = new FormData();
            formData.forEach((value, key) => {
                if (typeof value === 'string') {
                   postData.append(key, value);
                }
            });

            if (fileFound) {
                const zipBlob = await zip.generateAsync({ type: 'blob' });
                const safeName = name.replace(/[^a-zA-Z0-9]/g, '_');
                postData.append('documentsZip', zipBlob, `${safeName}_${activeTab}_documents.zip`);
            }
            
            // 3. Add metadata for the backend script
            postData.append('registrationType', activeTab);
            postData.append('timestamp', new Date().toISOString());
            postData.append('driveFolderId', GOOGLE_DRIVE_FOLDER_ID);

            // 4. Send data to the backend
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: postData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok. The server might be busy or misconfigured.');
            }
            
            const result = await response.json();
            
            if (result.status === 'success') {
                setFormType(activeTab);
                setSubmitted(true);
                
                // Increment local storage count for the stats page and offer banner
                const storageKey = activeTab === 'store' ? 'storeRegistrationsCount' : 'partnerRegistrationsCount';
                const currentCount = parseInt(localStorage.getItem(storageKey) || '0', 10);
                localStorage.setItem(storageKey, (currentCount + 1).toString());
            } else {
                 throw new Error(result.message || 'Submission failed. The server reported an error.');
            }

        } catch (err: any) {
            setError(`Submission failed: ${err.message}. Please check your connection and try again.`);
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };
    
    const isOfferActiveForStore = activeTab === 'store' && offer?.enabled;
    const slotsLeft = offer ? offer.limit - offer.currentCount : 0;

    const commonFields = (
        <>
            <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-dark-text">Full Name / Store Name</label>
                <input type="text" name="name" id="name" required className="mt-1 block w-full bg-slate-700 border-slate-600 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm p-3" />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-text">Email Address</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full bg-slate-700 border-slate-600 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm p-3" />
            </div>
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-dark-text">Phone Number</label>
                <input type="tel" name="phone" id="phone" required className="mt-1 block w-full bg-slate-700 border-slate-600 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm p-3" />
            </div>
        </>
    );

    const storeFields = (
        <>
            <div className="sm:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-dark-text">Store Address or Google Maps Link</label>
                <input type="text" name="address" id="address" required className="mt-1 block w-full bg-slate-700 border-slate-600 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm p-3" />
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="gst" className="block text-sm font-medium text-dark-text">GST Number / License (Image Upload)</label>
                <p className="text-xs text-gray-500 mb-1">Please upload images of your GST certificate and store license.</p>
                <input type="file" name="gst_license_docs" id="gst" accept="image/*,application/pdf" multiple required className="mt-1 block w-full text-sm text-dark-text file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/20 file:text-secondary hover:file:bg-primary/30"/>
            </div>
        </>
    );
    
    const PaymentFields = () => (
        <div className="sm:col-span-2 mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <h3 className="text-lg font-bold text-light-text">Registration Fee</h3>
            <p className="text-dark-text mt-1">A one-time registration fee is required to join the network.</p>
            <div className="mt-4 text-3xl font-black text-secondary">
                ₹200
            </div>
            <p className="text-xs text-gray-500 mt-2">You will be redirected to a secure payment page upon submission.</p>
        </div>
    );

    const partnerFields = (
        <>
            <div className="sm:col-span-2">
                <label htmlFor="dl" className="block text-sm font-medium text-dark-text">Driving License & Vehicle RC (Image Upload)</label>
                 <p className="text-xs text-gray-500 mb-1">Please upload clear images of your driving license and vehicle registration.</p>
                <input type="file" name="partner_docs" id="dl" accept="image/*,application/pdf" multiple required className="mt-1 block w-full text-sm text-dark-text file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/20 file:text-secondary hover:file:bg-primary/30" />
            </div>
        </>
    );

    const getSubmitButtonText = () => {
        if (isLoading) return 'Submitting...';
        if (activeTab === 'store') {
            return isOfferActiveForStore ? 'Secure FREE Spot' : 'Pay ₹200 & Submit';
        }
        return 'Submit Application';
    };

    return (
        <div className="py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider">
                        Join Our Network
                    </h1>
                    <p className="mt-6 text-lg text-dark-text">
                        Become a part of the local commerce revolution. Register as a store or a delivery partner today.
                    </p>
                </div>
                
                 {isOfferActiveForStore && slotsLeft > 0 && (
                     <div className="max-w-3xl mx-auto mt-12 mb-8 bg-gradient-to-r from-primary-dark via-primary to-brand-red/80 rounded-2xl p-6 md:p-8 shadow-2xl shadow-primary/20 border border-secondary/20 animate-fade-in-up">
                        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-6">
                            <div className="text-6xl animate-bounce">🎁</div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">
                                    Exclusive Launch Offer
                                </h2>
                                <p className="mt-2 text-lg text-light-text font-semibold">
                                    Free Registration for the First <span className="text-secondary font-bold">777</span> Stores!
                                </p>
                                <p className="mt-1 text-md text-dark-text">
                                    Hurry, only a few slots are left!
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="max-w-2xl mx-auto mt-8">
                    <div className="border-b border-primary/20 mb-8">
                        <nav className="-mb-px flex justify-center space-x-8" aria-label="Tabs">
                            <button onClick={() => setActiveTab('store')} className={`${activeTab === 'store' ? 'border-secondary text-secondary' : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg`}>
                                Store Owner
                            </button>
                            <button onClick={() => setActiveTab('partner')} className={`${activeTab === 'partner' ? 'border-secondary text-secondary' : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg`}>
                                Delivery Partner
                            </button>
                        </nav>
                    </div>

                    <div className="bg-slate-800/50 p-8 rounded-xl border border-primary/20">
                        {submitted ? (
                            <div className="text-center py-12">
                                <h3 className="text-2xl font-bold text-secondary mb-4">Thank You!</h3>
                                <p className="text-light-text">Your {formType} application has been received. Our team will review your information and get in touch with you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    {commonFields}
                                    {activeTab === 'store' && storeFields}
                                    {activeTab === 'partner' && partnerFields}
                                    {activeTab === 'store' && !isOfferActiveForStore && !offerLoading && <PaymentFields />}
                                </div>
                                {error && (
                                    <div className="mt-6 p-4 bg-red-500/20 border border-red-500/50 text-red-300 rounded-lg text-sm">
                                        {error}
                                    </div>
                                )}
                                <div className="mt-8">
                                    <button 
                                      type="submit" 
                                      className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                      disabled={isLoading || offerLoading}
                                    >
                                        {isLoading && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>}
                                        {getSubmitButtonText()}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;