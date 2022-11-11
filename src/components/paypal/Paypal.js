import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function App() {
  const initialPaymentConfig = {
    "client-id": process.env.PAYPAL_CLIENT,
    currency: process.env.CURRENCY,
    intent: "capture",
  };

  return (
    <>
      {/* <PayPalScriptProvider options={{ "client-id": "test" }}>
        <PayPalButtons style={{ layout: "horizontal" }} />
      </PayPalScriptProvider> */}

      {/* <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#paypalModal"
      >
        Launch demo modal
      </button> */}

      <div
        className="modal fade"
        id="paypalModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="Pay With Paypal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Pay Pal
              </h5>
              {/* <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button> */}
            </div>
            <div className="modal-body">
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "ASR9ib2QqgEbH9aR6O7n6NFtROhpdiRItQg-1zkCysriPT3ALl1dGftLVDOlUm1S0GsJLx2Rj-QWbZGb",
                }}
              >
                <PayPalButtons
                  createOrder={(data, actions) => {
                    console.log(data);
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: "100.99",
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    console.log(data);
                    return actions.order.capture().then((details) => {
                      const name = details.payer.name.given_name;
                      alert(`Transaction completed by ${name}`);
                    });
                  }}
                />
              </PayPalScriptProvider>
            </div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
