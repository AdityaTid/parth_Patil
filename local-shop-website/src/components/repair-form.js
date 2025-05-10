import React, { useState } from 'react';

const RepairForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [issue, setIssue] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission, e.g., send data to an API
        setSubmitted(true);
    };

    return (
        <div className="repair-form">
            <h2>Request AC Repair</h2>
            {submitted ? (
                <p>Thank you for your request! We will contact you soon.</p>
            ) : (
                <form onSubmit={handleSubmit}>
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
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="issue">Issue:</label>
                        <textarea
                            id="issue"
                            value={issue}
                            onChange={(e) => setIssue(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Submit Request</button>
                </form>
            )}
        </div>
    );
};

export default RepairForm;