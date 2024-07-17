export const userSpendingdata = [
  {
    id: 1,
    data: [
      { name: "February 2024", Total: 400 },
      { name: "March 2024", Total: 200 },
      { name: "April 2024", Total: 800 },
      { name: "May 2024", Total: 230 },
      { name: "June 2024", Total: 510 },
      { name: "July 2024", Total: 320 },
    ],
  },
  {
    id: 2,
    data: [
      { name: "February 2024", Total: 350 },
      { name: "March 2024", Total: 180 },
      { name: "April 2024", Total: 750 },
      { name: "May 2024", Total: 200 },
      { name: "June 2024", Total: 480 },
      { name: "July 2024", Total: 300 },
    ],
  },
  {
    id: 3,
    data: [
      { name: "February 2024", Total: 500 },
      { name: "March 2024", Total: 250 },
      { name: "April 2024", Total: 900 },
      { name: "May 2024", Total: 280 },
      { name: "June 2024", Total: 600 },
      { name: "July 2024", Total: 400 },
    ],
  },
  {
    id: 4,
    data: [
      { name: "February 2024", Total: 450 },
      { name: "March 2024", Total: 220 },
      { name: "April 2024", Total: 820 },
      { name: "May 2024", Total: 250 },
      { name: "June 2024", Total: 530 },
      { name: "July 2024", Total: 350 },
    ],
  },
  {
    id: 5,
    data: [
      { name: "February 2024", Total: 380 },
      { name: "March 2024", Total: 190 },
      { name: "April 2024", Total: 700 },
      { name: "May 2024", Total: 180 },
      { name: "June 2024", Total: 450 },
      { name: "July 2024", Total: 280 },
    ],
  },
  {
    id: 6,
    data: [
      { name: "February 2024", Total: 420 },
      { name: "March 2024", Total: 210 },
      { name: "April 2024", Total: 780 },
      { name: "May 2024", Total: 220 },
      { name: "June 2024", Total: 500 },
      { name: "July 2024", Total: 330 },
    ],
  },
  {
    id: 7,
    data: [
      { name: "February 2024", Total: 490 },
      { name: "March 2024", Total: 240 },
      { name: "April 2024", Total: 880 },
      { name: "May 2024", Total: 270 },
      { name: "June 2024", Total: 580 },
      { name: "July 2024", Total: 370 },
    ],
  },
  {
    id: 8,
    data: [
      { name: "February 2024", Total: 430 },
      { name: "March 2024", Total: 200 },
      { name: "April 2024", Total: 820 },
      { name: "May 2024", Total: 240 },
      { name: "June 2024", Total: 510 },
      { name: "July 2024", Total: 340 },
    ],
  },
  {
    id: 9,
    data: [
      { name: "February 2024", Total: 470 },
      { name: "March 2024", Total: 230 },
      { name: "April 2024", Total: 860 },
      { name: "May 2024", Total: 260 },
      { name: "June 2024", Total: 550 },
      { name: "July 2024", Total: 360 },
    ],
  },
  {
    id: 10,
    data: [
      { name: "February 2024", Total: 410 },
      { name: "March 2024", Total: 180 },
      { name: "April 2024", Total: 790 },
      { name: "May 2024", Total: 210 },
      { name: "June 2024", Total: 480 },
      { name: "July 2024", Total: 310 },
    ],
  },
];

