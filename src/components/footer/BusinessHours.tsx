import FooterHeading from './FooterHeading'

const BusinessHours = () => {
  return (
      <div className="text-white/80 mt-8">
          <FooterHeading title="Business Hours" />
          <ul className="flex flex-col gap-2">
              <li className="hover:text-primary transition">Mon: Open 24 Hours</li>
              <li className="hover:text-primary transition">Tue: Open 24 Hours</li>
              <li className="hover:text-primary transition">Wed: Open 24 Hours</li>
              <li className="hover:text-primary transition">Thu: Open 24 Hours</li>
              <li className="hover:text-primary transition">Fri: Open 24 Hours</li>
              <li className="hover:text-primary transition">Sat: Open 24 Hours</li>
              <li className="hover:text-primary transition">Sun: Open 24 Hours</li>

          </ul>
      </div>
  )
}

export default BusinessHours