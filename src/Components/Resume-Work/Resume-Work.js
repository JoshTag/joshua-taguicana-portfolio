import React, { Component } from "react";
import "./Resume-Work.scss";

export class ResumeWork extends Component {
  render() {
    return (
      <div className="work">
        <h3 className="work__header">Work</h3>
        <div className="work__block">
          <h4 className="work__block__title">BrainStation</h4>
          <p className="work__block__date">June 2019 - Present</p>
          <ul>
            <li>
              - Assist educators with the marking of assignments for current
              students as well as prep course entrance assignments for
              prospective students
            </li>
            <li>
              - Set up and organized student files and folders for the new
              cohort and updated throughout the course
            </li>
            <li>
              - Created daily challenges and white-boarding questions for
              students to assist with learning and understanding of the current
              weeks topic
            </li>
            <li>
              - Support educators assisting with student questions during open
              studio
            </li>
          </ul>
        </div>
        <div className="work__block">
          <h4 className="work__block__title">CIBC MELLON</h4>
          <p className="work__block__date">April 2018 - March 2019</p>
          <ul>
            <li>
              - Ensured accuracy of a fund’s trades, cash transactions,
              corporate actions, and verified correct pricing securities to
              properly calculate value of the fund portfolio 
            </li>
            <li>
              -Audited the work performed by other team members for the
              department to ensure accuracy and compliance with department and
              client instructions 
            </li>
            <li>
              - Calculated daily income accruals, expenses, interest, and
              dividend payments and ensured proper postings to the fund
              portfolio and analyzed daily changes in compliance with client
              exception tolerances 
            </li>
            <li>
              - Prepared daily and monthly distribution reports for clients as
              well as reinvestment calculations for distributions 
            </li>
          </ul>
        </div>
        <div className="work__block">
          <h4 className="work__block__title">MoneyKey</h4>
          <p className="work__block__date">October 2016 - March 2018</p>
          <ul>
            <li>
              - Audited the highest amount of loans firm wide through ensuring
              compliance with business and state regulatory policies by analysis
              of pay frequency, pay averages, and leverage resulting in higher
              quality lending due diligence 
            </li>
            <li>
              - Lead in training programs to assist new employees familiarize
              themselves with company processes 
            </li>
            <li>
              - Process debits and credits batches to meet the daily deadline.
              Audit batches for accuracy and confirm with bank 
            </li>
            <li>
              - Generated and analyzed trend reports for sales leads and
              customer service calls for management and supervisor review,
              identifying a need for stricter verification policies and customer
              education 
              
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ResumeWork;
