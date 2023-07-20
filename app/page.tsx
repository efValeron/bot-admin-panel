import TheTable from "@/components/TheTable";

export default function Home() {
  const tableData = {
    rows: [
      {id: 1, name: "Apple MacBook Pro 17\"", color: "Silver", category: "Laptop", price: 2999},
      {id: 2, name: "Microsoft Surface Pro", color: "White", category: "Laptop PC", price: 1999},
      {id: 3, name: "Magic Mouse 2", color: "Black", category: "Accessories", price: 99},
      {id: 3, name: "Magic Mouse 2", color: "Black", category: "Accessories", price: 99},
      {id: 3, name: "Magic Mouse 2", color: "Black", category: "Accessories", price: 99},
      {id: 3, name: "Magic Mouse 2", color: "Black", category: "Accessories", price: 99},
    ]
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="container">
        <TheTable tableData={tableData}/>
      </div>
    </div>
  )
}
