import React, { useState, useEffect } from "react";
import axios from "axios";

const BillingSystem = () => {
  const [patientName, setPatientName] = useState("");
  const [services, setServices] = useState([]);
  const [serviceName, setServiceName] = useState("");
  const [serviceCost, setServiceCost] = useState("");
  const [total, setTotal] = useState(0);
  const [bills, setBills] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:5000/api/billing")
      .then((response) => setBills(response.data))
      .catch((error) => console.error("Error fetching bills:", error));
  }, []);

  // Add service in that list
  const addService = () => {
    if (serviceName.trim() !== "" && !isNaN(serviceCost) && serviceCost > 0) {
      const newService = { name: serviceName, cost: parseFloat(serviceCost) };
      setServices([...services, newService]);
      setTotal((prev) => prev + newService.cost);
      setServiceName("");
      setServiceCost("");
    }
  };

  // Generate krna hai and save bhi
  const generateBill = async () => {
    if (!patientName) return alert("Please enter patient name.");
    const billData = { patientName, services, total };

    try {
      await axios.post("http://localhost:5000/api/billing", billData);
      alert(`Bill generated for ${patientName}! Total Amount: $${total.toFixed(2)}`);

      // Reset bad mein jab generate ho jaye bill
      setPatientName("");
      setServices([]);
      setTotal(0);

      // Re-fetch krn H
      const response = await axios.get("http://localhost:5000/api/billing");
      setBills(response.data);
    } catch (error) {
      console.error("Error saving bill:", error);
      alert("❌ Failed to save the bill. Please try again.");
    }
  };

  // Delete KRNA H bill
  const deleteBill = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/billing/${id}`);
      alert("Bill deleted successfully.");

      // refetch krdo
      const response = await axios.get("http://localhost:5000/api/billing");
      setBills(response.data);
    } catch (error) {
      console.error("Error deleting bill:", error);
      alert("❌ Failed to delete the bill. Please try again.");
    }
  };

  return (
    <div className="p-6 flex justify-center items-center md:p-10 bg-gradient-to-br from-[#e0f7fa] to-[#e0f2f1] min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-extrabold text-center text-[#00695c] mb-6">🏥 Healthcare Billing System</h2>

        {/* Patient ka Name */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Patient Name</label>
          <input
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            placeholder="Enter Patient Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Service ke Inputs */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-semibold mb-2">Service Name</label>
            <input
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              placeholder="e.g., X-Ray, Blood Test"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Service Cost ($)</label>
            <input
              type="number"
              value={serviceCost}
              onChange={(e) => setServiceCost(e.target.value)}
              placeholder="Enter Cost"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <button
          onClick={addService}
          disabled={!serviceName || !serviceCost}
          className="bg-[#00695c] hover:bg-green-900 text-white w-full py-2 rounded-md font-semibold transition duration-200 "
        >
          + Add Service
        </button>

        {/* Services ke Table */}
        {services.length > 0 && (
          <div className="mt-8 overflow-x-auto">
            <table className="w-full table-auto border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="text-left p-3 font-bold">Service</th>
                  <th className="text-left p-3 font-bold">Cost ($)</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-3">{service.name}</td>
                    <td className="p-3">${service.cost.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="text-xl text-right font-bold text-gray-800 mt-6">
              💰 Total Amount: ${total.toFixed(2)}
            </h3>

            <button
              onClick={generateBill}
              className="bg-green-600 hover:bg-green-700 text-white w-full mt-4 py-2 rounded-md font-semibold transition duration-200"
            >
              🧾 Generate Bill
            </button>
          </div>
        )}

        {/* Display krna h previous vale generated Bills */}
        {bills.length > 0 && (
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-[#00695c] mb-4">📜 Previous Bills</h3>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border border-gray-200">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="text-left p-3 font-bold">Patient</th>
                    <th className="text-left p-3 font-bold">Total Cost ($)</th>
                    <th className="text-left p-3 font-bold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bills.map((bill, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="p-3">{bill.patientName}</td>
                      <td className="p-3">${bill.total.toFixed(2)}</td>
                      <td className="p-3">
                        <button
                          onClick={() => deleteBill(bill._id)}
                          className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded-md"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BillingSystem;
