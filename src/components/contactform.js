import React, { Component } from "react"

export default class ContactForm extends Component {
    render() {
        return (
            <form name="contact" method="POST" data-netlify="true" onSubmit="submit">
                <input type="hidden" name="form-name" value="contact" />
                <div>
                    <label for="nameInput" class="form-label">Name</label>
                    <input type="text" class="form-control" id="nameInput" name="name" required/>
                </div>
                <div>
                    <label for="emailInput" class="form-label">Email Address</label>
                    <input type="email" class="form-control" id="emailInput" name="email" required/>
                </div>
                <div>
                    <label for="messageInput" class="form-label">Message</label>
                    <textarea class="form-control" id="messageInput" name="message" required/>
                </div>
                <button type="submit" class="btn btn-primary">Send</button>
            </form>
        )
    }
}