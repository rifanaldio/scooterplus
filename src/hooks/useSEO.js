import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updateSEO } from '../components/SEO';

const seoConfig = {
  '/': {
    title: 'Home',
    description: 'Servis Vespa matic premium, cepat, dan bergaransi. Dari ganti oli, tune-up, detailing, sampai upgrade performa.'
  },
  '/services': {
    title: 'Services',
    description: 'Layanan servis Vespa matic lengkap: Servis Berkala, Diagnostik & Tuning, Detailing & Coating. Paket special dengan harga transparan.'
  },
  '/gallery': {
    title: 'Gallery',
    description: 'Lihat koleksi foto Vespa hasil servis dan detailing kami. Dari daily ride hingga premium coating.'
  },
  '/contact': {
    title: 'Contact',
    description: 'Jadwalkan servis Vespa Anda. Hubungi kami atau isi form booking untuk konsultasi dan appointment.'
  }
};

const useSEO = () => {
  const location = useLocation();

  useEffect(() => {
    const config = seoConfig[location.pathname] || seoConfig['/'];
    updateSEO(config.title, config.description, location.pathname);
  }, [location.pathname]);
};

export default useSEO;

