import React, { Component } from "react"
import { Link } from 'gatsby'

export default class ContactForm extends Component {
    render() {
        return (
            <form name="contact" netlify>
                <input type="hidden" name="form-name" value="contact" />
                <div>
                    <label for="nameInput" class="form-label">Name</label>
                    <input type="text" class="form-control" id="nameInput"/>
                </div>
                <div>
                    <label for="emailInput" class="form-label">Email Address</label>
                    <input type="email" class="form-control" id="emailInput"/>
                </div>
                <div>
                    <label for="messageInput" class="form-label">Message</label>
                    <textarea class="form-control" id="messageInput"/>
                </div>
                <button type="submit" class="btn btn-primary">Send</button>
            </form>
        )
    }
}