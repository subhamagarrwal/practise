import React from "react";

const JobDetails: React.FC = () => {
    return (
        <div className="p-8 w-[80%] pr-32 border-r-2 border-[#1e1e1e]">
            <h2 className="font-semibold text-[32px] mb-6">Details</h2>
            <div>
                <p className="mb-6 font-normal text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque enim libero, suscipit at egestas eget, ullamcorper at augue. Etiam condimentum erat nisi, vel dictum tellus tristique in. Aliquam egestas metus in tristique posuere. Pellentesque finibus laoreet magna sed rhoncus. Curabitur sodales ultricies placerat. Quisque accumsan ante ac augue interdum ullamcorper. Integer nibh neque, placerat vel lorem ut, aliquet pretium diam.
                </p>
                <p className="mb-6 font-normal text-lg">
                    Consectetur adipiscing elit. Quisque enim libero, suscipit at egestas eget, ullamcorper at augue. Etiam condimentum erat nisi, vel dictum tellus tristique in. Aliquam egestas metus in tristique posuere. Pellentesque finibus laoreet.
                </p>
                <ul className="list-disc list-inside mb-6 font-normal text-lg">
                    <li>Consectetur adipiscing elit. Quisque enim libero, suscipit at egestas</li>
                    <li>Ullamcorper at augue. Etiam condimentum erat nisi</li>
                    <li>Vel dictum tellus tristique in. Aliquam egestas metus in tristique posuere. Pellentesque finibus laoreet</li>
                </ul>
                <p>Site should be similar to xyzCompany.com</p>
            </div>
        </div>
    );
};

export default JobDetails;
