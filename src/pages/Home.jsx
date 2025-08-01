import Products from "../components/Products";

const products = [
  { prodName: "Water Bottle", price: 10, color: "Black", prodId: "wb01" },
  { prodName: "Pressure Cooker", price: 60, color: "Silver", prodId: "pc02" },
  { prodName: "Iron Machine", price: 120, color: "White", prodId: "im03" },
  { prodName: "Bluetooth Speaker", price: 40, color: "Black", prodId: "bs04" },
  { prodName: "Cooling Fan", price: 50, color: "Purple", prodId: "cf05" },
  { prodName: "Smart Watch", price: 180, color: "Gray", prodId: "sm06" },
];

const Home = () => {
  return (
    <main>
      <Products productLists={products} />
    </main>
  );
};

export default Home;
