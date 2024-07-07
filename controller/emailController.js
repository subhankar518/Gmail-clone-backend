import Email from "../model/email.js";

export const saveSentEmail = (req, res) => {
  try {
    const validatedEmail = new Email(req.body);
    validatedEmail.save();

    res.status(200).json("mail saved successfully");
  } catch (error) {
    res.status(500).json(error?.message);
  }
};
