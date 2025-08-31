const LocationView = () => {
    return (
        <div className="w-full aspect-[7/16] lg:aspect-[16/7]">
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d366.4681501183363!2d80.99467745526034!3d26.84916672638759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2d1b5388b83%3A0xf5af9d9fc2ae087a!2s3%2F22%2C%20C%2F3%2F22%2C%20Vikaskhand%203%2C%20Vikas%20Khand%2C%20Gomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226010!5e0!3m2!1sen!2sin!4v1744137179268!5m2!1sen!2sin" className="w-full h-full" loading="lazy"></iframe> */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.4920169335433!2d80.98651966951581!3d26.777287795836582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be5206a3b958d%3A0x58b29f2063c60a54!2sTejas%20Medical%20Store!5e0!3m2!1sen!2sin!4v1702805475559!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: "0" }}
                loading="lazy"></iframe>
        </div>
    );
};

export default LocationView;
