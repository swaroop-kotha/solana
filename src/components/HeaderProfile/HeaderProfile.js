import React from "react";
import Button from "reactstrap/lib/Button";

export default function HeaderProfile() {
  return (
    <div className="col-12">
      <div className="form-row align-items-center">
        <div className="col-auto">
          <img
            src={
              "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
            }
            width="80"
            height="80"
            className="company__logo"
          />
        </div>
        <div className="col">
          <div className="row">
            <div className="col-auto">
              <h5 className="comp__title">ABC Corporation</h5>
              <span>Singapore</span>
            </div>
            <div className="col-auto">
              <div className="form-row">
                <div className="col-auto">
                  <span class="badge badge-success badge-pill">
                    KYC Verified
                  </span>
                </div>
                <div className="col-auto">
                  <span class="badge badge-dark badge-pill">Edit</span>
                </div>
              </div>
            </div>
            <div className="col-auto ml-auto">
              <Button color="primary" type="submit" className="btn-sm mr-2">
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
