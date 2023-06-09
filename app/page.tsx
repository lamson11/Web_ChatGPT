import React from "react";
import { SunIcon, BoltIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import ChatInput from "../components/ChatInput";
import '../styles/style.css'


function HomePage() {
    return (
            <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
                <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

                <div className="flex space-x-2 text-center">
                    <div>
                        <div className="flex flex-col items-center justify-center mb-5">
                            {/* Sun Icon */}
                            <SunIcon className="h-8 w-8" />
                            <h2>Examples</h2>
                        </div>

                        <div className="space-y-2">
                            <p className="infoText">"Explain Something to me"</p>
                            <p className="infoText">
                                "What is the difference between a dog and a cat?"
                            </p>
                            <p className="infoText">"What is the color of the sun?</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col items-center justify-center mb-5">
                            {/* Sun Icon */}
                            <BoltIcon className="h-8 w-8" />
                            <h2>Capabilities</h2>
                        </div>

                        <div className="space-y-2">
                            <p className="infoText">"Remembers what user said eaelier in the conversation"</p>
                            <p className="infoText">
                                "Allows user to provide follow-up corrections"
                            </p>
                            <p className="infoText">"Trained to decline inappropriate requests"</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col items-center justify-center mb-5">
                            {/* Sun Icon */}
                            <ExclamationTriangleIcon className="h-8 w-8" />
                            <h2>Limitations</h2>
                        </div>

                        <div className="space-y-2">
                            <p className="infoText">"May occasionally generate incorrect information"</p>
                            <p className="infoText">
                                "May occasionally produce harmful instructions or biased content"
                            </p>
                            <p className="infoText">"Limited knowledge of world and events after 2022"</p>
                        </div>
                    </div>
                </div>

                <div className="clear"></div>

                <footer>
                    <ChatInput />
                </footer>
            </div>
    )
}

export default HomePage;