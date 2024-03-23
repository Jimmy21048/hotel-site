import { Link } from "react-router-dom"
export default function Tabs({imgSrc, tabItems}) {
    return (
        <div className="tabs">
            <div className="tabs-tabs">
                {
                    tabItems.map((item) => {
                        return (
                            <Link to={"#" + item}> {item}</Link>
                        )
                    })
                }
            </div>
        </div>
    )
}