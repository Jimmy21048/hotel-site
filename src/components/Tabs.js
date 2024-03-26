
// import { Link } from "react-router-dom"
export default function Tabs({category, tabItems}) {
    return (
        <div className="tabs">
            <div className="tabs-tabs">
                {
                    tabItems.map((item) => {
                        return (
                            <a key={item} href={"#" + item}> {item}</a>
                        )
                    })
                }
            </div>
        </div>
    )
}