const userMonthlyTotals = {};
userSpendingdata.forEach((user) => {
  user.data.forEach((month) => {
    const { name, Total } = month;
    if (!userMonthlyTotals[name]) {
      userMonthlyTotals[name] = 0;
    }
    userMonthlyTotals[name] += Total;
  });
});

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Customer",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    headerClassName: "status-column-header",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Arjun Sharma",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    status: "active",
    email: "arjun.sharma@example.com",
    age: 28,
    phoneno: 9876543210,
    city: "Mumbai",
    country: "India",
  },
  {
    id: 2,
    username: "Neha Singh",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    status: "active",
    email: "neha.singh@example.com",
    age: 34,
    phoneno: 8765432109,
    city: "Delhi",
    country: "India",
  },
  {
    id: 3,
    username: "Rahul Verma",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    status: "pending",
    email: "rahul.verma@example.com",
    age: 45,
    phoneno: 7654321098,
    city: "Konark",
    country: "India",
  },
  {
    id: 4,
    username: "Pooja Mehta",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
    status: "active",
    email: "pooja.mehta@example.com",
    age: 27,
    phoneno: 6543210987,
    city: "London",
    country: "UK",
  },
  {
    id: 5,
    username: "Amit Gupta",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
    status: "passive",
    email: "amit.gupta@example.com",
    age: 40,
    phoneno: 5432109876,
    city: "Paris",
    country: "France",
  },
  {
    id: 6,
    username: "Priya Jain",
    img: "https://randomuser.me/api/portraits/women/6.jpg",
    status: "active",
    email: "priya.jain@example.com",
    age: 31,
    phoneno: 4321098765,
    city: "New York",
    country: "USA",
  },
  {
    id: 7,
    username: "Vikram Patel",
    img: "https://randomuser.me/api/portraits/men/7.jpg",
    status: "passive",
    email: "vikram.patel@example.com",
    age: 44,
    phoneno: 3210987654,
    city: "Paris",
    country: "France",
  },
  {
    id: 8,
    username: "Ritu Desai",
    img: "https://randomuser.me/api/portraits/women/8.jpg",
    status: "active",
    email: "ritu.desai@example.com",
    age: 29,
    phoneno: 2109876543,
    city: "Bangalore",
    country: "India",
  },
  {
    id: 9,
    username: "Rakesh Kumar",
    img: "https://randomuser.me/api/portraits/men/9.jpg",
    status: "pending",
    email: "rakesh.kumar@example.com",
    age: 38,
    phoneno: 1098765432,
    city: "London",
    country: "UK",
  },
  {
    id: 10,
    username: "Anjali Rao",
    img: "https://randomuser.me/api/portraits/women/10.jpg",
    status: "active",
    email: "anjali.rao@example.com",
    age: 26,
    phoneno: 1234567890,
    city: "New York",
    country: "USA",
  },
  // Add more entries as needed
];

export const productColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "product",
    headerName: "Product",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="procellWithImg">
          <img src={params.row.img} alt="product" className="procellImg" />
          {params.row.productName}
        </div>
      );
    },
  },
  {
    field: "price",
    headerName: "Price (in $)",
    width: 150,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`procellWithStatus ${params.row.quantity}`}>
          {params.row.quantity}
        </div>
      );
    },
  },
];

export const productRows = [
  {
    id: 1001,
    productName: "Laptop",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    quantity: 45,
    price: 950,
  },
  {
    id: 1002,
    productName: "Smartphone",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    quantity: 95,
    price: 400,
  },
  {
    id: 1003,
    productName: "Tablet",
    img: "https://images.unsplash.com/photo-1471279136892-55af5dc6895f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D",
    quantity: 28,
    price: 350,
  },
  {
    id: 1004,
    productName: "Headphones",
    img: "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    quantity: 80,
    price: 120,
  },
  {
    id: 1005,
    productName: "Smartwatch",
    img: "https://images.unsplash.com/photo-1523475496153-3d6cc0f0bf19?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    quantity: 68,
    price: 200,
  },
  {
    id: 1006,
    productName: "Camera",
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    quantity: 25,
    price: 900,
  },
  {
    id: 1007,
    productName: "Printer",
    img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByaW50ZXJ8ZW58MHx8MHx8fDA%3D",
    quantity: 21,
    price: 250,
  },
  {
    id: 1008,
    productName: "Monitor",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    quantity: 15,
    price: 400,
  },
  {
    id: 1009,
    productName: "Keyboard",
    img: "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
    quantity: 72,
    price: 80,
  },
  {
    id: 10010,
    productName: "Mouse",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdXNlfGVufDB8fDB8fHww",
    quantity: 62,
    price: 20,
  },
  {
    id: 10011,
    productName: "Speaker",
    img: "https://plus.unsplash.com/premium_photo-1683141496040-eeef9702269f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
    quantity: 19,
    price: 120,
  },
  {
    id: 10012,
    productName: "External Hard Drive",
    img: "https://media.istockphoto.com/id/1299931733/photo/external-hard-disk-connected-to-laptop-hard-drive-storage-device-taking-backup.webp?b=1&s=170667a&w=0&k=20&c=LGk32uEp06HOLufZUnZKlAtMe0eeWpMg-YTRBPFr4i8=",
    quantity: 72,
    price: 150,
  },
  {
    id: 10013,
    productName: "Router",
    img: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm91dGVyfGVufDB8fDB8fHww",
    quantity: 23,
    price: 100,
  },
  {
    id: 10014,
    productName: "Scanner",
    img: "https://plus.unsplash.com/premium_photo-1715228482059-3147a98cd2e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Nhbm5lciUyMGRldmljZXxlbnwwfHwwfHx8MA%3D%3D",
    quantity: 10,
    price: 150,
  },
  {
    id: 10015,
    productName: "Projector",
    img: "https://images.unsplash.com/photo-1528395874238-34ebe249b3f2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdG9yfGVufDB8fDB8fHww",
    quantity: 29,
    price: 700,
  },
];

