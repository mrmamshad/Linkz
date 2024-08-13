import ProfileBox from "./components/ProfileBox";
import React from "react";
import { SiMailgun } from "react-icons/si";
import ContactLinks from "./components/ContactLinks";
import ContactsHeader from "./components/ContactsHeader";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { FaBattleNet } from "react-icons/fa";
import { SiCounterstrike } from "react-icons/si";
import { FaXbox } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import {
    FaFacebookMessenger,
    FaWhatsapp,
    FaTelegram,
    FaDiscord,
    FaGithub,
    FaFacebookSquare,
    FaSteam,
} from "react-icons/fa";

export default function App() {
    return (
        <div className="relative min-h-screen  text-balance  bg-[#ebebeb]   ">
            <div className="grid grid-cols-1 sm:grid-cols-2 h-full sm:h-screen overflow-y-auto   sm:overflow-y-hidden ">
                {/* profile div */}
                <div className="sm:self-start self-auto p-4">
                    <ProfileBox />
                </div>

                {/* links div */}
                <div className="mt-16 overflow-y-auto p-4 space-y-4 text-whiteSmoke h-full sm:h-screen">
                    <div className="">
                        <ContactsHeader name={"contact"} />
                        <div className="mt-5 mb-16 space-y-4">
                            <ContactLinks icon={SiMailgun} name="Mail" hoverBg={"#EA4335"} />
                            <ContactLinks
                                icon={FaFacebookMessenger}
                                name="Messenger"
                                hoverBg={"#0078FF"}
                            />
                            <ContactLinks icon={FaWhatsapp} name="Whatsapp" hoverBg={"#25D366"} />
                            <ContactLinks icon={FaTelegram} name="Telegram" hoverBg={"#0088cc"} />
                        </div>
                    </div>

                    <div className="">
                        <ContactsHeader name={"social"} />
                        <div className="mt-5 space-y-4">
                            <ContactLinks icon={FaDiscord} name="Discord" hoverBg={"#5865F2"} />
                            <ContactLinks icon={FaGithub} name="Github" hoverBg={"#181717"} />
                            <ContactLinks
                                icon={FaFacebookSquare}
                                name="Facebook"
                                hoverBg={"#1877F2"}
                            />
                            <ContactLinks icon={TiSocialLinkedin} name="LinkedIn" hoverBg={"#0A66C2 "} />
                            <ContactLinks icon={TiSocialTwitter} name="Twitter" hoverBg={"#1DA1F2"} />
                            <ContactLinks icon={FaInstagram} name="Instagram" hoverBg={"#E1306C"} />
                            <ContactLinks icon={FaTiktok} name="TikTok" hoverBg={"#000000"} />
                            <ContactLinks icon={FaYoutube} name="Youtube" hoverBg={"#FF0000"} />
                            <ContactLinks icon={FaSpotify} name="Spotify" hoverBg={"#1DB954"} />
                            <ContactLinks
                                icon={FaStackOverflow}
                                name="StackOverflow"
                                hoverBg={"#F58025"}
                            />
                        </div>
                    </div>

                    <div>
                        <ContactsHeader name={"Gaming"} />
                        <div className="mt-5 space-y-4">
                            <ContactLinks icon={FaSteam} name="Steam" hoverBg={"#00ADEE"} />
                            <ContactLinks icon={SiEpicgames} name="EpicGames" hoverBg={"#313131"} />
                            <ContactLinks icon={FaBattleNet} name="BattleNet" hoverBg={"#00B9FF"} />
                            <ContactLinks icon={SiCounterstrike} name="CounterStrike" hoverBg={"#F0E68C"} />
                            <ContactLinks icon={FaXbox} name="Xbox" hoverBg={"#107C10"} />
                            <ContactLinks icon={FaPlaystation} name="PlayStation" hoverBg={"#003791"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
