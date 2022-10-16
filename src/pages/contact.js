import * as React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactForm from "../components/contactform"

const ContactPage = () => (
    <Layout>
        <Seo title="Contact Us"/>
        <h1>Contact Us</h1>
        <ContactForm/>
    </Layout>
)

export const Head = () => <Seo title="Contact Us" />

export default ContactPage