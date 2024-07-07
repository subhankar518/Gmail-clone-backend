import mongoose from "mongoose";

const EmailSchema = new mongoose.Schema(
  {
    to: { type: String, required: true },
    from: { type: String, required: true },
    subject: { type: String },
    body: { type: String },
    date: { type: Date, required: true },
    attachment: { type: String },
    sender_name: { type: String, required: true },
    starred: { type: Boolean, default: false },
    type: { type: String, required: true },
    trash: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Email = mongoose.model("emails", EmailSchema);

export default Email;
