import Layout from '../layout';
import React, { useEffect, useState } from 'react';
import DialogGallery from '../components/Hybrid/DialogGallery';
import { useRouter } from 'next/router';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const router = useRouter();
  const { gallery } = router.query;
  const [openDialogGalley, setOpenDialogGalley] = useState(false);

  useEffect(() => {
    if (gallery) {
      setOpenDialogGalley(true);
    } else {
      setOpenDialogGalley(false);
    }
  }, [router]);
  return (
    <Layout>
      <div style={{ height: '500px', marginTop: '200px' }}>
        <Link href={{ pathname: '/', query: { gallery: 'test' } }}>
          <a>path</a>
        </Link>
      </div>

      {openDialogGalley && <DialogGallery />}
    </Layout>
  );
}
