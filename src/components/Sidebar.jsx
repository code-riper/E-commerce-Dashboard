export default function Sidebar(){
    return(
        <div className="dashboard-sidebar d-flex flex-column p-2 p-md-3 bg-white border-end">
            <h4 className="fw-semibold mb-3 ">Dashboard</h4>

            <ul className="nav nav-pills flex-column gap-2">

                <li className="nav-item">
                    <a href="#" className="nav-link active rounded px-3 py-2">Home</a>
                </li>

                <li className="nav-item">
                    <a href="#" className="nav-link rounded px-3 py-2">Users</a>
                </li>

                <li className="nav-item">
                    <a href="#" className="nav-link rounded px-3 py-2">Products</a>
                </li>

                <li className="nav-item">
                    <a href="#" className="nav-link rounded px-3 py-2">Orders</a>
                </li>

                <li className="nav-item">
                    <a href="#" className="nav-link rounded px-3 py-2">Analytics</a>
                </li>

                <li className="nav-item">
                    <a href="#" className="nav-link rounded px-3 py-2">Settings</a>
                </li>
            </ul>
        </div>
    )
}