export const productUnitsSold = [
  {
    id: 1001,
    productName: "Laptop",
    data: [
      { month: "February 2024", quantity_sold: 12 },
      { month: "March 2024", quantity_sold: 14 },
      { month: "April 2024", quantity_sold: 18 },
      { month: "May 2024", quantity_sold: 20 },
      { month: "June 2024", quantity_sold: 25 },
      { month: "July 2024", quantity_sold: 15 },
    ],
  },
  {
    id: 1002,
    productName: "Smartphone",
    data: [
      { month: "February 2024", quantity_sold: 28 },
      { month: "March 2024", quantity_sold: 25 },
      { month: "April 2024", quantity_sold: 22 },
      { month: "May 2024", quantity_sold: 30 },
      { month: "June 2024", quantity_sold: 40 },
      { month: "July 2024", quantity_sold: 30 },
    ],
  },
  {
    id: 1003,
    productName: "Tablet",
    data: [
      { month: "February 2024", quantity_sold: 15 },
      { month: "March 2024", quantity_sold: 8 },
      { month: "April 2024", quantity_sold: 12 },
      { month: "May 2024", quantity_sold: 14 },
      { month: "June 2024", quantity_sold: 11 },
      { month: "July 2024", quantity_sold: 10 },
    ],
  },
  {
    id: 1004,
    productName: "Headphones",
    data: [
      { month: "February 2024", quantity_sold: 25 },
      { month: "March 2024", quantity_sold: 18 },
      { month: "April 2024", quantity_sold: 20 },
      { month: "May 2024", quantity_sold: 22 },
      { month: "June 2024", quantity_sold: 30 },
      { month: "July 2024", quantity_sold: 20 },
    ],
  },
  {
    id: 1005,
    productName: "Smartwatch",
    data: [
      { month: "February 2024", quantity_sold: 20 },
      { month: "March 2024", quantity_sold: 22 },
      { month: "April 2024", quantity_sold: 18 },
      { month: "May 2024", quantity_sold: 28 },
      { month: "June 2024", quantity_sold: 32 },
      { month: "July 2024", quantity_sold: 25 },
    ],
  },
  {
    id: 1006,
    productName: "Camera",
    data: [
      { month: "February 2024", quantity_sold: 8 },
      { month: "March 2024", quantity_sold: 7 },
      { month: "April 2024", quantity_sold: 6 },
      { month: "May 2024", quantity_sold: 10 },
      { month: "June 2024", quantity_sold: 12 },
      { month: "July 2024", quantity_sold: 9 },
    ],
  },
  {
    id: 1007,
    productName: "Printer",
    data: [
      { month: "February 2024", quantity_sold: 10 },
      { month: "March 2024", quantity_sold: 9 },
      { month: "April 2024", quantity_sold: 11 },
      { month: "May 2024", quantity_sold: 13 },
      { month: "June 2024", quantity_sold: 8 },
      { month: "July 2024", quantity_sold: 7 },
    ],
  },
  {
    id: 1008,
    productName: "Monitor",
    data: [
      { month: "February 2024", quantity_sold: 5 },
      { month: "March 2024", quantity_sold: 4 },
      { month: "April 2024", quantity_sold: 6 },
      { month: "May 2024", quantity_sold: 7 },
      { month: "June 2024", quantity_sold: 8 },
      { month: "July 2024", quantity_sold: 3 },
    ],
  },
  {
    id: 1009,
    productName: "Keyboard",
    data: [
      { month: "February 2024", quantity_sold: 20 },
      { month: "March 2024", quantity_sold: 22 },
      { month: "April 2024", quantity_sold: 25 },
      { month: "May 2024", quantity_sold: 30 },
      { month: "June 2024", quantity_sold: 28 },
      { month: "July 2024", quantity_sold: 18 },
    ],
  },
  {
    id: 10010,
    productName: "Mouse",
    data: [
      { month: "February 2024", quantity_sold: 25 },
      { month: "March 2024", quantity_sold: 28 },
      { month: "April 2024", quantity_sold: 30 },
      { month: "May 2024", quantity_sold: 35 },
      { month: "June 2024", quantity_sold: 40 },
      { month: "July 2024", quantity_sold: 22 },
    ],
  },
  {
    id: 10011,
    productName: "Speaker",
    data: [
      { month: "February 2024", quantity_sold: 8 },
      { month: "March 2024", quantity_sold: 9 },
      { month: "April 2024", quantity_sold: 10 },
      { month: "May 2024", quantity_sold: 11 },
      { month: "June 2024", quantity_sold: 15 },
      { month: "July 2024", quantity_sold: 7 },
    ],
  },
  {
    id: 10012,
    productName: "External Hard Drive",
    data: [
      { month: "February 2024", quantity_sold: 12 },
      { month: "March 2024", quantity_sold: 14 },
      { month: "April 2024", quantity_sold: 16 },
      { month: "May 2024", quantity_sold: 18 },
      { month: "June 2024", quantity_sold: 20 },
      { month: "July 2024", quantity_sold: 15 },
    ],
  },
  {
    id: 10013,
    productName: "Router",
    data: [
      { month: "February 2024", quantity_sold: 9 },
      { month: "March 2024", quantity_sold: 10 },
      { month: "April 2024", quantity_sold: 12 },
      { month: "May 2024", quantity_sold: 14 },
      { month: "June 2024", quantity_sold: 16 },
      { month: "July 2024", quantity_sold: 8 },
    ],
  },
  {
    id: 10014,
    productName: "Scanner",
    data: [
      { month: "February 2024", quantity_sold: 4 },
      { month: "March 2024", quantity_sold: 5 },
      { month: "April 2024", quantity_sold: 6 },
      { month: "May 2024", quantity_sold: 7 },
      { month: "June 2024", quantity_sold: 8 },
      { month: "July 2024", quantity_sold: 3 },
    ],
  },
  {
    id: 10015,
    productName: "Projector",
    data: [
      { month: "February 2024", quantity_sold: 6 },
      { month: "March 2024", quantity_sold: 7 },
      { month: "April 2024", quantity_sold: 8 },
      { month: "May 2024", quantity_sold: 9 },
      { month: "June 2024", quantity_sold: 10 },
      { month: "July 2024", quantity_sold: 5 },
    ],
  },
];

