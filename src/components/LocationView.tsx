﻿const LocationView = () => {
    return <div className="w-full aspect-[7/16] lg:aspect-[16/7]">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.4920169335433!2d80.98651966951581!3d26.777287795836582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be5206a3b958d%3A0x58b29f2063c60a54!2sTejas%20Medical%20Store!5e0!3m2!1sen!2sin!4v1702805475559!5m2!1sen!2sin"
            className="w-full h-full"
            style={{ border: "0" }}
            loading="lazy"></iframe>
    </div>
}

export default LocationView