import React from 'react'
import {} from '@chakra-ui/icons'
import styles from './footer.module.css'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'
import {Heading, Text, Box, List, ListItem, ListIcon} from '@chakra-ui/react'
import {EmailIcon, PhoneIcon} from '@chakra-ui/icons'

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <Fade left>
        <div className={styles.footer_text}>
          <div className="heading">
            <h4>BBO Farm Ventures</h4>
          </div>

          <div>
            <p>At BBO Farm, All our primary processing activities are done in-house using state of the art quality equipment’s and processes with our employees driving these procedures directly.</p>
          </div>
        </div>
      </Fade>

      <div className={styles.footer_links}>

        <Fade right>
          <div className={styles.columns}>

            <div className={styles.link_list}>
              <h4>Company</h4>
              <ul>
                <li>Products</li>
                <li>Teams</li>
                <li>Gallery</li>
                <li>Partners</li>
              </ul>
            </div>


            <div className={styles.link_list}>
              <h4>Quick Links</h4>
              <ul>
                <li><PhoneIcon/> +234 802 365 2667</li>
                <li><EmailIcon/> info@bbofarmventures.com</li>
                <li><EmailIcon /> bbofarmventures@gmail.com</li>
              </ul>
            </div>

            <div className={styles.link_list}>
              <h4>Contact</h4>
              <ul>
                <li>FAQs</li>
                <li>Warehouses</li>
                <li>Addresses</li>
                <li>Support</li>
              </ul>
            </div>

          </div>
        </Fade>
      </div>


    </footer>
  )
}

export default Footer 