const formData = [
  {
    type: "text",
    accessor: "name",
    placeholder: "Name",
    required: true,
  },
  {
    type: "email",
    accessor: "email",
    placeholder: "Email",
    required: true,
  },
  {
    type: "text",
    accessor: "phone",
    placeholder: "Phone",
    required: true,
  },
  {
    type: "select",
    accessor: "currency",
    placeholder: "Currency",
    required: true,
    options: [
      { value: "BDT", label: "BDT" },
      { value: "USD", label: "USD" },
      { value: "EUR", label: "EUR" },
      { value: "GBP", label: "GBP" },
    ],
  },
  {
    type: "number",
    accessor: "amount",
    placeholder: "Amount",
    required: true,
  },
];

export default formData;
