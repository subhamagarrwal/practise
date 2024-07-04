import React from "react";

const GeneralDetails: React.FC = () => {
    return (
        <main className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800">404</h1>
                <p className="text-xl text-gray-600">Page Not Found</p>
                <p className="text-md text-gray-500 mt-2">
                    The page you are looking for does not exist.
                </p>
            </div>
        </main>
    );
};

export default GeneralDetails;