const ProductUnitsTotal = {};

productUnitsSold.forEach((product) => {
  product.data.forEach((item) => {
    const quantity = item.quantity_sold;
    const productName = product.productName;

    if (!ProductUnitsTotal[productName]) {
      ProductUnitsTotal[productName] = 0;
    }
    ProductUnitsTotal[productName] += quantity;
  });
});

export const UnitsTotal = productUnitsSold.reduce((acc, product) => {
  const productName = product.productName;
  const totalUnitsSold = product.data.reduce(
    (sum, item) => sum + item.quantity_sold,
    0
  );

  acc.push({ name: productName, value: totalUnitsSold });

  return acc;
}, []);

export const productSales = productUnitsSold.map((product) => ({
  id: product.id,
  data: product.data.map((entry) => ({
    name: entry.month,
    Total:
      productRows.find((p) => p.id === product.id).price * entry.quantity_sold,
  })),
}));

const productMonthlyTotals = {};

productSales.forEach((product) => {
  product.data.forEach((month_sales) => {
    const { name, Total } = month_sales;
    if (!productMonthlyTotals[name]) {
      productMonthlyTotals[name] = 0;
    }
    productMonthlyTotals[name] += Total;
  });
});

export const transactiondata = [
  {
    name: "February 2024",
    Total:
      userMonthlyTotals["February 2024"] +
      productMonthlyTotals["February 2024"],
  },
  {
    name: "March 2024",
    Total: userMonthlyTotals["March 2024"] + productMonthlyTotals["March 2024"],
  },
  {
    name: "April 2024",
    Total: userMonthlyTotals["April 2024"] + productMonthlyTotals["April 2024"],
  },
  {
    name: "May 2024",
    Total: userMonthlyTotals["May 2024"] + productMonthlyTotals["May 2024"],
  },
  {
    name: "June 2024",
    Total: userMonthlyTotals["June 2024"] + productMonthlyTotals["June 2024"],
  },
  {
    name: "July 2024",
    Total: userMonthlyTotals["July 2024"] + productMonthlyTotals["July 2024"],
  },
];

