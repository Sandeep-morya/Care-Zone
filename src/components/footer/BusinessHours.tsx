import FooterHeading from './FooterHeading'

const BusinessHours = () => {
  return (
      <div className="text-white/80 mt-8">
          <FooterHeading title="Business Hours" />
          <ul className="flex flex-col gap-2">
              <li className="hover:text-primary transition grid grid-cols-[1fr,2fr]"><span>Mon:</span> <span>Open 24 Hours</span></li>
              <li className="hover:text-primary transition grid grid-cols-[1fr,2fr]"><span>Tue:</span> <span>Open 24 Hours</span></li>
              <li className="hover:text-primary transition grid grid-cols-[1fr,2fr]"><span>Wed:</span> <span>Open 24 Hours</span></li>
              <li className="hover:text-primary transition grid grid-cols-[1fr,2fr]"><span>Thu:</span> <span>Open 24 Hours</span></li>
              <li className="hover:text-primary transition grid grid-cols-[1fr,2fr]"><span>Fri:</span> <span>Open 24 Hours</span></li>
              <li className="hover:text-primary transition grid grid-cols-[1fr,2fr]"><span>Sat:</span> <span>Open 24 Hours</span></li>
              <li className="hover:text-primary transition grid grid-cols-[1fr,2fr]"><span>Sun:</span> <span>Open 24 Hours</span></li>

          </ul>
      </div>
  )
}

export default BusinessHours