'use client';
import React from 'react';
import styles from './post.module.css'

const post = () => {
  return (
    <div className='body'>
    <div>
      <div>
        <div>post</div>
        <div className={styles.inputContainer}>
          <div className={styles.inputWrapper}>
            <label>Company Name</label>
            <div className={styles.inputBox}>
              <input
                type="text"
                id="companyName"
                className={styles.nameInput}
                placeholder="Enter company name"
              />
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <label>Position</label>
            <div className={styles.inputBox}>
              <input
                type="text"
                id="position"
                className={styles.nameInput}
                placeholder="Enter position"
              />
            </div>
          </div>
          {/* Employment Type */}
          <div className={styles.inputWrapper}>
            <label>Employment Type</label>
            <div className={styles.inputBox}>
              <input
                type="text"
                id="employmentType"
                className={styles.nameInput}
                placeholder="Enter employment type"
              />
            </div>
          </div>
          {/* Primary Tag */}
          <div className={styles.inputWrapper}>
            <label>Primary Tag</label>
            <div className={styles.inputBox}>
              <input
                type="text"
                id="primaryTag"
                className={styles.nameInput}
                placeholder="Enter primary tag"
              />
            </div>
          </div>
          {/* Tags, Keywords or Stack */}
          <div className={styles.inputWrapper}>
            <label>Tags, Keywords or Stack</label>
            <div className={styles.inputBox}>
              <input
                type="text"
                id="tagsKeywordsStack"
                className={styles.nameInput}
                placeholder="Enter tags, keywords, or stack"
              />
            </div>
          </div>
          {/* Job Restricted to Locations */}
          <div className={styles.inputWrapper}>
            <label>Job Restricted to Locations</label>
            <div className={styles.inputBox}>
              <input
                type="text"
                id="jobLocations"
                className={styles.nameInput}
                placeholder="Enter job restricted locations"
              />
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <label>Annual Salary or Compensation (USD)</label>
            <div className={styles.salaryContainer}>
              <input
                type="number"
                id="minSalary"
                className={styles.salaryInput}
                placeholder="Min"
              />
              <span className={styles.salarySeparator}>-</span>
              <input
                type="number"
                id="maxSalary"
                className={styles.salaryInput}
                placeholder="Max"
              />
            </div>
          </div>
          {/* Job Description */}
          <div className={styles.inputWrapper}>
            <label>Job Description</label>
            <div className={styles.inputBox}>
              <textarea
                id="jobDescription"
                className={styles.descriptionInput}
                placeholder="Enter job description"
              />
            </div>
            <div className={styles.inputWrapper}>
          <label>Benefits</label>
          <div className={styles.inputBox}>
            <input
              type="text"
              id="benefits"
              className={styles.nameInput}
              placeholder="Enter benefits"
            />
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <label>Apply Email</label>
          <div className={styles.inputBox}>
            <input
              type="email"
              id="applyEmail"
              className={styles.nameInput}
              placeholder="Enter apply email"
            />
          </div>
        </div>
          </div>
          <div className={styles.inputWrapper}>
          <label>Apply URL</label>
          <div className={styles.inputBox}>
            <input
              type="text"
              id="applyEmailURL"
              className={styles.nameInput}
              placeholder="Enter apply  URL"
            />
          </div>
        </div>
          {/* How to Apply */}
          <div className={styles.inputWrapper}>
            <label>How to Apply</label>
            <div className={styles.inputBox}>
              <textarea
                id="howToApply"
                className={styles.descriptionInput}
                placeholder="Enter how to apply"
              />
            </div>
          </div>
          {/* Company Twitter */}
          <div className={styles.inputWrapper}>
            <label>Company Twitter</label>
            <div className={styles.inputBox}>
              <input
                type="text"
                id="companyTwitter"
                className={styles.nameInput}
                placeholder="Enter company Twitter"
              />
            </div>
          </div>
          {/* Company Email */}
          <div className={styles.inputWrapper}>
            <label>Company Email</label>
            <div className={styles.inputBox}>
              <input
                type="email"
                id="companyEmail"
                className={styles.nameInput}
                placeholder="Enter company email"
                required
              />
            </div>
          </div>
          {/* Invoice Email */}
          <div className={styles.inputWrapper}>
            <label>Invoice Email</label>
            <div className={styles.inputBox}>
              <input
                type="email"
                id="invoiceEmail"
                className={styles.nameInput}
                placeholder="Enter invoice email"
              />
            </div>
          </div>
          {/* Invoice Address */}
          <div className={styles.inputWrapper}>
            <label>Invoice Address</label>
            <div className={styles.inputBox}>
              <input
                type="text"
                id="invoiceAddress"
                className={styles.nameInput}
                placeholder="Enter invoice address"
              />
            </div>
          </div>
          {/* Feedback Box */}
          <div className={styles.inputWrapper}>
            <label>Feedback Box</label>
            <div className={styles.inputBox}>
              <textarea
                id="feedbackBox"
                className={styles.descriptionInput}
                placeholder="Enter your feedback"
              />
            </div>
          </div>
          <button className={styles.postButton} onClick={() => alert('Job profile posted!')}>
          Post
        </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default post;