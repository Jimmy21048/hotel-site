
export default function Tabs({category, tabItems, checkFood}) {
    return (
        <div className="tabs"style={{visibility: checkFood ? "hidden": "initial"}}>
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