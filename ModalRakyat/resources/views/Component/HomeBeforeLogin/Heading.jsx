import React from 'react'
import { motion } from 'framer-motion'
import './Heading.css'

const Heading = () => {
  return (
    <div id='heading'>
      <motion.div
        className="heading-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="text-section"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            MODAL RAKYAT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Dari rakyat untuk rakyat<br />Bersama membangun Indonesia emas
          </motion.p>
          <motion.a
            href="#"
            id="explore-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button id="explore-button">Explore</button>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="benefit-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>No Fee For Investors</h2>
        <p>
          Kami akan mengambil <strong>3% dari pendanaan</strong> yang <strong>diperoleh UMKM</strong>.<br />
          Investor akan membeli dalam bentuk <strong>unit</strong> dengan <strong>harga yang ditentukan</strong> oleh UMKM.<br />
          Setelah investors melakukan pembelian, maka investors hanya bisa <strong>melakukan penjualan setelah 1 tahun</strong>.
        </p>
      </motion.div>
    </div>
  )
}

export default Heading
