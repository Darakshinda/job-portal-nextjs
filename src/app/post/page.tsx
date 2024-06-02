'use client';
import React, { useState } from 'react';
import styles from './post.module.css';
import Axios from 'axios';

function Post() {
  const [formData, setFormData] = useState({
    companyName: '',
    position: '',
    employmentType: '',
    primaryTag: '',
    tagsKeywordsStack: '',
    jobLocations: '',
    minSalary: '',
    maxSalary: '',
    jobDescription: '',
    benefits: '',
    applyEmail: '',
    applyEmailURL: '',
    howToApply: '',
    companyTwitter: '',
    companyEmail: '',
    invoiceEmail: '',
    invoiceAddress: '',
    feedbackBox: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  const handleSubmit = async () => {
    
    try {
      const res = await Axios.post('http://localhost:8000/jobs/register/', formData);
      alert('Job profile posted!');
      console.log(res.data);
      // Optionally, you can redirect to another page after successful post
    } catch (error) {
      console.error('Error posting job:', error);
      // Handle error
    }
  };

  return (
    <div className='body'>
      <div>
        <div className={styles.inputContainer}>
          {/* Company Name */}
          <label>Company Name</label>
          <input
            type="text"
            id="companyName"
            className={styles.nameInput}
            placeholder="Enter company name"
            value={formData.companyName}
            onChange={handleChange} />
          {/* Position */}
          <label>Position</label>
          <input
            type="text"
            id="position"
            className={styles.nameInput}
            placeholder="Enter position"
            value={formData.position}
            onChange={handleChange} />
          {/* Employment Type */}
          <label>Employment type</label>
          <input
            type="text"
            id="employmentType"
            className={styles.nameInput}
            placeholder="Enter employment type"
            value={formData.employmentType}
            onChange={handleChange} />
          {/* Primary Tag */}
          <label>Primary Tag</label>
          <input
            type="text"
            id="primaryTag"
            className={styles.nameInput}
            placeholder="Enter primary tag"
            value={formData.primaryTag}
            onChange={handleChange} />
          {/* Tags, Keywords or Stack */}
          <label>Tags, Keywords or Stack</label>
          <input
            type="text"
            id="tagsKeywordsStack"
            className={styles.nameInput}
            placeholder="Enter tags, keywords, or stack"
            value={formData.tagsKeywordsStack}
            onChange={handleChange} />
          {/* Job Restricted to Locations */}
          <label>Job Restricted to Locations</label>
          <input
            type="text"
            id="jobLocations"
            className={styles.nameInput}
            placeholder="Enter job restricted locations"
            value={formData.jobLocations}
            onChange={handleChange} />
          {/* Min and Max Salary */}
          <div className={styles.salaryContainer}>
            <label>Salary Range</label>
            <div className={styles.salaryInputContainer}>
              <input
                type="number"
                id="minSalary"
                className={styles.salaryInput}
                placeholder="Min"
                value={formData.minSalary}
                onChange={handleChange} />
              <span className={styles.salarySeparator}>-</span>
              <input
                type="number"
                id="maxSalary"
                className={styles.salaryInput}
                placeholder="Max"
                value={formData.maxSalary}
                onChange={handleChange} />
            </div>
          </div>

          {/* Job Description */}
          <label>Job Description</label>
          <textarea
            id="jobDescription"
            className={styles.descriptionInput}
            placeholder="Enter job description"
            value={formData.jobDescription}
            onChange={handleChange} />
          {/* Benefits */}
          <label>Benefits </label>
          <input
            type="text"
            id="benefits"
            className={styles.nameInput}
            placeholder="Enter benefits"
            value={formData.benefits}
            onChange={handleChange} />
          {/* Apply Email */}
          <label>Apply email</label>
          <input
            type="email"
            id="applyEmail"
            className={styles.nameInput}
            placeholder="Enter apply email"
            value={formData.applyEmail}
            onChange={handleChange} />
          {/* Apply  URL */}
          <label>Apply URL</label>
          <input
            type="text"
            id="applyEmailURL"
            className={styles.nameInput}
            placeholder="Enter apply URL"
            value={formData.applyEmailURL}
            onChange={handleChange} />
          {/* How to Apply */}
          <label>How to Apply </label>
          <textarea
            id="howToApply"
            className={styles.descriptionInput}
            placeholder="Enter how to apply"
            value={formData.howToApply}
            onChange={handleChange} />
          {/* Company Twitter */}
          <label>Company Twitter</label>
          <input
            type="text"
            id="companyTwitter"
            className={styles.nameInput}
            placeholder="Enter company Twitter"
            value={formData.companyTwitter}
            onChange={handleChange} />
          {/* Company Email */}
          <label>Company Email</label>
          <input
            type="email"
            id="companyEmail"
            className={styles.nameInput}
            placeholder="Enter company email"
            value={formData.companyEmail}
            onChange={handleChange}
            required />
          {/* Invoice Email */}
          <label>Invoice Email</label>
          <input
            type="email"
            id="invoiceEmail"
            className={styles.nameInput}
            placeholder="Enter invoice email"
            value={formData.invoiceEmail}
            onChange={handleChange} />
          {/* Invoice Address */}
          <label>Invoice Address</label>
          <input
            type="text"
            id="invoiceAddress"
            className={styles.nameInput}
            placeholder="Enter invoice address"
            value={formData.invoiceAddress}
            onChange={handleChange} />
          {/* Feedback Box */}
          <label>Feedback Box</label>
          <textarea
            id="feedbackBox"
            className={styles.descriptionInput}
            placeholder="Enter your feedback"
            value={formData.feedbackBox}
            onChange={handleChange} />
          {/* Button to submit the form */}
          <button className={styles.postButton} onClick={handleSubmit}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
