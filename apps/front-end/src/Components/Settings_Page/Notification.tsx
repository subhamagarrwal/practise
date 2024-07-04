import React from "react";
import SettingsHeader from "./SettingsHeader";
import NotificationCheckList from "./NotificationCheckList";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";

const Notification: React.FC = () => {
    return (
        <main>
            <SettingsHeader
                title="Notification"
                description="Get notification what's happening right now you can turn off at any time."
            />

            <section className="w-full mx:ml-8 sx:bg-[#1C1B1A] sx:my-6 sx:border-2 sx:border-[#252525] rounded-md py-6 sx:p-8 mx:p-12">
                <h3 className="font-semibold text-base mx:text-xl mx:pl-8">Email Notification</h3>
                <p className="font-normal text-sm mx:text-lg mx:pl-8 mb-8">Substances can send you email notification for any  new direct messages.</p>

                {/* Toggle Button */}
                <div className="flex items-center space-x-2 mb-8">
                    <Switch id="on1" className="dark" />
                    <Label htmlFor="on1" className="pl-2">On</Label>
                </div>

                {/* Notification Check Lists */}
                <section className="mb-6">
                    <NotificationCheckList
                        checkboxId="terms1"
                        label1="News  and Update Settings"
                        label2="The latest news about the  lastest features and software ."
                    />
                </section>

                <section className="mb-6">
                    <NotificationCheckList
                        checkboxId="terms2"
                        label1="Tips  and Tutorials"
                        label2="The latest news about the  lastest features and software ."
                    />
                </section>

                <section className="mb-6">
                    <NotificationCheckList
                        checkboxId="terms3"
                        label1="Offers and Promotions"
                        label2="The latest news about the  lastest features and software ."
                    />
                </section>
            </section>

            <section className="w-full mx:ml-8 sx:bg-[#1C1B1A] sx:my-6 sx:border-2 sx:border-[#252525] rounded-md py-6 sx:p-8 mx:p-12">
                <h3 className="font-semibold text-base mx:text-xl mx:pl-8">More Activity</h3>
                <p className="font-normal text-sm mx:text-lg mx:pl-8 mb-8">Substances can send you email notification for any  new direct messages.</p>

                {/* Toggle Button */}
                <div className="flex items-center space-x-2 mb-8">
                    <Switch id="on2" className="dark" />
                    <Label htmlFor="on2" className="pl-2">On</Label>
                </div>

                {/* Notification Check Lists */}
                <section className="mb-6">
                    <NotificationCheckList
                        checkboxId="terms4"
                        label1="All Reminders & Activity"
                        label2="Notify me all system activates and reminders that have created ."
                    />
                </section>

                <section className="mb-6">
                    <NotificationCheckList
                        checkboxId="terms5"
                        label1="Activity only"
                        label2="Only notify me we have the latest activity updats about increasing or dec datadecreasing data ."
                    />
                </section>
            </section>
        </main>
    );
};

export default Notification;
