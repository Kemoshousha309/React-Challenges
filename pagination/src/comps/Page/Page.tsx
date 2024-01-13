import "./Page.css"
import { Record } from "../../App"

interface PageProps  {records: Record[]}
 
export function Page({records}: PageProps) {
    return (
        <div className="page-container">
            <div className="page-main-row">
                <h3>ID</h3>
                <h3>Name</h3>
                <h3>Email</h3>
            </div>
            {
                records.map(record=> {
                    return (
                        <div className="page-row">
                            <p>{record.id}</p>
                            <p>{record.title}</p>
                            <p>{record.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

