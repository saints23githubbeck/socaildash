import moment from "moment";

export const dashboardChart = [
  {
    name: "Mon",
    pv: 9.5,
    amt: 12.5,
  },
  {
    name: "Tue",
    pv: 11.5,
    amt: 11,
  },
  {
    name: "Wed",
    pv: 15,
    amt: 10,
  },
  {
    name: "Thur",
    pv: 10,
    amt: 14,
  },
  {
    name: "Fri",
    pv: 15,
    amt: 10,
  },
  {
    name: "Sat",
    pv: 10,
    amt: 13,
  },
  {
    name: "Sun",
    pv: 13,
    amt: 11,
  },
];

export const paymentType = [
  {
    name: "Stripe",
    content: "sample samplesamplesamplesamplesamplesamplesample",
  },
  {
    name: "Paypal",
    content: "samplesamplesamplesamplesamplesamplesample",
  },
  {
    name: "PayStack",
    content: "sample samplesamplesamplesamplesamplesam",
  },
  {
    name: "Flutter",
    content: "sample samplesamplesaplesamplesample",
  },
];
export const messageData = [
  {
    id: Math.floor(Math.random() * 10000),
    name: "reads fetrtri ",
    email: "admin@gmail.com",
    verified: "Verified",
    status: "Active",
    role: "Admin",
    date: moment().format("l"),
    img: "https://cdn.pixabay.com/photo/2016/04/26/12/25/male-1354358__340.png ",
  },
  {
    id: Math.floor(Math.random() * 10000),
    name: "Robert Mali",
    email: "twoxim@gmail.com",
    verified: "Verified",
    status: "Active",
    role: "Admin",
    date: moment().format("l"),
    img: "https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png ",
  },
  {
    id: Math.floor(Math.random() * 10000),
    name: "Caili Varye",
    email: "twoxim@gmail.com",
    verified: "Unverified",
    status: "Inactive",
    role: "Admin",
    date: moment().format("l"),
    img: "https://cdn.pixabay.com/photo/2020/06/10/02/22/caricature-5280770__340.jpg ",
  },
  {
    id: Math.floor(Math.random() * 10000),
    name: "George Yoi",
    email: "twoxim@gmail.com",
    verified: "Verified",
    status: "Inactive",
    role: "User",
    date: moment().format("l"),
    img: "https://cdn.pixabay.com/photo/2021/05/23/00/21/woman-6274879__340.png ",
  },
  {
    id: Math.floor(Math.random() * 10000),
    name: "reads fetrtri ",
    email: "admin@admin.com",
    verified: "Verified",
    status: "Active",
    role: "Admin",
    date: moment().format("l"),
    img: "https://cdn.pixabay.com/photo/2016/04/26/12/25/male-1354358__340.png ",
  },
  {
    id: Math.floor(Math.random() * 10000),
    name: "Robert Mali",
    email: "lnicely@me.com",
    verified: "Unverified",
    status: "Active",
    role: "Admin",
    date: moment().format("l"),
    img: "https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png ",
  },
  {
    id: Math.floor(Math.random() * 10000),
    name: "Caili Varye",
    email: "test@gmail.com",
    verified: "Unverified",
    status: "Inactive",
    role: "User",
    date: moment().format("l"),
    img: "https://cdn.pixabay.com/photo/2020/06/10/02/22/caricature-5280770__340.jpg ",
  },
  {
    id: Math.floor(Math.random() * 10000),
    name: "George Yoi",
    email: "asdsad@asdsad.com",
    verified: "Unverified",
    status: "Active",
    role: "Admin",
    date: moment().format("l"),
    img: "https://cdn.pixabay.com/photo/2021/05/23/00/21/woman-6274879__340.png ",
  },
];

export const coupon = [
  {
    name: "text Coupon",
    percent: "20%",
    code: "1458",
    duration: "2 Month",
    date: moment().format("l"),
  },
  {
    name: "IWD",
    percent: "50%",
    code: "145wt8",
    duration: "5 weeks",
    date: moment().format("l"),
  },
  {
    name: "Fast Sale",
    percent: "10%",
    code: "fa458",
    duration: " 1 Month",
    date: moment().format("l"),
  },
];

export const plan = [
  {
    name: "Basic Plan",
    interval: "Month",
    price: "10",
    team: "3",
    date: moment().format("l"),
    status: "Active",
  },
  {
    name: "Pro Plan",
    interval: "Month",
    price: "20",
    team: "5",
    date: moment().format("l"),
    status: "Active",
  },
  {
    name: "Bronz",
    interval: "Month",
    price: "40",
    team: "4",
    date: moment().format("l"),
    status: "Active",
  },
  {
    name: "Yearly pro",
    interval: "year",
    price: "200",
    team: "10",
    date: moment().format("l"),
    status: "Inactive",
  },
  {
    name: "Yearly bronz",
    interval: "year",
    price: "500",
    team: "5",
    date: moment().format("l"),
    status: "Inactive",
  },
  {
    name: "Basic yearly",
    interval: "year",
    price: "80",
    team: "9",
    date: moment().format("l"),
    status: "Active",
  },
];

// export const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// export const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];
