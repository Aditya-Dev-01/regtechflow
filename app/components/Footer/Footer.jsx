import Image from "next/image";
import Link from "next/link";
import World from "../../../public/images/world.png"
import Insta from "../../../public/images/insta.png"
import linkdn from "../../../public/images/Linkden.png"
import facebook from "../../../public/images/facebook.png"
import Drop from "../../../public/icons/drop.svg"

const Footer = () => {
  return (
    <footer className="">
      <div className="">
        <div className="py-16 grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center py-2">
                        <Image
                            src="/icons/icon.svg"
                            className="mr-2"
                            alt="Logo"
                            width={36}
                            height={34}
                        />
                        
                        <span className="text-2xl font-bold text-[#404653]  ">RegTechFlow</span>
                    </Link>
          </div>

          <div>
            <h3 className="text-base font-semibold text-[#1E1E1E] py-2 px-3">
              Solutions
            </h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-[#1E1E1E]/70 text-base font-medium hover:text-[#6200EE] px-2.5 py-1.5 block">Corporate Management</Link></li>
              <li><Link href="#" className="text-[#1E1E1E]/70 text-base font-medium hover:text-[#6200EE] px-2.5 py-1.5 block">License Management</Link></li>
              <li><Link href="#" className="text-[#1E1E1E]/70 text-base font-medium hover:text-[#6200EE] px-2.5 py-1.5 block">Compliance Monitoring</Link></li>
              <li><Link href="#" className="text-[#1E1E1E]/70 text-base font-medium hover:text-[#6200EE] px-2.5 py-1.5 block">Consultants & Advisors Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-[#1E1E1E] py-2 px-3">
              Security
            </h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-[#1E1E1E]/70 text-base font-medium hover:text-[#6200EE] px-2.5 py-1.5 block">Data Security and Encryption</Link></li>
              <li><Link href="#" className="text-[#1E1E1E]/70 text-base font-medium hover:text-[#6200EE] px-2.5 py-1.5 block">Real-time Notifications</Link></li>
              <li><Link href="#" className="text-[#1E1E1E]/70 text-base font-medium hover:text-[#6200EE] px-2.5 py-1.5 block">Security Audits</Link></li>
              <li><Link href="#" className="text-[#1E1E1E]/70 text-base font-medium hover:text-[#6200EE] px-2.5 py-1.5 block">Access Controls</Link></li>
              <li><Link href="#" className="text-[#1E1E1E]/70 text-base font-medium hover:text-[#6200EE] px-2.5 py-1.5 block">Authentication</Link></li>
              <li><Link href="#" className="text-[#1E1E1E]/70 text-base font-medium hover:text-[#6200EE] px-2.5 py-1.5 block">Backup and Replication</Link></li>
              <li><Link href="#" className="text-[#1E1E1E]/70 text-base font-medium hover:text-[#6200EE] px-2.5 py-1.5 block">Cloud Hosting Solutions</Link></li>
              <li><Link href="#" className="text-[#1E1E1E]/70 text-base font-medium hover:text-[#6200EE] px-2.5 py-1.5 block">Certifications</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-[#1E1E1E] py-2 px-3">
              About Us
            </h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-[#1E1E1E]/70 text-base font-medium hover:text-[#6200EE] px-2.5 py-1.5 block">Our Story</Link></li>
              <li><Link href="#" className="text-[#1E1E1E]/70 text-base font-medium hover:text-[#6200EE] px-2.5 py-1.5 block">Our Core Values</Link></li>
              <li><Link href="#" className="text-[#1E1E1E]/70 text-base font-medium hover:text-[#6200EE] px-2.5 py-1.5 block">Meet The Team</Link></li>
              <li><Link href="#" className="text-[#1E1E1E]/70 text-base font-medium hover:text-[#6200EE] px-2.5 py-1.5 block">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-[#1E1E1E] py-2 px-3">
              Contact
            </h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-[#1E1E1E]/70 text-base font-medium hover:text-[#6200EE] px-2.5 py-1.5 block">Send a Message</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-[#1E1E1E] py-2 px-3">
              Blog
            </h3>
          </div>
        </div>

        <div className="mt-8 pt-10 flex flex-col md:flex-row items-center justify-between text-base">
          <p className="text-base text-[#1E1E1E]/70 font-medium">© RegTechFlow 2024</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-[#1E1E1E]/70 font-medium hover:text-[#6200EE]">Terms & Conditions</Link>
            <Link href="#" className="text-[#1E1E1E]/70 font-medium hover:text-[#6200EE]">Privacy Policy</Link>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button className="text-[#1E1E1E]/70 text-base font-medium border border-[#290064] rounded-full px-4 py-2 flex  gap-2 items-center">
            <Image src={World} alt="world" width={20} height={20}/>
            <p>  English </p>

            <Image src={Drop} alt="drop" width={16} height={16}/>
            </button>
            <Link href="#" className="text-[#1E1E1E]/70 font-medium hover:text-[#6200EE]"> <Image src={linkdn} alt="insta" width={20} height={20}/></Link>
            <Link href="#" className="text-[#1E1E1E]/70 font-medium hover:text-[#6200EE]"> <Image src={facebook} alt="world" width={20} height={20}/></Link>
            <Link href="#" className="text-[#1E1E1E]/70 font-medium hover:text-[#6200EE]"> <Image src={Insta} alt="world" width={20} height={20}/></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