export const latestTransactionsData = [
  {
    id: 10001,
    product: "Laptop",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    customer: "Arjun Sharma",
    date: "2024-08-10",
    amount: 950,
    method: "Credit Card",
    status: "Approved",
  },
  {
    id: 10002,
    product: "Smartphone",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    customer: "Neha Singh",
    date: "2024-08-12",
    amount: 400,
    method: "Online Payment",
    status: "Pending",
  },
  {
    id: 10003,
    product: "Tablet",
    img: "https://images.unsplash.com/photo-1471279136892-55af5dc6895f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D",
    customer: "Rahul Verma",
    date: "2024-08-15",
    amount: 350,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 10004,
    product: "Headphones",
    img: "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    customer: "Pooja Mehta",
    date: "2024-08-16",
    amount: 120,
    method: "Credit Card",
    status: "Pending",
  },
  {
    id: 10005,
    product: "Smartwatch",
    img: "https://images.unsplash.com/photo-1523475496153-3d6cc0f0bf19?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    customer: "Amit Gupta",
    date: "2024-08-18",
    amount: 200,
    method: "Online Payment",
    status: "Approved",
  },
  {
    id: 10006,
    product: "Camera",
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    customer: "Priya Jain",
    date: "2024-08-19",
    amount: 900,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 10007,
    product: "Printer",
    img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByaW50ZXJ8ZW58MHx8MHx8fDA%3D",
    customer: "Vikram Patel",
    date: "2024-08-20",
    amount: 250,
    method: "Credit Card",
    status: "Pending",
  },
  {
    id: 10008,
    product: "Monitor",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    customer: "Ritu Desai",
    date: "2024-08-21",
    amount: 400,
    method: "Online Payment",
    status: "Pending",
  },
  {
    id: 10009,
    product: "Keyboard",
    img: "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
    customer: "Rakesh Kumar",
    date: "2024-08-22",
    amount: 80,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 10010,
    product: "Mouse",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdXNlfGVufDB8fDB8fHww",
    customer: "Anjali Rao",
    date: "2024-08-23",
    amount: 20,
    method: "Online Payment",
    status: "Pending",
  },
];

