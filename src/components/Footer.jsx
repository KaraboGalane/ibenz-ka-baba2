import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa'
import StarEmblem from './StarEmblem'
import GrilleDivider from './GrilleDivider'
import { navLinks } from '../data/navLinks'
import { siteConfig } from '../data/siteConfig'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-ink-900 border-t border-white/5 pt-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <StarEmblem className="w-7 h-7 text-gold" />
              <span className="font-wordmark text-lg text-cloud">iBenz ka Baba</span>
            </div>
            <p className="text-sm text-cloud/60 leading-relaxed max-w-xs">
              {siteConfig.tagline}. Vintage Mercedes chauffeur service for weddings, ceremonies
              and once-in-a-lifetime occasions.
            </p>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-cloud/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-cloud/70">
              <li>{siteConfig.phone}</li>
              <li className="break-all">{siteConfig.ownerEmail}</li>
              <li>{siteConfig.address}</li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Follow</h4>
            <div className="flex gap-3">
              {[
                { Icon: FaInstagram, href: siteConfig.social.instagram, label: 'Instagram' },
                { Icon: FaFacebookF, href: siteConfig.social.facebook, label: 'Facebook' },
                { Icon: FaTiktok, href: siteConfig.social.tiktok, label: 'TikTok' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cloud/80 transition-all duration-300 hover:border-gold hover:text-gold hover:-translate-y-0.5"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14">
          <GrilleDivider />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-7 text-xs text-cloud/40">
          <p>© {year} iBenz ka Baba. All rights reserved.</p>
          <p className="italic font-display text-gold/70">Arrive Like Legends.</p>
        </div>
      </div>
    </footer>
  )
}
