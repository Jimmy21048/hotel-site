import Services from "./ServicesHeader"

export default function Foods() {

    fetch('www.themealdb.com/api/json/v1/1/categories.php')
    .then((response) => {
      console.log(response);
      return response.text();
    })
    .then(data => {
        console.log(data);
    })
    return (
        <div className="foods">
            <Services />
        </div>
    )
}