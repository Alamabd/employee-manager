import React from "react"

const Header: React.FC = () => {
    return(
        <header className="flex items-end gap-4">
            <img src="../employee.svg" alt="icon" width={40} />
            <h1 className="text-3xl font-semibold">Employee Record</h1>
        </header>
    )
}

export default Header;