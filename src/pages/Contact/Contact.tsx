import React, { useState } from 'react';
import Card from '../../Card/Card';
import { Form, useSubmit } from 'react-router-dom';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const submit = useSubmit();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', { name, email, message });
        submit({ name, email, message });
    };

    return (
            <div>
                <h1>Contact Us</h1>
                    <Card header="Contact Form">
                        <Form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        />
                                </div>
                                <div>
                                <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        />
                                </div>
                                <div>
                                    <label htmlFor="message">Message:</label>
                                    <textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                        />
                                </div>
                                <button type="submit">Submit</button>
                                
                        </Form>
                    </Card>
            </div>
    );
};

export default Contact;