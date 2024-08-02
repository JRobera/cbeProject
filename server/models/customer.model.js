import { model, Schema } from "mongoose";

const CustomerSchema = new Schema(
  {
    customerName: { type: String },
    businessName: { type: String },
  },
  { timestamps: true }
);

const Customer = model("Customer", CustomerSchema);
export default Customer;