export const orderColumns = [
  { field: "id", headerName: "Order ID", width: 120 },
  { field: "customerId", headerName: "Customer ID", width: 150 },
  {
    field: "product",
    headerName: "Product",
    width: 230,
  },
  {
    field: "orderDate",
    headerName: "Order Date",
    width: 180,
  },
  {
    field: "totalAmount",
    headerName: "Total Amount ($)",
    width: 180,
  },
];

export const orderData = [
  {
    id: 5001,
    customerId: 9,
    product: "Keyboard",
    orderDate: "2024-07-23",
    totalAmount: 150,
  },
  {
    id: 5002,
    customerId: 6,
    product: "Camera",
    orderDate: "2024-07-20",
    totalAmount: 1200,
  },
  {
    id: 5003,
    customerId: 10,
    product: "Mouse",
    orderDate: "2024-07-24",
    totalAmount: 50,
  },
  {
    id: 5004,
    customerId: 3,
    product: "Tablet",
    orderDate: "2024-07-17",
    totalAmount: 300,
  },
  {
    id: 5005,
    customerId: 4,
    product: "Headphones",
    orderDate: "2024-07-18",
    totalAmount: 150,
  },
  {
    id: 5006,
    customerId: 8,
    product: "Monitor",
    orderDate: "2024-07-22",
    totalAmount: 400,
  },
  {
    id: 5007,
    customerId: 5,
    product: "Smartwatch",
    orderDate: "2024-07-19",
    totalAmount: 200,
  },
  {
    id: 5008,
    customerId: 2,
    product: "Smartphone",
    orderDate: "2024-07-16",
    totalAmount: 400,
  },
  {
    id: 5009,
    customerId: 1,
    product: "Laptop",
    orderDate: "2024-07-15",
    totalAmount: 950,
  },
  {
    id: 5010,
    customerId: 7,
    product: "Printer",
    orderDate: "2024-07-21",
    totalAmount: 300,
  },
  {
    id: 5011,
    customerId: 1,
    product: "Laptop",
    orderDate: "2024-06-20",
    totalAmount: 950,
  },
  {
    id: 5012,
    customerId: 3,
    product: "Tablet",
    orderDate: "2024-06-25",
    totalAmount: 300,
  },
  {
    id: 5013,
    customerId: 5,
    product: "Smartwatch",
    orderDate: "2024-06-30",
    totalAmount: 200,
  },
  {
    id: 5014,
    customerId: 8,
    product: "Monitor",
    orderDate: "2024-06-12",
    totalAmount: 400,
  },
  {
    id: 5015,
    customerId: 6,
    product: "Camera",
    orderDate: "2024-06-05",
    totalAmount: 1200,
  },
  {
    id: 5016,
    customerId: 9,
    product: "Keyboard",
    orderDate: "2024-06-15",
    totalAmount: 150,
  },
  {
    id: 5017,
    customerId: 2,
    product: "Smartphone",
    orderDate: "2024-06-10",
    totalAmount: 400,
  },
  {
    id: 5018,
    customerId: 4,
    product: "Headphones",
    orderDate: "2024-06-08",
    totalAmount: 150,
  },
  {
    id: 5019,
    customerId: 7,
    product: "Printer",
    orderDate: "2024-06-27",
    totalAmount: 300,
  },
  {
    id: 5020,
    customerId: 10,
    product: "Mouse",
    orderDate: "2024-06-18",
    totalAmount: 50,
  },
  {
    id: 5021,
    customerId: 3,
    product: "Tablet",
    orderDate: "2024-05-22",
    totalAmount: 300,
  },
  {
    id: 5022,
    customerId: 5,
    product: "Smartwatch",
    orderDate: "2024-05-25",
    totalAmount: 200,
  },
  {
    id: 5023,
    customerId: 8,
    product: "Monitor",
    orderDate: "2024-05-12",
    totalAmount: 400,
  },
  {
    id: 5024,
    customerId: 6,
    product: "Camera",
    orderDate: "2024-05-05",
    totalAmount: 1200,
  },
  {
    id: 5025,
    customerId: 9,
    product: "Keyboard",
    orderDate: "2024-05-15",
    totalAmount: 150,
  },
];
