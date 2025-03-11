import MainRoute from "./route/MainRoute";

function App() {
  // async function getData() {
  //  await fetch("http://10.10.10.24:9091/product/getAll", {
  //     method: "GET",
  //     headers: {
  //         "Content-Type": "application/json"
  //     }
  // })
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.error(error));
  // }
  // getData();
  return <MainRoute />;
}
export default App;
