import React from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { ClientListContext } from "../../Context/ClientList";
import { useState, useEffect } from "react";
import axios from "axios";

const GSTregistration = () => {
    const tokenData = localStorage.getItem("token");
    const token = JSON.parse(tokenData).usertoken;
    const location = useLocation();
    const {
      state: { serviceId, service },
    } = location;
    const { clients, isError } = useContext(ClientListContext);
    const [clientData, setClientData] = useState("");
    const [LoanAmount, setLoanAmount] = useState("");
    const [client, setClient] = useState("");
    const [IndividualPanCard, setIndividualPanCard] = useState(null);
    const [IndividualAdharCard, setIndividualAdharCard] = useState(null);
    const [IndividualPhotograph, setIndividualPhotograph] = useState(null);
    const [IndividualBankAccountDetails, setIndividualBankAccountDetails] = useState(null);
    const [IndividualAddress, setIndividualAddress] = useState(null);
    const [HUFPanCard, setHUFPanCard] = useState(null);
    const [AdharcardOfKartaHUF, setAdharcardOfKartaHUF] = useState(null);
    const [HUFPhotographOfTheOwner, setHUFPhotographOfTheOwner] = useState(null);
    const [HUFBankAccountDetails, setHUFBankAccountDetails] = useState(null);
    const [HUFAddressProof, setHUFAddressProof] = useState(null);
    const [CompanyPanCard, setCompanyPanCard] = useState(null);
    const [CompanyCertificateOfIncorporation, setCompanyCertificateOfIncorporation] = useState(null);
    const [CompanyArticlesOfAssoication, setCompanyArticlesOfAssoication] = useState(null);
    const [CompanyPanCardOfAuthorizedSignature, setCompanyPanCardOfAuthorizedSignature] = useState(null);
    const [CompanyAdharCardOfAuthorizedSignature, setCompanyAdharCardOfAuthorizedSignature] = useState(null);
    const [CompanyBoardresolutionappointingauthorizedsignatory, setCompanyBoardresolutionappointingauthorizedsignatory] = useState("");
    const [CompanyBankAccountDetails, setCompanyBankAccountDetails] = useState(null);
    const [CompanyAddressProof, setCompanyAddressProofs] = useState(null);
   

  
    useEffect(() => {
      if (isError === false) {
        setClientData(clients.clients);
      }
    }, []);
  
    const handleLeadForm = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append("clientId", client);
      formData.append("loadAmount", LoanAmount);
      formData.append("service", serviceId);
      formData.append("IndividualPanCard", IndividualPanCard);
      formData.append("IndividualAdharCard", IndividualAdharCard);
      formData.append("IndividualPhotograph", IndividualPhotograph);
      formData.append("IndividualBankAccountDetails", IndividualBankAccountDetails);
      formData.append("IndividualAddress", IndividualAddress);
      formData.append("HUFPanCard", HUFPanCard);
      formData.append("AdharcardOfKartaHUF", AdharcardOfKartaHUF);
      formData.append("HUFPhotographOfTheOwner", HUFPhotographOfTheOwner);
      formData.append("HUFBankAccountDetails", HUFBankAccountDetails);
      formData.append("HUFAddressProof", HUFAddressProof);
      formData.append("CompanyPanCard", CompanyPanCard);
      formData.append("CompanyCertificateOfIncorporation", CompanyCertificateOfIncorporation);
      formData.append("CompanyArticlesOfAssoication", CompanyArticlesOfAssoication);
      formData.append("CompanyPanCardOfAuthorizedSignature", CompanyPanCardOfAuthorizedSignature);
      formData.append("CompanyAdharCardOfAuthorizedSignature", CompanyAdharCardOfAuthorizedSignature);
      formData.append("CompanyBoardresolutionappointingauthorizedsignatory", CompanyBoardresolutionappointingauthorizedsignatory);
      formData.append("CompanyBankAccountDetails", CompanyBankAccountDetails);
      formData.append("CompanyAddressProof", CompanyAddressProof);
      

  
      // try {
      //   const leadApiCall = await axios({
      //     method: "post",
      //     url: "http://localhost:5000/api/v1/crm/createlead",
      //     data: formData,
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //       "Content-Type": "multipart/form-data",
      //     },
      //   });
  
      //   console.log(leadApiCall);
      // } catch (error) {
      //   console.log(error);
      // }
      for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }
    };
  
    // console.log(loanAmount, client, gender, mobile, DOB, pan, zip);
  return (
    <div className="flex justify-center items-center">
    <form
      onSubmit={(e) => {
        handleLeadForm(e);
      }}
      className="w-full max-w-lg"
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Loan Amount*
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="number"
            placeholder="Jane"
            onChange={(e) => {
              setLoanAmount(e.target.value);
            }}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-state"
          >
            My Client*
          </label>
          <div className="relative">
            <select
              className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              onChange={(e) => {
                setClient(e.target.value);
              }}
            >
              <option value="" disabled selected>
                Select a client
              </option>
              {clientData &&
                clientData.map((client) => {
                  return (
                    <>
                      <option key={client._id} value={client._id}>
                        {client.first_name}
                      </option>
                    </>
                  );
                })}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">     
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-zip"
          >
            Service*
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-zip"
            type="text"
            defaultValue={service}
            readOnly
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-zip"
          >
            Individual Pan Card*
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-zip"
            type="text"
            defaultValue={service}
            readOnly
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-city"
          >
            Aadhar Card*
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city"
            type="file"
            placeholder="Albuquerque"
            onChange={(e) => {
              setAadharcard(e.target.files[0]);
            }}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-zip"
          >
            Pan Card*
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-zip"
            type="file"
            placeholder=""
            onChange={(e) => {
              setPancard(e.target.files[0]);
            }}
          />
        </div>
      </div>
      
      
      
      <div className="mt-5 flex justify-center">
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          SUBMIT
        </button>
      </div>
    </form>
  </div>
);
}

export default GSTregistration