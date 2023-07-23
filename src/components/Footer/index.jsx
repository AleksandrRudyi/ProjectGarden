import React from 'react'
import s from './style.module.css';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';


export default function Footer() {
  return (
    <div className={s.main}>
        <div className={s.main_container}>
        <div className={s.card_details}>
          <div style={{ fontWeight: '600' }}>Contact</div>
          <div  style={{ fontWeight: '600' }} className={s.phone}>+49 999 999 99 99</div>
          <div className={s.social_media}>
            <Link to="https://instagram.com/alexandr_rudiy?igshid=MjEwN2IyYWYwYw==">
              <FaInstagram size={44} />
              <p>Instagram</p>
            </Link>
            <Link to="https://www.whatsapp.com/">
              <FaWhatsapp size={44} />
              <p>WhatsApp</p>
            </Link>
          </div>
        </div>
        <div className={s.address_details}>
          <div className={s.adress_size} style={{ fontWeight: '700', fontSize: '40px' }}>Address</div>
          <div className={s.adress}>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</div>
          <div style={{ fontSize: '18px', paddingTop: '25px', fontWeight: '500' }}>Working Hours:</div>
          <div style={{ fontSize: '24px',fontWeight: '600' }}>24 hours a day</div>
        </div>
      </div>
      
      <iframe
              className={s.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4090467601136!2d13.3701737934254!3d52.507936065083385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sde!4v1687802320826!5m2!1sru!2sde"
              width="600"
              height="450"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps - Местоположение Linkstraße 2, Berlin"
          />
    </div>
  )
}